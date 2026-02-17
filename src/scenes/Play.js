class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }


    preload() {
        // for cleaner path arguments
        this.load.path = "./assets/"

        // object sprites
        this.load.image("player", "playerSprite.png")

        // background
        this.load.image("sun", "background_sun.png")
        this.load.image("sky", "background_sky.png")
        this.load.image("clouds", "background_clouds.png")
        this.load.image("clouds", "background_ground.png")
    }

    create() {
        // BACKGROUND
        this.sky = this.add.tileSprite(0, 0, 1280, 480, "sky").setOrigin(0,0)
        this.sun = this.add.image(100, game.config.height / 2, "sun")
        this.clouds = this.add.tileSprite(0, 0, 1280, 480, "clouds").setOrigin(0,0)
        
        //KEYBINDS
        // define keys
        this.keys = this.input.keyboard.createCursorKeys()
        this.keys.SPACEKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        // Input reader to toggle Debug -- From CP: Scrolling States
        this.input.keyboard.on('keydown-D', function () {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }, this)

        //this.forestSpirit = new Spirit(this, 100, game.config.height/2, "player", 0)
        this.forestSpirit = this.physics.add.sprite(100, game.config.height / 2, "player").setCollideWorldBounds(true)
        this.forestSpirit.setBounce(0.2);

    }

    update() {
        // BACKGROUND
        this.sun.rotation += 0.01;
        this.sky.tilePositionX -= 2;
        this.clouds.tilePositionX -= 4;
    }
}