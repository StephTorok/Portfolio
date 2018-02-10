$( document ).ready(function() {
   var isMobile = window.matchMedia("only screen and (max-width: 760px)");
   if (isMobile.matches) {
      $(".submenu").click(function(){
         $(this).children("ul").slideToggle();
      });
      $(".submenu > a").removeAttr("href");
   }
 });
