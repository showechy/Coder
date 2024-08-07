const InputKey = document.getElementById("input_decode_key");
const InputMessage = document.getElementById("input_decode_message");
const BtnSubmit = document.getElementById("btn_decode_submit");
const resultDiv = document.getElementById("result_div");

if (GetData(DATA_KEY)) {
  InputKey.value = GetData(DATA_KEY);
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

  var jsonedMessage = TextToJson(message);
  if (!jsonedMessage) {
    showModal(MESSAGES.ERROR_DECODE);
    return;
  }
  var encodedMessage = await decryptMessage(key, jsonedMessage);
  if (encodedMessage) {
    resultDiv.innerHTML = encodedMessage;
  } else {
    showModal(MESSAGES.ERROR_DECODE);
  }
};

BtnSubmit.addEventListener("click", EncodeText);
