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
              $('#tituloPagina').text('CONOCENOS');
              $('#divPaginasHeader').show();
              $('#divConocenos').show();
              break;
            case 'liBodas':
              $('#tituloPagina').text('BODAS');
              $('#divPaginasHeader').show();
              $('#divBodas').show();
              break;
            case 'liContacto':
              $('#tituloPagina').text('CONTACTO');
              $('#divPaginasHeader').show();
              $('#divContacto').show();
              break;
        }
    });
    
    $('#prueba').click(function(){
        $('#imagemodal').modal('show');
    });
    
});

