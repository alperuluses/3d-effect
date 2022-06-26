$("#img")
  .mousemove(function (event) {
    $(this).removeClass("transition-effect");
    //item horizontal effect
    let itemWidth = $(this).width();
    let mousesX = event.offsetX;
    let half = itemWidth / 2;
    let mouseX =
      mousesX >= half
        ? Math.abs(itemWidth - mousesX - half)
        : -(itemWidth - mousesX - half);
    //item vertical effect
    let itemHeight = $(this).height();
    let mousesY = event.offsetY;
    let halfHeight = itemHeight / 2;
    let mouseY =
      mousesY >= halfHeight
        ? -Math.abs(itemHeight - mousesY - halfHeight)
        : Math.abs(itemHeight - mousesY - halfHeight);
    console.log(mouseY);
    let degreeX = (40 * mouseX) / itemWidth;
    let degreeY = (40 * mouseY) / itemHeight;
    let negativeDegree = -((10 * mouseX) / itemWidth); // For get a negative degree
    //console.log((itemWidth - mouseX) - half);
    if (mouseX >= half) {
      // console.log(`itemWidth:${itemWidth/2} - mouseX:${mouseX}`);
      $(this).css(
        "transform",
        "translate3d(0%, 0%, 0) rotateY(" +
          degreeX +
          "deg)  rotateX(" +
          degreeY +
          "deg)"
      );
      $(this).css(
        "box-shadow",
        "rgba(240, 46, 170, 0.4) " +
          degreeX +
          "px 5px, rgba(240, 46, 170, 0.3) " +
          degreeX +
          "px 10px, rgba(240, 46, 170, 0.2) " +
          degreeX +
          "px 15px, rgba(240, 46, 170, 0.1) " +
          degreeX +
          "px 20px, rgba(240, 46, 170, 0.05) " +
          degreeX +
          "px 25px"
      );
    } else {
      $(this).css(
        "transform",
        "translate3d(0%, 0%, 0) rotateY(" +
          degreeX +
          "deg)  rotateX(" +
          degreeY +
          "deg)"
      );
      $(this).css(
        "box-shadow",
        "rgba(52, 88, 235, 0.4) " +
          (degreeX + -5) +
          "px 5px, rgba(52, 88, 235, 0.3) " +
          (degreeX + -7) +
          "px 10px, rgba(52, 88, 235, 0.2) " +
          (degreeX + -10) +
          "px 15px, rgba(52, 88, 235, 0.1) " +
          (degreeX + -12) +
          "px 20px, rgba(52, 88, 235, 0.05) " +
          (degreeX + -14) +
          "px 25px"
      );
    }
  })
  .mouseleave(function () {
    $(this).addClass("transition-effect");
    $(this).css("box-shadow", "0px 0px 0px #c1c1c1");
    $(this).css("transform", "rotateY(0deg)");
  });
