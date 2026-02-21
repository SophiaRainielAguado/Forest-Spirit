class Instructions extends Phaser.Scene {
    constructor() {
        super("instructionsScene")
    }

    create(){
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
        let titleConfig = {
            fontFamily: "Fantasy",
            fontSize: "45px",
            color: "#ffffff",
            alight: "left",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }
        this.add.text(25, 25,
            "Controls", titleConfig)

        let textConfig = {
            fontFamily: "Fantasy",
            fontSize: "32px",
            color: "#ffffff",
            alight: "left",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }

            this.add.text(game.config.width/2 -150, game.config.height / 2 + 150,
                "Press SPACE to start!!", textConfig)
    }

    update(){
        if(Phaser.Input.Keyboard.JustDown(this.space)){
            this.scene.start("playScene")
        }
    }
}