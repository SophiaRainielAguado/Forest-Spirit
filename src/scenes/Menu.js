class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"

        // USER INTERFACE SPRITES
        this.load.image("start", "userInterface/startButton.png")
        this.load.image("start_pressed", "userInterface/StartButton_Pressed.png")
        this.load.image("credits", "userInterface/creditsButton.png")
        this.load.image("credits_pressed", "userInterface/creditsButton_Pressed.png")
        this.load.image("retry", "userInterface/retryButton.png")
        this.load.image("retry_pressed", "userInterface/retryButton_Pressed.png")
        this.load.image("back", "userInterface/backButton.png")
        this.load.image("back_pressed", "userInterface/backButton_Pressed.png")

        // BACKGROUND
        // Main Menu Scene
        this.load.image("bg_menu", "userInterface/background_menu.png")
        
        //Instruction Scene
        this.load.image("instruct_grass", "background_ground.png")

        //Play Scene
        this.load.image("sun", "background_sun.png")
        this.load.image("sky", "background_sky.png")
        this.load.image("clouds", "background_clouds.png")
        this.load.image("ground", "ground.png")
        this.load.image("block", "runningBlock.png")

        // GameOver Scene
        this.load.image("bg_gameOver", "background_gameover.png")

        // Credits Scene
        this.load.image("bg_credits", "background_credits.png")

        // SPRITES
        this.load.image("player", "playerSprite.png")
        this.load.spritesheet("spirit", "spiritSheet.png", {
            frameWidth: 143, frameHeight: 154
        })
        this.load.image("rock", "tempBlock.png")

        // AUDIO
        this.load.audio("music", "forestSpiritBG.wav");
        this.load.audio("jump", "jump.wav");
        this.load.audio("destroy", "destroy.wav");
        this.load.audio("gameOver", "gameOver.wav");

        this.load.audio("press", "pressed.wav");
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
            this.sound.play("press", { volume: 0.5 });
            this.scene.start("instructionsScene")
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
            this.sound.play("press", { volume: 0.5 });
            this.scene.start("creditsScene", { previousScene: "menuScene" })
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.creditsButton.setTexture("credits_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.creditsButton.setTexture("credits")
        })

        // PLAYER ANIMATIONS
        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("spirit", {
                start: 0,
                end: 3,
            }),
            frameRate: 8,
            repeat: -1
        });
        this.anims.create({
            key: "jump",
            frames: [{ key: "spirit", frame: 2}],
            frameRate: 8,
            repeat: -1
        });
    }
}