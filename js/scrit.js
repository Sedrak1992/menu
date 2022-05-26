const buttons = document.getElementById('buttons');

const modals = document.querySelector(".menu");

  buttons.onclick = function(){
   modals.classList.toggle("menu_active");
  }

