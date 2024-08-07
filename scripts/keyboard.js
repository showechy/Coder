// تابع برای کپی کردن متن به کلیپ بورد با استفاده از fallback
function fallbackCopyTextToClipboard(text) {
  return new Promise((resolve, reject) => {
    var textArea = document.createElement("textarea");
    textArea.value = text;

    // جلوگیری از اسکرول به پایین
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Fallback: Copying text command was " + msg);
      resolve(successful);
    } catch (err) {
      console.error("Fallback: Oops, unable to copy", err);
      reject(err);
    } finally {
      document.body.removeChild(textArea);
    }
  });
}

const CopyTextToClipboard = async (text) => {
  try {
    if (!navigator.clipboard) {
      return await fallbackCopyTextToClipboard(text);
    }
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Error copying text: ", err);
    return undefined;
  }
};
