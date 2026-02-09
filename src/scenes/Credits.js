class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene")
    }


    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"
        // object sprites
        this.load.image("credits", "tempCreditsButton.png")
    }

    create(){
        this.credits = this.add.sprite(game.config.width/2, game.config.height/2, "credits")
            .setScale(0.5)
    }
}