window.addEventListener('load',function() {
  var loginButton = document.getElementById("login");
  loginButton.addEventListener('click',function(e) {
    e.preventDefault();
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    //var validar = true;

    //RegExp
    var validarEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //condicional para validar email
    if(email.value == ""){
      showMessage("read-email", "* Email no puede estar en blanco");
    } else{
       showMessage("read-email", "");
    }

    //condicional para validar password
    if (password.value == "") {
      showMessage("read-password", "* Password no puede estar en blanco");
    } else{
       showMessage("read-password", "");
    }

    if (!validarEmail.test(email.value)) {
      showMessage("read-email", "* Email no es válido");
    } else{
       showMessage("read-email", "");
    }

    if(validUsers(email.value, password.value)){
      window.location = "index.html";
    } else {
      showMessage("read-password", "Usuario inválido");
    }

    function validUsers(){
      var users = [{email : "kath@laboratoria.la", password : 12345},
                        {email : "Myriam@laboratoria.la", password : 54321},
                        {email : "lulu@laboratoria.la", password : 11111}];
                        
      users.forEach(function(e){
        if(e.email == email.value && e.password == password.value){
          alert("Bienvenido");
        }
      })
    }
  });
});


function showMessage(elementId,message) {
  var span = document.getElementById(elementId);
  span.innerHTML = message;
}
