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
        this.creditsButton = this.add.sprite(game.config.width/2, game.config.height/2 + 150, "credits")
        .setInteractive()
        .setScale(0.5)
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start("menuScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.creditsButton.setTexture("credits_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.creditsButton.setTexture("credits")
        })
    }
}