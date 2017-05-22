$('.top-left').click(function(){
    $('.left-menu').addClass('active');
    $('.right-menu').addClass('active');
    $('.black').addClass('active');
});

$('.black').click(function(){
    $('.left-menu').removeClass('active');
    $('.right-menu').removeClass('active');
    $('.black').removeClass('active');
});


