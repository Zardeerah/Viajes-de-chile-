
$(document).ready(function () {
$("button").tooltip()



  // Smooth scroll para los enlaces internos
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  })


  



});





