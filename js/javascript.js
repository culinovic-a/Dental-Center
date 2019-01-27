$(document).ready(function() {

// FORM VALIDATION
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();



// SMOOTH SCROLLING
$("#nav ul li a[href^='#']").on('click', function(e) {
  // prevent default anchor click behavior
  e.preventDefault();
  // animate
  $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 300, function(){
      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = this.hash;
    });
});



// SCROLLSPY
$('body').scrollspy({
  target: '#mainNav',
  offset: 56
});



// DATE-TIME PICKER 
$('#datetimepicker3, #datetimepicker4, #datetimepicker5, #datetimepicker6').datetimepicker({
  format:'d.m.Y H:i',
  inline:true,
  lang:'ru'
});

});