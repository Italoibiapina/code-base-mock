metaDados = 
{
    body : { 
        "login-form": {
            titulo: 'Login Form Teste'
        }
    }
}

$(document).ready(function(){
    alert('on ready !');
    /* $("p").click(function(){
      $(this).hide();
    }); */

    loadComponente('login-form');

  });

  function loadComponente(compName) {
    $('body').prepend('<div id="'+compName+'"> Teste Preapend div</div>');
    $('#'+compName).load('../template-basico/login-form/login-form.html');


  }