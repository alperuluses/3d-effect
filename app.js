
$('#img').mousemove(function (event) {
    $(this).removeClass('transition-effect');

    let itemWidth = $(this).width();
    let mousesX = event.offsetX;
    let half = itemWidth / 2;
    let mouseX = mousesX >= half ? Math.abs((itemWidth - mousesX) - half)  : -((itemWidth - mousesX) - half);
console.log(mouseX);
    let degree = ((10 * mouseX) / itemWidth) ;
    let negativeDegree = -((10 * mouseX) / itemWidth);// For get a negative degree
    //console.log((itemWidth - mouseX) - half);
    if (mouseX >= half) {
        // console.log(`itemWidth:${itemWidth/2} - mouseX:${mouseX}`);
        $(this).css('transform', 'perspective(1000px) rotateY(' + degree + 'deg)');
        $(this).css('box-shadow', '' + degree + 'px 0px 20px #fbe989');
    } else {
        $(this).css('transform', 'perspective(1000px) rotateY(' + degree + 'deg)');
        $(this).css('box-shadow', '' + degree + 'px 0px 20px #fbe989');
    }

}).mouseleave(function () {
    $(this).addClass('transition-effect');
    $(this).css('box-shadow', '1px 0px 20px #c1c1c2');
    $(this).css('transform', 'perspective(0) rotateY(0deg)');
})
