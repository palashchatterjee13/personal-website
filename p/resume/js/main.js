$(function () {

    startGame();

    // playerObject().css('left', 5000);
    cameraFollow();

    setTimeout(function () {
        $('.loaderWrap').animate({
            top: '50%',
            height: 0,
            width: 0,
        }, 250)
    }, 1500)
})