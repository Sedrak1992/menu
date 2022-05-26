const buttons = document.getElementById('buttons');

const modals = document.querySelector(".menu");

  buttons.onclick = function(){
   modals.classList.toggle("menu_active");
  }




// const images = document.querySelectorAll("img");

// const slideNextBtn = document.querySelector("#slide-next");
// let activeIndex = 0;

// slideNextBtn.onclick = function () {
//   images[activeIndex].classList.remove("sdide-aktve");

//   if (activeIndex + 1 === images.length) {
//     activeIndex = 0;
//   } else {
//     activeIndex++;
//   }
//   images[activeIndex].classList.add("sdide-aktve");
// };

// for (let img of images) {
//   img.onmouseenter = function () {
//     img.classList.add("zoom");
//   };
//   img.onmouseleave = function () {
//     setTimeout(function () {
//       img.classList.remove("zoom");
//     }, 1000);
//   };
// }








// // const openFormButtun = document.getElementById("open-button");

// // const modelbuttons = document.getElementById('model-button');

// // const modal = document.getElementsByClassName('modal')[0];

// // function showModal (){

// //   if (modal.classList.contains("hay-modol")){
// //     modal.classList.remove("hay-modol");
// //   }
// //   // modal.classList.toggle('hay-modol');
// // }
// // function hidoeModal (){
// //   modal.classList.add("")
// // }

// // openFormButtun.onclick = showModal;

// // modelbuttons.onclick = togglkModl;
