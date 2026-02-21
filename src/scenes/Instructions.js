class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene")
    }

    create() {
        // Background
        this.sky = this.add.tileSprite(0, 0, 1280, 480, "sky").setOrigin(0, 0).setAlpha(0.8)
        this.sun = this.add.image(game.config.width/2, game.config.height / 2 + 75, "sun")
        this.ground = this.add.tileSprite(0, 317, 640, 182, "instruct_grass").setOrigin(0, 0)

        // Text
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
            alight: "left",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }


        this.add.text(25, 20,"Controls", titleConfig)
        this.add.text(game.config.width / 2 - 75, 33,
            "SPACE / CLICK to JUMP!", textConfig)

        this.add.text(game.config.width / 2 - 150, game.config.height / 2 + 150,
            "Press SPACE to start!!", textConfig)
    }

    update() {
        this.sun.rotation += 0.01;

        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            this.scene.start("playScene")
        }
    }
}