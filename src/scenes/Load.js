class Load extends Phaser.Scene {
    constructor() {
        super("load")
    }


    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"

        // object sprites
        this.load.image("player", "playerSprite.png")

        // user interface sprites
        this.load.image("start", "tempStartButton.png")
        this.load.image("start_pressed", "tempCreditsButton_Pressed.png")
        this.load.image("credits", "tempCreditsButton.png")
        this.load.image("credits_pressed", "tempCreditsButton_Pressed.png")
    }

    create(){
        // Keybinds
        this.cursor = this.input.keyboard.createCursorKeys()
    }
}