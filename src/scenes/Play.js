class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // Score Variables
        this.score = 0; 
        this.speed = 0.1;

        // User Input
        this.cursors = this.input.keyboard.createCursorKeys();

        // Input reader to toggle Debug -- From CP: Scrolling States
        this.input.keyboard.on('keydown-D', function () {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        //this.forestSpirit = new Spirit(this, 100, game.config.height/2, "player", 0)
        this.forestSpirit = this.physics.add.sprite(100, game.config.height / 2, "player").setScale(0.75)
            .setCollideWorldBounds(true)
            .setDebugBodyColor(0x00BB11)
    }

    update() {
    }
}