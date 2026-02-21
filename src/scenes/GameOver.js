class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOverScene")
    }

    create() {
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

        this.add.text(game.config.width / 2 + 52, 25,
            "GameOver", titleConfig)
        this.add.text(game.config.width / 2 + 100, 75,
            "Restart?", textConfig)

        const score = this.registry.get("score")
        this.add.text(game.config.width / 2 + 150, game.config.height / 2 - 75, 
            score, textConfig)

        // credits button
        this.creditsButton = this.add.sprite(game.config.width / 2 + 150, game.config.height/2 + 125, 
            "credits").setInteractive()
            
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
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