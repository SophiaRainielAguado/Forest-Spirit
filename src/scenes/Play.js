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
        // SCORE
        this.score = 0; 
        this.speed = 4;

        // BACKGROUND
        this.sky = this.add.tileSprite(0, 0, 1280, 480, "sky").setOrigin(0,0)
        this.sun = this.add.image(100, game.config.height / 2, "sun")
        this.clouds = this.add.tileSprite(0, 0, 1280, 480, "clouds").setOrigin(0,0)

        // PLATFORM || GROUND
        this.ground = this.add.tileSprite(0, 317, 640, 182, "ground").setOrigin(0,0)
        
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
        this.forestSpirit = this.physics.add.sprite(100, game.config.height / 2, "player").setScale(0.75)
            .setCollideWorldBounds(true)
            .setDebugBodyColor(0x00BB11)
    }

    update() {
        // BACKGROUND
        this.sun.rotation += 0.01;
        this.sky.tilePositionX -= this.speed / 2;
        this.clouds.tilePositionX -= this.speed;
        this.ground.tilePositionX += this.speed;
    }
}