$(document).ready(function(){
  $(window).on('scroll', function(){
    var scroll = $(window).scrollTop();
    if(scroll>=50){
      $(".sticky").addClass("stickyAdd");
    }else{
      $(".sticky").removeClass("stickyAdd");
    }
  })
})
myButton = document.getElementById("myBtn");
      window.onscroll = function () {
        scrollFunction();
      };

      function scrollFunction() {
        if (
          document.body.scrollTop > 50 ||
          document.documentElement.scrollTop > 50
        ) {
          myButton.style.display = "block";
        } else {
          myButton.style.display = "none";
        }
      }

      function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

      var typed = new Typed(".element",{
          strings: ["Camera", "Sound", "Role", "Action", "Punchnama Films"],
          smartBackspace:true,
          typeSpeed:100,
          backSpeed:100,
          loop:true,
          loopCount:Infinity,
          startDelay:1000
      });