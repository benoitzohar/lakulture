import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames";

import "./SwitchWithSlide.css";

// Copied from / Inspired by https://medium.com/onfido-tech/animations-with-react-router-8e97222e25e1

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animating: false,
      position: Slider.CENTER,
      animatePrepare: false
    };

    this.startAnimation = this.startAnimation.bind(this);
    this.postPrepareAnimation = this.postPrepareAnimation.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount() {
    this.startAnimation(this.props.position);
    if (this.node) {
      this.node.addEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.node) {
      this.node.removeEventListener("transitionend", this.onTransitionEnd);
    }
  }

  componentWillReceiveProps(newProps) {
    if (newProps.position !== this.props.position) {
      this.startAnimation(newProps.position, newProps.animationCallback);
    }
  }

  startAnimation(position, animationCallback) {
    const noAnimate = position === Slider.CENTER;
    const animatingOut = [Slider.TO_LEFT, Slider.TO_RIGHT].includes(position);
    const currentlyIn = [
      Slider.CENTER,
      Slider.FROM_LEFT,
      Slider.FROM_RIGHT
    ].includes(this.state.position);
    if (noAnimate || (currentlyIn && animatingOut)) {
      // in these cases we don't need to prepare our animation at all, we can just
      // run straight into it
      this._animationCallback = animationCallback;
      return this.setState({
        animatePrepare: false,
        position
      });
    }

    this._animationCallback = this.postPrepareAnimation;
    // in case the transition fails, we also post-prepare after some ms (whichever
    // runs first should cancel the other)
    this._postPrepareTimeout = setTimeout(this.postPrepareAnimation, 500);

    this.setState({
      animating: true,
      animatePrepare: true,
      position
    });
  }

  postPrepareAnimation() {
    clearTimeout(this._postPrepareTimeout);
    this._animationCallback = null;

    this.setState(
      { animatePrepare: false },
      () => (this._animationCallback = this.props.animationCallback)
    );
  }

  onTransitionEnd(e) {
    // the Slider transitions the `transform` property. Any other transitions
    // that occur on the element we can just ignore.
    if (e.propertyName !== "transform") return;

    const callback = this._animationCallback;
    delete this._animationCallback;

    // an animation callback is another animation, so we only set `animating` to
    // `false` when we finish the follow-up animation
    if (callback) setTimeout(callback, 0);
    else this.setState({ animating: false });
  }

  render() {
    return (
      <div
        ref={node => (this.node = node)}
        className={classNames("animatable", {
          to: [Slider.TO_LEFT, Slider.TO_RIGHT].includes(this.state.position),
          from: [Slider.FROM_LEFT, Slider.FROM_RIGHT].includes(
            this.state.position
          ),
          right: [Slider.TO_RIGHT, Slider.FROM_RIGHT].includes(
            this.state.position
          ),
          left: [Slider.TO_LEFT, Slider.FROM_LEFT].includes(
            this.state.position
          ),
          prepare: this.state.animatePrepare
        })}
        data-qa-loading={Boolean(
          this.props["data-qa-loading"] || this.state.animating
        )}
      >
        <div className={this.props.className}>{this.props.children}</div>
      </div>
    );
  }
}

Slider.CENTER = "CENTER";
Slider.TO_LEFT = "TO_LEFT";
Slider.TO_RIGHT = "TO_RIGHT";
Slider.FROM_LEFT = "FROM_LEFT";
Slider.FROM_RIGHT = "FROM_RIGHT";

class SlideOut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      childPosition: Slider.CENTER,
      curChild: props.children,
      curUniqId: props.uniqId,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const prevUniqId = prevProps.uniqKey || prevProps.children.type;
    const uniqId = this.props.uniqKey || this.props.children.type;

    if (prevUniqId !== uniqId) {
      this.setState({
        childPosition: Slider.TO_LEFT,
        curChild: this.props.children,
        curUniqId: uniqId,
        prevChild: prevProps.children,
        prevUniqId,
        animationCallback: this.swapChildren
      });
    }
  }

  swapChildren = () => {
    this.setState({
      childPosition: Slider.FROM_RIGHT,
      prevChild: null,
      prevUniqId: null,
      animationCallback: null
    });
  };

  render() {
    return (
      <Slider
        position={this.state.childPosition}
        animationCallback={this.state.animationCallback}
      >
        {this.state.prevChild || this.state.curChild}
      </Slider>
    );
  }
}

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
  updateStep,
  children
}) => (
  <Route
    render={({ location }) => (
      <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
        <CustomSwitch location={location}>{children}</CustomSwitch>
      </AnimatorComponent>
    )}
  />
);

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

export default SwitchWithSlide;
