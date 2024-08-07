const InputKey = document.getElementById("input_encode_key");
const InputMessage = document.getElementById("input_encode_message");
const BtnSubmit = document.getElementById("btn_encode_submit");

if (GetData(DATA_KEY)) {
  InputKey.value = GetData(DATA_KEY);
  var t = JsonToText(
    `{"iv":"87SL/E1fY3t7YXqj","message":"6N1wUxkxOg8EZpiTcE+pGw=="}`
  );
  console.log(t);
}

const EncodeText = async () => {
  var key = InputKey.value;
  var message = InputMessage.value;
  if (message.length < 1) {
    showModal(MESSAGES.MESSAGE_INPUT_VALIDATION);
    return;
  }
  if (!key || key.length < 15) {
    key = generateUUID();
    InputKey.value = key;
    SaveData(DATA_KEY, key);
  }

  var encodedMessage = await encryptMessage(key, message);
  var textedMessage = JsonToText(encodedMessage);

  const result = await CopyTextToClipboard(textedMessage);
  if (result) {
    BtnSubmit.innerHTML = "کپیش کردم برات! 3";
    let count = 3;

    const intervalId = setInterval(() => {
      count -= 1;
      if (count > 0) {
        BtnSubmit.innerHTML = `کپیش کردم برات! ${count}`;
      } else {
        clearInterval(intervalId);
        BtnSubmit.innerHTML = "کپیش کن بره تو کیبوردم!";
      }
    }, 1000);
  }
};

BtnSubmit.addEventListener("click", EncodeText);
