var modalMess = document.querySelector(".modal-mess");
var mapButton = document.querySelector(".main-map .button");
var modalButtonCross = modalMess.querySelector(".button-cross");

var modalForm = modalMess.querySelector("form");
var fieldName = modalMess.querySelector("[name=fullname]");
var fieldEmail = modalMess.querySelector("[name=email]");
var fieldComment = modalMess.querySelector("[name=comment]");
var modalButton = modalMess.querySelector("[type=submit]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";
var storageComment = "";

try {
  storageName = localStorage.getItem("fieldName");
  storageEmail = localStorage.getItem("fieldEmail");
  storageComment = localStorage.getItem("fieldComment");
} catch (err) {
  isStorageSupport = false;
}

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMess.classList.add("modal-mess--open");

  if (storageName) {
    fieldName.value = storageName;
    fieldEmail.focus();
  } else {
    fieldName.focus();
  }

  if (storageEmail) {
    fieldEmail.value = storageEmail;
    if (storageName) {
      fieldComment.focus();
    }
  }

  if (storageComment) {
    fieldComment.value = storageComment;
  }
});

modalButtonCross.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMess.classList.remove("modal-mess--open");
  modalMess.classList.remove("modal-mess--error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modalMess.classList.contains("modal-mess--open")) {
    evt.preventDefault();
    modalMess.classList.remove("modal-mess--open");
    modalMess.classList.remove("modal-mess--error");
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!fieldName.value || !fieldEmail.value || !fieldComment.value) {
    evt.preventDefault();
    modalMess.classList.remove("modal-mess--error");
    modalMess.offsetWidth = modalMess.offsetWidth;
    modalMess.classList.add("modal-mess--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fieldName", fieldName.value);
      localStorage.setItem("fieldEmail", fieldEmail.value);
      localStorage.setItem("fieldComment", fieldComment.value);
    }
  }
});



