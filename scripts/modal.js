const modalBody = document.getElementById("modal_body");

const showModal = (text) => {
  modalBody.innerHTML = text;
  const modal = new bootstrap.Modal("#staticBackdrop");
  modal.show();
};
