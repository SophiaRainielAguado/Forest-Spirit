const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade: {
            gravity: {y:4000},
            debug: true
        }
    },
    scene: [Menu, Play, Credits]
}

let game = new Phaser.Game(config)

let keyJUMP, keyRESET, keyLEFT, keyRIGHT