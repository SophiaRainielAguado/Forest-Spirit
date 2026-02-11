class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }


    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"

        // background elements
        this.load.image("ground", "runningBlock.png")

        // object sprites
        this.load.image("player", "playerSprite.png")
    }

    create() {
        // //https://phaser.io/examples/v3.85.0/physics/arcade/view/set-world-bounds
        // this.physics.world.setBounds(0, 0, 640, 425);
        // this.groundImg = this.physics.add.sprite(0, 0, "ground").setOrigin(0)
        const ground = this.physics.add.staticGroup();

        const platform1 = this.physics.add.image(0, 300, 'ground').setOrigin(0)
            .setDirectControl().setImmovable();


        this.cursors = this.input.keyboard.createCursorKeys();


        // Input reader to toggle Debug -- From CP: Scrolling States
        this.input.keyboard.on('keydown-D', function () {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        this.input.keyboard.on('keydown-SPACE', function () {
            console.log("spacePressed")
        }, this)

        //this.forestSpirit = new Spirit(this, 100, game.config.height/2, "player", 0)
        this.forestSpirit = this.physics.add.sprite(100, game.config.height / 2, "player").setScale(0.75)
            .setCollideWorldBounds(true)
            .setDebugBodyColor(0x00BB11)
            .setBounce(0.2);

        this.physics.add.collider(this.forestSpirit, ground);
        this.physics.add.collider(this.forestSpirit, platform1);


    }

    update() {
        const {up} = this.cursors;
        if (up.isDown)
        {
            this.forestSpirit.setVelocityY(-300);
        }
    }
}