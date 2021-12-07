
$('.about-img').mousemove(function (event) {
    $(this).removeClass('transition-effect');
    let mouseX = event.offsetX;
    let itemW = $(this).width();
    let degree = (360 * mouseX) / itemW;
    if (itemW - 30 > mouseX) {
        $(this).css('transform', 'perspective(1000px) rotateY(' + degree / 20 + 'deg)');
        $(this).css('box-shadow', '' + degree / 16 + 'px 0px 20px #fbe989');
    }

}).mouseleave(function () {
    $(this).addClass('transition-effect');
    $(this).css('box-shadow', '1px 0px 20px #c1c1c1');
    $(this).css('transform', 'perspective(0) rotateY(0deg)');
})
