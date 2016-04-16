$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: "header", offset: 110});   

  // Add smooth scrolling on all links inside the navbar
  $(".cards a").on('click', function(event) {

    $("cards a").removeClass('active');
    $(this).addClass('active');

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 110
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });
});