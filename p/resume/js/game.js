function startGame() {
    placeGameObjects();
    placePlayer();
}

function placeGameObjects() {

    let pointer;
    let floatingTextHeight = 40;

    /* Place tiles */
    pointer = 0;
    for (let i = 0; i < 8; i++) {
        placeObject({
            type: gameObjectType.Sprite,
            sprite: 'ground',
            height: 192,
            width: 384,
            x: pointer,
            y: 0
        })
        pointer += 382;
    }

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'bridge',
        zindex: 2,
        height: 192,
        width: 768,
        x: pointer + 2,
        y: 150,
    })

    for (let i = 0; i < 2; i++) {
        placeObject({
            type: gameObjectType.Sprite,
            sprite: 'water',
            classes: 'water', 
            zindex: -1,
            height: 192,
            width: 384,
            x: pointer,
            y: waterPlaceX,
        })
        pointer += 382;
    }
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'water',
        classes: 'water', 
        zindex: -1,
        height: 192,
        width: 384,
        x: pointer,
        y: waterPlaceX,
    })

    for (let i = 0; i < 8; i++) {
        placeObject({
            type: gameObjectType.Sprite,
            sprite: 'ground',
            height: 192,
            width: 384,
            x: pointer,
            y: 0
        })
        pointer += 382;
    }

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'bridge',
        zindex: 2,
        height: 192,
        width: 768,
        x: pointer + 2,
        y: 150,
    })

    for (let i = 0; i < 2; i++) {
        placeObject({
            type: gameObjectType.Sprite,
            sprite: 'water',
            classes: 'water', 
            zindex: -1,
            height: 192,
            width: 384,
            x: pointer,
            y: waterPlaceX,
        })
        pointer += 382;
    }
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'water',
        classes: 'water', 
        zindex: -1,
        height: 192,
        width: 384,
        x: pointer,
        y: waterPlaceX,
    })


    for (let i = 0; i < 4; i++) {
        placeObject({
            type: gameObjectType.Sprite,
            sprite: 'ground',
            height: 192,
            width: 384,
            x: pointer,
            y: 0
        })
        pointer += 382;
    }

    maxPlayerY = pointer;

    /* Place stuff on ground */
    pointer = 20;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 98,
        height: 78,
        x: pointer,
        y: 192
    })

    pointer = 100;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'trees1',
        width: 364,
        height: 280,
        x: pointer,
        y: 192
    })

    pointer += 600;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'trees1',
        width: 364,
        height: 280,
        x: pointer,
        y: 192
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 49,
        height: 39,
        x: pointer,
        y: 192
    })

    /* ABOUT */
    pointer += 550;
    placeObject({
        type: gameObjectType.TextSprite,
        text: 'about',
        height: 60,
        width: 210,
        x: pointer,
        y: 185
    })

    pointer += 450;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'city',
        height: 211,
        width: 290,
        x: pointer,
        y: 192
    })


    placeObject({
        type: gameObjectType.Text,
        text: 'Working in Jaipur',
        height: floatingTextHeight,
        width: 360,
        x: pointer - 30,
        y: floatingTextY
    })

    pointer += 600;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'stump',
        height: 44,
        width: 116,
        x: pointer,
        y: 192
    })

    placeObject({
        type: gameObjectType.Text,
        text: 'hobbies',
        height: floatingTextHeight,
        width: 200,
        x: pointer + 160,
        y: floatingTextY
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'music',
        height: 0,
        width: 0,
        x: pointer + 10,
        y: 250,
        show: function (object) {
            object().animate({
                height: 100,
                width: 100,
            }, showAnimationDuration)
        }
    })

    pointer += 200;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'stump',
        height: 44,
        width: 116,
        x: pointer,
        y: 192
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'cycling',
        height: 0,
        width: 0,
        x: pointer + 10,
        y: 250,
        show: function (object) {
            object().animate({
                height: 100,
                width: 100,
            }, showAnimationDuration)
        }
    })

    pointer += 200;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'stump',
        height: 44,
        width: 116,
        x: pointer,
        y: 192
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'cooking',
        height: 0,
        width: 0,
        x: pointer + 10,
        y: 250,
        show: function (object) {
            object().animate({
                height: 100,
                width: 100,
            }, showAnimationDuration)
        }
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'snowman',
        height: 105,
        width: 97,
        x: pointer + 240,
        y: 192
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 49,
        height: 39,
        x: pointer + 220,
        y: 192
    })

    pointer += 1200;

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'trees1',
        width: 364,
        height: 280,
        x: pointer,
        y: 192
    })
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 49,
        height: 39,
        x: pointer + 250,
        y: 192
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.TextSprite,
        text: 'skills',
        height: 60,
        width: 210,
        x: pointer,
        y: 185
    })

    pointer += 400;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'web-development',
        height: 0,
        width: 0,
        x: pointer,
        y: 192,
        show: function (object) {
            object().animate({
                height: 350,
                width: 350
            }, showAnimationDuration)
        }
    })

    placeObject({
        type: gameObjectType.Text,
        text: 'Web Development',
        height: floatingTextHeight,
        width: 330,
        x: pointer + 10,
        y: floatingTextY
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'frameworks',
        height: 0,
        width: 0,
        x: pointer,
        y: 192,
        show: function (object) {
            object().animate({
                height: 350,
                width: 350
            }, showAnimationDuration)
        }
    })

    placeObject({
        type: gameObjectType.Text,
        text: 'Frameworks',
        height: floatingTextHeight,
        width: 250,
        x: pointer + 50,
        y: floatingTextY
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'languages',
        height: 0,
        width: 0,
        x: pointer,
        y: 192,
        show: function (object) {
            object().animate({
                height: 350,
                width: 350
            }, showAnimationDuration)
        }
    })

    placeObject({
        type: gameObjectType.Text,
        text: 'Languages',
        height: floatingTextHeight,
        width: 220,
        x: pointer + 70,
        y: floatingTextY
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'trees1',
        width: 364,
        height: 280,
        x: pointer,
        y: 192
    })
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 49,
        height: 39,
        x: pointer + 250,
        y: 192
    })

    pointer += 1200;

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'snowman',
        height: 105,
        width: 97,
        x: pointer + 240,
        y: 192
    })

    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'crystal',
        width: 49,
        height: 39,
        x: pointer + 250,
        y: 192
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.TextSprite,
        text: 'experience',
        height: 60,
        width: 350,
        x: pointer,
        y: 185
    })

    pointer += 500;
    placeObject({
        type: gameObjectType.Sprite,
        sprite: 'gdsc',
        height: 0,
        width: 0,
        x: pointer,
        y: 185,
        show: function (object) {
            object().animate({
                height: 350,
                width: 350
            }, showAnimationDuration)
        }
    })
    
    placeObject({
        type: gameObjectType.Text,
        text: 'Co-Lead',
        height: floatingTextHeight,
        width: 220,
        x: pointer + 60,
        y: floatingTextY
    })

}