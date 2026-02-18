class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"
        
        // SPRITES
        this.load.image("player", "playerSprite.png")

        // user interface sprites
        this.load.image("start", "startButton.png")
        this.load.image("start_pressed", "StartButton_Pressed.png")
        this.load.image("credits", "creditsButton.png")
        this.load.image("credits_pressed", "creditsButton_Pressed.png")

        //background
        this.load.image("bg_menu", "background_menu.png")
        this.load.image("sun", "background_sun.png")
        this.load.image("sky", "background_sky.png")
        this.load.image("clouds", "background_clouds.png")
        this.load.image("ground", "ground.png")
        this.load.image("block", "runningBlock.png")
    }

    create() {
        this.background = this.add.image(0,0, "bg_menu").setOrigin(0)
        //Title
        let menuConfig = {
            fontFamily: "Fantasy",
            fontSize: "45px",
            color: "#ffffff",
            alight: "right",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }
        this.add.text(game.config.width / 2, 95,
            "FOREST SPIRIT", menuConfig).setOrigin(0.5)
        
        
        //BUTTONS
        // Refrence: https://www.youtube.com/watch?v=xOW7Er9n1jY
        // start button
        this.startButton = this.add.image(115, game.config.height/2, "start")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start("playScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.startButton.setTexture("start_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.startButton.setTexture("start")
        })

        // credits button
        this.creditsButton = this.add.sprite(115, game.config.height/2 + 125, "credits")
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start("creditsScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.creditsButton.setTexture("credits_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.creditsButton.setTexture("credits")
        })
    }
    update() {

    }
}