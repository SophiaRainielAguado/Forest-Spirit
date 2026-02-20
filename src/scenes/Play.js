class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // SCORE
        this.score = 0; 
        this.speed = 4;

        // BACKGROUND
        this.sky = this.add.tileSprite(0, 0, 1280, 480, "sky").setOrigin(0,0).setAlpha(0.8)
        this.sun = this.add.image(100, game.config.height / 2, "sun")
        this.clouds = this.add.tileSprite(0, 0, 1280, 480, "clouds").setOrigin(0,0).setAlpha(0.9)
        this.ground = this.add.tileSprite(0, 317, 640, 182, "ground").setOrigin(0,0)

        // PHYSICS PLATFORM || GROUND
        const groundGroup = this.physics.add.staticGroup();
        this.platform = groundGroup.create(320, 397);
        this.platform.setSize(640, 161)
        this.platform.setVisible(false);
        
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
        this.forestSpirit = new Spirit(this, 100, game.config.height/2, "player")
            .setCollideWorldBounds(true)
            .setDebugBodyColor(0x00BB11)

        // REFRENCE: https://www.youtube.com/watch?v=7GlxzAcs40c
        // Player collides with platform / ground
        this.physics.add.collider(this.forestSpirit, this.platform, () =>{
            //if(this.forestSpirit.body.blocked.down && this.forestSpirit.anims.currentAnims!== "run"){
                // Reset animation to running when player sprite hits ground
            //}
        })

        const jump = () =>{
            this.forestSpirit.jump();
        }
    
        this.input.keyboard.on("keydown-SPACE", jump);
    }

    update() {
        // BACKGROUND
        this.sun.rotation += 0.01;
        this.sky.tilePositionX -= this.speed / 2;
        this.clouds.tilePositionX -= this.speed;
        this.ground.tilePositionX += this.speed;
    }
}