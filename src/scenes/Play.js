class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }


    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"
        // object sprites
        this.load.image("player", "playerSprite.png")
    }

    create(){
        this.forestSpirit = this.add.sprite(game.config.width/2, game.config.height/2, "player")
            .setScale(0.5)
    }
}