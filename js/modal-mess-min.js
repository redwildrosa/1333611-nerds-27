var modalMess=document.querySelector(".modal-mess"),mapButton=document.querySelector(".main-map .button"),modalButtonCross=modalMess.querySelector(".button-cross"),modalForm=modalMess.querySelector("form"),fieldName=modalMess.querySelector("[name=fullname]"),fieldEmail=modalMess.querySelector("[name=email]"),fieldComment=modalMess.querySelector("[name=comment]"),modalButton=modalMess.querySelector("[type=submit]"),isStorageSupport=!0,storageName="",storageEmail="",storageComment="";try{storageName=localStorage.getItem("fieldName"),storageEmail=localStorage.getItem("fieldEmail"),storageComment=localStorage.getItem("fieldComment")}catch(e){isStorageSupport=!1}mapButton.addEventListener("click",function(e){e.preventDefault(),modalMess.classList.add("modal-mess--open"),storageName?(fieldName.value=storageName,fieldEmail.focus()):fieldName.focus(),storageEmail&&(fieldEmail.value=storageEmail,storageName&&fieldComment.focus()),storageComment&&(fieldComment.value=storageComment)}),modalButtonCross.addEventListener("click",function(e){e.preventDefault(),modalMess.classList.remove("modal-mess--open"),modalMess.classList.remove("modal-mess--error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modalMess.classList.contains("modal-mess--open")&&(e.preventDefault(),modalMess.classList.remove("modal-mess--open"),modalMess.classList.remove("modal-mess--error"))}),modalForm.addEventListener("submit",function(e){fieldName.value&&fieldEmail.value&&fieldComment.value?isStorageSupport&&(localStorage.setItem("fieldName",fieldName.value),localStorage.setItem("fieldEmail",fieldEmail.value),localStorage.setItem("fieldComment",fieldComment.value)):(e.preventDefault(),modalMess.classList.remove("modal-mess--error"),modalMess.offsetWidth=modalMess.offsetWidth,modalMess.classList.add("modal-mess--error"))});