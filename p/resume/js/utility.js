// utility functions
const uniqueID = () => Date.now().toString(36) + (Math.random() + 1).toString(36).substring(7);

const gameBox = () => $('.game-box');

const animations = [];

function placeObject(o) {
    const uid = 'obj' + uniqueID();
    const object = () => $(`#${uid}`);

    gameBox().append(`<div class='gameObject' id='${uid}' ></div>`);

    object().css({
        'bottom': o.y ?? 0,
        'left': o.x ?? 0,
        'height': o.height ?? 0 + 'px',
        'width': o.width ?? 0 + 'px',
        'background': `url(sprites/${o.sprite ?? "null"}.png)`,
        'background-size': `cover`,
        'background-repeat': `no-repeat`,
        'position': 'absolute',
        'z-index': o.zindex ?? 0,
    });

    if (o.classes) {
        o.classes.split(' ').forEach((c)=> { object().addClass(c) });
    }
    // object()

    if (o.type == gameObjectType.Sprite) {
        object().css({
            'background': `url(sprites/${o.sprite ?? "null"}.png)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
    }

    if (o.type == gameObjectType.TextSprite) {
        object().css({
            'background': `url(sprites/text/${o.text ?? "null"}.png)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
    }

    if (o.type == gameObjectType.Text) {
        object().text(o.text);
        object().addClass('floatingText')
        object().css({
            'background': `transparent`,
        });
    }

    if (o.type == gameObjectType.Player) {
        object().css({
            'background': `url(sprites/player/${o.sprite ?? "null"}.gif)`,
            'background-size': `cover`,
            'background-repeat': `no-repeat`,
        });
    }

    if (o['show']) {
        animations.push({
            x: o.x,
            type: AnimationTypes.Once,
            animationId: 'ani' + uniqueID(),
            show: function () {
                o['show'](object)
            }
        })
    }

    return object;
}