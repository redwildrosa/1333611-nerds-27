var modalMess=document.querySelector(".modal-mess"),mapButton=document.querySelector(".main-map .button"),modalButtonCross=document.querySelector(".modal-mess .button-cross"),modalForm=modalMess.querySelector("form"),fieldName=modalMess.querySelector("[name=fullname]"),fieldEmail=modalMess.querySelector("[name=email]"),modalButton=modalMess.querySelector("[type=submit]"),isStorageSupport=!0,storageName="",storageEmail="";try{storageName=localStorage.getItem("fieldName"),storageEmail=localStorage.getItem("fieldEmail")}catch(e){isStorageSupport=!1}mapButton.addEventListener("click",function(e){e.preventDefault(),console.log("Клик-открыть"),modalMess.classList.add("modal-mess--open"),storageName?(fieldName.value=storageName,fieldEmail.focus()):fieldName.focus(),storageEmail&&(fieldEmail.value=storageEmail,modalButton.focus())}),modalButtonCross.addEventListener("click",function(e){e.preventDefault(),console.log("Клик-закрыть"),modalMess.classList.remove("modal-mess--open"),popup.classList.remove("modal-mess--error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMess.classList.contains("modal-mess--open")&&(e.preventDefault(),console.log("ESC-закрыть"),modalMess.classList.remove("modal-mess--open"),modalMess.classList.remove("modal-mess--error"))}),modalForm.addEventListener("submit",function(e){fieldName.value&&fieldEmail.value?isStorageSupport&&(localStorage.setItem("fieldName",fieldName.value),localStorage.setItem("fieldEmail",fieldEmail.value)):(e.preventDefault(),console.log("Заполните обязательные поля"),modalMess.classList.remove("modal-mess--error"),modalMess.offsetWidth=modalMess.offsetWidth,modalMess.classList.add("modal-mess--error"))});
