$( document ).ready(function() {

    //Boton Saludo
    $("#btn1").on('click',function(){
        let saludo = "Hola " + $("#nombre").val();
        alert(saludo);
    });

    //Boton Mensjae
    $("#btn2").on('click',function(){
        let saludo = "Hola " + $("#nombre").val();
        $("#mensaje").html(saludo);
    });

    //Validacion form1
    $("#form1").validate({
        lang: 'es',
        rules:{
            nombre:{
                required:true
            },
            edad:{
                required:true,
                number:true
            }
        }
    });

    
  });