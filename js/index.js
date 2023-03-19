// let mybutton = document.getElementById("myBtn");
//
// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//   if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
//
// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
// window.addEventListener("wheel", (e) => {
//     const box = document.querySelector('.main-portfolio');
//     const boxPosition = box.getBoundingClientRect().top;
//     const screenPosition = window.innerHeight / 1.5;
//     console.log(e.isTrusted)
//     if (boxPosition < screenPosition) {
//       box.classList.add('bounce');
//     } else {
//       box.classList.remove('bounce');
//     }
// });
$(document).ready(function() {
    const sections = $('.main-portfolio');
    const windowHeight = $(window).height();
  
    $(window).scroll(function() {
      const scrollTop = $(this).scrollTop();
  
      sections.each(function() {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();
  
        if (scrollTop + windowHeight / 2 > sectionTop && scrollTop + windowHeight / 2 < sectionTop + sectionHeight) {
          const sectionId = $(this).attr('id');
          //$('#'+sectionId).addClass('bounce');
          //console.log(`Section ${sectionId} is in the center of the screen.`);
        }else{
          const sectionId = $(this).attr('id');
          //$('#'+sectionId).removeClass('bounce');
        }
      });
    });

    $(".main-portfolio").hover(function(){
      const sectionId = $(this).attr('id');
      const imageName = $(this).attr('class');
      
      if($(this).find('img.leftimg').first().hasClass("leftimg")) {
        $(this).find('img.leftimg').addClass('arrowredbox');
      } else {
        $(this).find('img.rightimg').addClass('arrowredbox2');
      }
    }, function() {
      $(this).find('img').removeClass('arrowredbox arrowredbox2');
    });
  });
