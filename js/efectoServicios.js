$(document).ready(function(){
    
    // Efecto Menu
        $('.menu a').each(function(index, elemento){
            $(this).css({
                'top': '-200px'
            });
    
            $(this).animate({
                top: '0'
            },2000 + (index * 500));
        });
    
    
    // Efecto Header
        if ($(window).width() > 100){
            $('header .textos').css({
                opacity: 0,
                marginTop: 0
            });
    
            $('header .textos').animate({
                opacity: 1,
                marginTop: '-500px'
            },1500);
        }
        
    
    });