$(document).ready(function(){
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    };


    $("#flip").click(function(){
        $("#panel").fadeToggle(1000);
    });

    $(function(){
	  $('.rotating-slider').rotatingSlider({
//	    // auto play
//	    autoRotate: true,
//	    // auto play interval
//	    autoRotateInterval: 6000,
//        // is draggable?
//	    draggable: true,
//	    // slider controls
//	    directionControls: true,
//	    directionLeftText: '&lsaquo;',
//	    directionRightText: '&rsaquo;',
//	    // animation speed
//	    rotationSpeed: 750,
//	    // size of slider
//	    slideHeight : 360,
//	    slideWidth : 480,
	});

 });
