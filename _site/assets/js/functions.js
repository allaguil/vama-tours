$( document ).ready(function() {

  // Get started!
  // alert('YES');

  // function myfunction(X) {
  //   console.log('entra');
  //   X.classList.toggle("change");
  // }


  var burguer = document.getElementsByClassName('navbar-toggler');

  if (burguer.length > 0) {

    burguer[0].onclick = function() {  
      burguer[0].classList.toggle("change");
    };

  };


});
