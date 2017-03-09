window.addEventListener('load',function() {
  var loginButton = document.getElementById('login');
  loginButton.addEventListener('click',function(e) {
    e.preventDefault();
    var email = document.getElementById('email');
    var password = document.getElementById('password');

    var validarEmail = /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/;
    var msjValidar = document.getElementById('read-email');

    if(email.value == ""){
      msjValidar.innerHTML = "* Este campo es obligatorio";
    }

  });
});
