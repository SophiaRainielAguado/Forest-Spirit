class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.path = "./assets/"

        // USER INTERFACE BUTTONS
        this.load.image("start", "userInterface/startButton.png")
        this.load.image("start_pressed", "userInterface/startButton_Pressed.png")
        this.load.image("credits", "userInterface/creditsButton.png")
        this.load.image("credits_pressed", "userInterface/creditsButton_Pressed.png")
        this.load.image("retry", "userInterface/retryButton.png")
        this.load.image("retry_pressed", "userInterface/retryButton_Pressed.png")
        this.load.image("back", "userInterface/backButton.png")
        this.load.image("back_pressed", "userInterface/backButton_Pressed.png")

        // BACKGROUNDS
        this.load.image("bg_menu", "background/background_menu.png")
        this.load.image("bg_credits", "background/background_credits.png")
        this.load.image("bg_gameOver", "background/background_gameOver.png")

        // PLAY SCENE BACKGROUND
        this.load.image("sky", "background/background_sky.png")
        this.load.image("sun", "background/background_sun.png")
        this.load.image("clouds", "background/background_clouds.png")
        this.load.image("instruct_grass", "background/background_ground.png")
        this.load.image("ground", "ground.png")

        // SPRITES
        this.load.image("player", "playerSprite.png")
        this.load.spritesheet("spirit", "spiritSheet.png", { frameWidth: 143, frameHeight: 154 })
        this.load.image("rock", "tempBlock.png")

        // AUDIO
        this.load.audio("music", "sfx/forestSpiritBG.wav")
        this.load.audio("jump", "sfx/jump.wav")
        this.load.audio("destroy", "sfx/destroy.wav")
        this.load.audio("gameOver", "sfx/gameOver.wav")
        this.load.audio("press", "sfx/pressed.wav")
    }

    create() {
        // BACKGROUND
        this.add.image(0, 0, "bg_menu").setOrigin(0)

        // TITLE
        let menuConfig = { fontFamily: "Fantasy", fontSize: "45px", color: "#ffffff", align: "center" }
        this.add.text(game.config.width / 2, 95, "FOREST SPIRIT", menuConfig).setOrigin(0.5)

        // --- BUTTONS ---

        // START BUTTON
        this.startButton = this.add.image(115, game.config.height / 2, "start")
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.sound.play("press", { volume: 0.5 });
                this.scene.start("instructionsScene");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => this.startButton.setTexture("start_pressed"))
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => this.startButton.setTexture("start"))

        // CREDITS BUTTON
        this.creditsButton = this.add.image(115, game.config.height / 2 + 125, "credits")
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.sound.play("press", { volume: 0.5 });
                this.scene.start("creditsScene", { previousScene: "menuScene" });
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => this.creditsButton.setTexture("credits_pressed"))
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => this.creditsButton.setTexture("credits"))

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
            frames: [{ key: "spirit", frame: 2 }],
            frameRate: 8,
            repeat: -1
        });
    }
}