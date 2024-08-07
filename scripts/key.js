const InputKey = document.getElementById("input_key");
const BtnSubmit = document.getElementById("btn_key_submit");

const SubmitForm = () => {
  var key = InputKey.value;
  if (key && key.length > 15) {
    SaveData(DATA_KEY, key);
    showModal(MESSAGES.SUCCESS);
  } else {
    showModal(MESSAGES.INVALID_KEY);
  }
};

BtnSubmit.addEventListener("click", SubmitForm);
