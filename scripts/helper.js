const DATA_KEY = CONFIGS.DATABASE_KEY;

function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxxxx-xxxxx-4xxxx-yxxxx-xxxxxxxxxxxxxxxx".replace(
    /[xy]/g,
    function (c) {
      var r = Math.random() * 16; //random number between 0 and 16
      if (d > 0) {
        //Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {
        //Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
    }
  );
}

const JsonToText = (json) => {
  try {
    return btoa(unescape(encodeURIComponent(json)));
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
const TextToJson = (text) => {
  try {
    var test = decodeURIComponent(escape(atob(text)));
    console.log("ok:", test);
    return test;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const MESSAGES = {
  MESSAGE_INPUT_VALIDATION: `<div class="alert alert-warning" role="alert">
خب لعنتی حداقل یه دونه کاراکتر وارد کن 😑
</div>
`,
  ERROR_DECODE: `<div class="alert alert-danger" role="alert">
خیلی متاسفم نتونستم پیامت رو بازگشایی کنم 🥲
</div>`,
  SUCCESS: `<div class="alert alert-success" role="alert">
برات انجامش دادم برو حالشو ببر 🌚
</div>`,
  INVALID_KEY: `<div class="alert alert-warning" role="alert">
لعنت بهت این دیگه چه کلیدیه بهم دادی 😬
</div>`,
};
