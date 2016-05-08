/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
    $('#aviso').modal();
    
    /*initialize*/
    $('#divPaginasHeader').hide();
    $('#divConocenos').hide();
    $('#divBodas').hide();
    $('#divContacto').hide();
    /*fin initialize*/
    
    /*eventos de elementos*/
    //menu
    $('#ulMenu li').click(function(){
        $("#ulMenu li").each(function(){
            if ($(this).hasClass('active'))
            {    
                $(this).removeClass('active');
            }
        });
        //activamos la pestaña pulsada
        $(this).addClass('active');
        //ocultamos todos contenedores
        $('.paginas').each(function(){
            $(this).hide();
        });
        //depende de que elemento se haya activado mostramos unos elementos u otros.
        switch($(this).attr('id'))
        {
            case 'liConocenos':
              $('#imgPagina').attr('src', 'imagenes/slide_logo.jpg');
              $('#tituloPagina').text('---CONOCENOS---');
              $('#divPaginasHeader').show();
              $('#divConocenos').show();
              break;
            case 'liBodas':
              $('#imgPagina').attr('src', 'imagenes/slide_bodas.jpg');
              $('#tituloPagina').text('---BODAS---');
              $('#divPaginasHeader').show();
              $('#divBodas').show();
              break;
            case 'liBautizos':
              $('#imgPagina').attr('src', 'imagenes/slide_bautizos.jpg');
              $('#tituloPagina').text('---BAUTIZOS---');
              $('#divPaginasHeader').show();
              $('#divBautizos').show();
              break;
            case 'liComuniones':
              $('#imgPagina').attr('src', 'imagenes/slide_comuniones.jpg');
              $('#tituloPagina').text('---COMUNIONES---');
              $('#divPaginasHeader').show();
              $('#divComuniones').show();
              break;
            case 'liPeques':
              $('#imgPagina').attr('src', 'imagenes/slide_peques.jpg');
              $('#tituloPagina').text('---PEQUES---');
              $('#divPaginasHeader').show();
              $('#divPeques').show();
              break;
            case 'liFamilia':
              $('#imgPagina').attr('src', 'imagenes/slide_familias.jpg');
              $('#tituloPagina').text('---FAMILIAS---');
              $('#divPaginasHeader').show();
              $('#divFamilias').show();
              break;
            case 'liContacto':
              $('#tituloPagina').text('---CONTACTO---');
              $('#divPaginasHeader').show();
              $('#divContacto').show();
              break;
            
        }
    });

    /*Cambiar el tipo de panel para saber cual está recibiendo el foco del ratón*/
    $('.panelInicio').mouseover(function(){
        $(this).removeClass('panel-warning');
        $(this).addClass('panel-default');
    });
    $('.panelInicio').mouseout(function(){
        $(this).removeClass('panel-default');
        $(this).addClass('panel-warning');
    });
    
    
    
     /*Comprobación formulario*/
    $("#formulario").validate({
    rules: {
      nombre: {
        required: true,
        lettersonly: true
      },
      telefono: {
        required: true,
        digits: true,
        minlength: 9,
	maxlength: 9
      },
      email: {
        required: true,
	email: true
      },
      asunto: {
        required: true
      },
      mensaje: {
        required: true,
        maxlength: 500
      }
    },
    messages: {
        nombre: 'Debes introducir un nombre.',  
        email: 'Introduce un email valido.',
        telefono: 'Introduce un telefono para facilitar el contacto.',
        asunto: 'Debes indicar el motivo de tu mensaje.',
        mensaje: 'Debes introducir un mensaje.',
    },
    submitHandler: function() {
      alert("Se ha enviado tu mensaje.");
    }
  });
    
    
    
    
     
});

