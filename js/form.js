var form = document.querySelector(".search-form");
var btn = document.querySelector(".btn-search");

form.classList.toggle("modal-content");
btn.addEventListener("click",function(evt){
  evt.preventDefault();
  console.log("Клик по кнопке");
  form.classList.toggle("modal-content");
});
