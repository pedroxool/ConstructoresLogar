//Animacion de subir
document.getElementById("button-up").addEventListener("click", scrollUp);
function scrollUp(){

  var currentScroll = document.documentElement.scrollTop||document.body.scrollTop;
  
  if(currentScroll > 0){
    window.requestAnimationFrame(scrollUp);
    window.scrollTo (0,currentScroll - ( currentScroll / 20 ));
  }
}
buttonUp = document.getElementById("button-up");
socialBar = document.getElementById("myBtn1");

window.onscroll = function(){
  var scroll = document.documentElement.scrollTop ||document.body.scrollTop;
  if(scroll > 500){
    buttonUp.style.transform = "scale(1)";
    socialBar.style.transform = "scale(1)";
  }else if (scroll <400){
    buttonUp.style.transform = "scale(0)";
    socialBar.style.transform = "scale(0)";
  }
}






// //Get the button
// // var mybutton = document.getElementById("myBtn");
// var mybutton1 = document.getElementById("myBtn1");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
//     // mybutton.style.display = "block";
   
//     mybutton1.style.display = "block";
//   } else {    
    
//     // mybutton.style.display = "none";
//     mybutton1.style.display = "none";
//   }
// }

// // buttonUp = document.getElementById("myBtn");
// // window.onscroll = function(){
// //   var scroll = document.documentElement.scrollTop;
// //   if(scroll > 100){
// //     mybutton.style.transform= "scale(1)";
// //   }else if(scroll<100){
// //     mybutton.style.transform= "scale(0)";
// //   }
// // }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }