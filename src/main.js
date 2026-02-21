// Name: Sophia Rainiel Arevalo Aguado
// REFRENCE: https://www.youtube.com/watch?v=7GlxzAcs40c
// Hours: 30-50 hours. My time report from my extention won't load properly
// Creative Tilt: I almost never draw animals so I used this as an oppurtunity to do so
// Especially since I had to animate a run cycle, something I have never done successful before
// with only two legs. I used pixel art and photobashing (the clouds) as it reminds me of
// my favorite webcomic, Homestuck(TM), that used MSPAint for all its iamges or photoshoped
// images. 

const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: "#000000",
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade: {
            gravity: {y:4000},
            debug: false
        }
    },
    scene: [Menu, Instructions, Play, GameOver, Credits]
}

let game = new Phaser.Game(config)

let keyJUMP, keyRESET, keyLEFT, keyRIGHT