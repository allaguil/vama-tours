window.addEventListener('scroll', () => {
  console.log('Scrolled!')
  });

$( document ).ready(function() {

  $('.h1_wrapper').fadeIn(4500);

  // Burguer Nav Animation
  var burguerNav = document.getElementsByClassName('navbar-toggler');

  if (burguerNav.length > 0) {
    burguerNav[0].onclick = function() {  
      burguerNav[0].classList.toggle("change");
    };
  };

});
