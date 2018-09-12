$('.serveces-picture').click(function () {
    let num = $(this).index();

    $('.services-picture').removeClass('serveces-picture-active');
    $(this).addClass('serveces-picture-active');

    $('.serveces-picture').removeClass('serveces-picture-active');
    $($('.serveces-picture')[num]).addClass('serveces-picture-active');
});