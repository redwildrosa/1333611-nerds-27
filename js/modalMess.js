var modalMess = document.querySelector(".modal-mess");
var mapButton = document.querySelector(".main-map .button");
var modalButtonCross = document.querySelector(".modal-mess .button-cross");

var modalForm = modalMess.querySelector("form");
var fieldName = modalMess.querySelector("[name=fullname]");
var fieldEmail = modalMess.querySelector("[name=email]");
var modalButton = modalMess.querySelector("[type=submit]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

try {
  storageName = localStorage.getItem("fieldName");
  storageEmail = localStorage.getItem("fieldEmail");
} catch (err) {
  isStorageSupport = false;
}

mapButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик-открыть");
  modalMess.classList.add("modal-mess--open");

  if (storageName) {
    fieldName.value = storageName;
    fieldEmail.focus();
  } else {
    fieldName.focus();
  }
  if (storageEmail) {
    fieldEmail.value = storageEmail;
    modalButton.focus();
  }
});

modalButtonCross.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("Клик-закрыть");
  modalMess.classList.remove("modal-mess--open");
  popup.classList.remove("modal-mess--error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27 && modalMess.classList.contains("modal-mess--open")) {
    evt.preventDefault();
    console.log("ESC-закрыть");
    modalMess.classList.remove("modal-mess--open");
    modalMess.classList.remove("modal-mess--error");
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!fieldName.value || !fieldEmail.value) {
    evt.preventDefault();
    console.log("Заполните обязательные поля");
    modalMess.classList.remove("modal-mess--error");
    modalMess.offsetWidth = modalMess.offsetWidth;
    modalMess.classList.add("modal-mess--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fieldName", fieldName.value);
      localStorage.setItem("fieldEmail", fieldEmail.value);
    }
  }
});



