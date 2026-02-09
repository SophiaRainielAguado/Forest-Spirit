class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
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

    create() {
        //Title
        let menuConfig = {
            fontFamily: "Courier",
            fontSize: "28px",
            backgroundColor: "#67f341",     // text-bg not screen-bg
            color: "#09591a",
            alight: "right",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }
        this.add.text(game.config.width / 2, 100,
            "FOREST SPIRIT", menuConfig).setOrigin(0.5)
        
        
        //BUTTONS
        // Refrence: https://www.youtube.com/watch?v=xOW7Er9n1jY
        // start button
        this.startButton = this.add.image(game.config.width/2, game.config.height/2, "start")
        .setInteractive()
        .setScale(0.25)
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start("playScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.startButton.setTint(0x00FF00)
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.startButton.clearTint()
        })

        // credits button
        this.creditsButton = this.add.image(game.config.width/2, game.config.height/2 + 150, "credits")
        .setInteractive()
        .setScale(0.25)
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start("creditsScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.creditsButton.setTint(0x00FF00)
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.creditsButton.clearTint()
        })
    }
    update() {

    }
}