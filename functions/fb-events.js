const { Facebook } = require("fb");

const { FB_APP_ID, FB_APP_SECRET } = process.env;

const fb = new Facebook({
  appId: FB_APP_ID,
  appSecret: FB_APP_SECRET,
  version: "v2.4"
});
fb.setAccessToken(`${FB_APP_ID}|${FB_APP_SECRET}`);

exports.handler = async (event, context) => {
  fb.api(
    "/1645486232341067/events",
    { fields: "cover,name,description,id,start_time" },
    res => {
      console.log("[BZ] res:", res);

      if (!res || res.error) {
        console.log(!res ? "error occurred" : res.error);
        return;
      }
      console.log(res.id);
      console.log(res.name);
    }
  );
};

//exports.handler();
