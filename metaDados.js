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
    $('#'+compName).load('https://italoibiapina.github.io/code-base-mock/template-basico/login-form/login-form.html');

    let vTitulo = metaDados.body["login-form"].titulo;
    $('#'+compName, '#titulo').html('Hello World');

  }