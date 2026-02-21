class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene")
    }

    create(data) {
        //background
        this.background = this.add.image(0,0, "bg_credits").setOrigin(0)

        const previousSceneKey = data.previousScene;

        this.backButton = this.add.sprite(100, this.scale.height / 2 - 50,"back")
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.sound.play("press", { volume: 0.5 });
                this.scene.start(previousSceneKey);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.backButton.setTexture("back_pressed");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.backButton.setTexture("back");
            });
    }
}