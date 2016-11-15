  $('.flip').click(function(){
        $(this).find('.message').addClass('flipped').mouseleave(function(){
            $(this).removeClass('flipped');
        });
        return false;
    });