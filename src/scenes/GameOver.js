class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene")
    }

    create() {
        this.background = this.add.image(0,0, "bg_gameOver").setOrigin(0)

        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let titleConfig = {
            fontFamily: "Fantasy",
            fontSize: "45px",
            color: "#ffffff",
            alight: "left",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }
        let textConfig = {
            fontFamily: "Fantasy",
            fontSize: "32px",
            color: "#ffffff",
            alight: "center",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }

        this.add.text(game.config.width / 2 + 52, 50,
            "GameOver", titleConfig)
        this.retryButton = this.add.sprite(game.config.width / 2 + 160, 175, 
            "retry").setInteractive()
            
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.sound.play("press", { volume: 0.5 });
            this.scene.start("playScene")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.retryButton.setTexture("retry_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.retryButton.setTexture("retry")
        })
        
        const highscore = this.registry.get("highscore");
        this.add.text(game.config.width / 2 + 100, game.config.height / 2 + 15, 
            `BEST: ${highscore}`, textConfig)

        // credits button
        this.creditsButton = this.add.sprite(game.config.width / 2 + 160, game.config.height/2 + 125, 
            "credits").setInteractive()
            
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.sound.play("press", { volume: 0.5 });
            this.scene.start("creditsScene", { previousScene: "gameOverScene" })
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
            this.creditsButton.setTexture("credits_pressed")
        })
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
            this.creditsButton.setTexture("credits")
        })
    }
}