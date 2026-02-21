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

    create(data) {
        const previousSceneKey = data.previousScene;

        this.creditsButton = this.add.sprite(
            this.scale.width / 2,
            this.scale.height / 2 + 150,
            "credits"
        )
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.start(previousSceneKey);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.creditsButton.setTexture("credits_pressed");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.creditsButton.setTexture("credits");
            });
    }
}