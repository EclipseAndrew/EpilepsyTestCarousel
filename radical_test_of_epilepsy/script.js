
document.querySelector(".start-button").addEventListener("click", function () {
   document.querySelector('.main_field').classList.add('color_changer')
  });


  document.querySelector(".stop-button").addEventListener("click", function () {
    document.querySelector('.main_field').classList.remove('color_changer')
   });