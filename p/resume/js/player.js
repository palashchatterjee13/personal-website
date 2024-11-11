const playerObject = () => $('.player');

let touchEventTimer;

const Player = {
    idle: function () {
        playerObject().css({
            'background': `url(sprites/player/idle.gif)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
    },
    moveForward: function () {
        let newPos = (parseInt(playerObject().css('left')) + playerMovementSpeed);
        newPos = (newPos <= maxPlayerY) ? newPos : maxPlayerY ;
        playerObject().css({
            'left': newPos + 'px',
            'background': `url(sprites/player/run.gif)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
        document.querySelector('.player').style.transform = 'rotateY(0deg)';
        cameraFollow();
        showAnimations();
        $('.message').remove();
    },
    moveBackward: function () {
        let newPos = (parseInt(playerObject().css('left')) - playerMovementSpeed);
        newPos = (newPos > 0) ? newPos : 0;
        playerObject().css({
            'left': newPos + 'px',
            'background': `url(sprites/player/run.gif)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
        document.querySelector('.player').style.transform = 'rotateY(180deg)';
        cameraFollow();
        showAnimations();
        $('.message').remove();
    }

}

const TouchControls = {
    moveForward: function() {
        touchEventTimer = setInterval(function(){
            Player.moveForward();
        }, playerTouchControlsSpeed)
    },
    moveBackward: function() {
        touchEventTimer = setInterval(function(){
            Player.moveBackward();
        }, playerTouchControlsSpeed)
    },
    stop: function() {
        clearInterval(touchEventTimer);
        Player.idle();
    }
}

function cameraFollow() {
    let cameraPosition = parseInt(playerObject().css('left')) - (window.innerWidth / 2) + alignCameraByOffset;
    cameraPosition = (cameraPosition > 0) ? cameraPosition : 0;
    gameBox().scrollLeft(cameraPosition);
}

function showAnimations() {
    for (animation of animations) {
        if (animation.type == AnimationTypes.Once) {
            if (parseInt(playerObject().css('left')) > (animation.x - appearAnimatinTriggerOffset)) {
                animation.show();
                animations.splice(animations.findIndex(a => a.animationId === animation.animationId) , 1)
            }
        }
    }
}

function placePlayer() {
    const player = placeObject({
        type: gameObjectType.Player,
        sprite: 'idle',
        height: playerHeight,
        width: playerWidth,
        x: 500,
        y: 160
    });

    maxPlayerY -= playerWidth;

    player().addClass('player')

    $(document).on('keydown', function (e) {
        if (e.keyCode == 37) {
            Player.moveBackward();
        }
        else if (e.keyCode == 39) {
            Player.moveForward();
        }
    });

    $(document).on('keyup', function (e) {
        Player.idle();
    });

    $(window).on('resize', function (e) {
        cameraFollow();
    });
}