class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    create() {
        // BACKGROUND
        this.sky = this.add.tileSprite(0, 0, 1280, 480, "sky").setOrigin(0, 0).setAlpha(0.8)
        this.sun = this.add.image(100, game.config.height / 2, "sun")
        this.clouds = this.add.tileSprite(0, 0, 1280, 480, "clouds").setOrigin(0, 0).setAlpha(0.9)
        this.ground = this.add.tileSprite(0, 317, 640, 182, "ground").setOrigin(0, 0)
        
        
        // SCORE
        this.startTime = this.time.now
        this.score = 0;
        this.speed = 4;

        let scoreConfig = {
            fontFamily: "Fantasy",
            fontSize: "16px",
            color: "#ffffff",
            alight: "left",
            padding: { top: 5, bottom: 5 },
            fixedWidth: 0
        }
        this.scoreText = this.add.text(20, this.scale.height / 2 + 80, `SCORE // ${this.score}`, scoreConfig
);

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
        this.forestSpirit = new Spirit(this, 100, game.config.height / 2, "player")
            .setCollideWorldBounds(true)
            .setDebugBodyColor(0x00BB11)

        // REFRENCE: https://www.youtube.com/watch?v=7GlxzAcs40c
        // Player collides with platform / ground
        this.physics.add.collider(this.forestSpirit, this.platform, () => {
            //if(this.forestSpirit.body.blocked.down && this.forestSpirit.anims.currentAnims!== "run"){
            // Reset animation to running when player sprite hits ground
            //}
        })

        // JUMP LOGIC
        const jump = () => {
            this.forestSpirit.jump();
        }
        this.input.keyboard.on("keydown-SPACE", jump);
        this.input.on("pointerdown", jump);


        // OBSTACLES
        this.obstacles = this.add.group()

        const spawnObstacles = () => {
            // Random number of rocks
            const numberOfRocks = Phaser.Math.Between(1, 3)
            const spacing = 48
            
            for(let i = 0; i < numberOfRocks; i++){
            const x = 700 + i * spacing
            const obstacle = new Obstacle(this, x, game.config.height / 2 + 52, "rock")
            this.obstacles.add(obstacle)
            }
            console.log(`Spawned ${numberOfRocks} rock(s)`);
        }
        const spawnObstaclesPeriodically = () => {
            spawnObstacles()
            this.time.delayedCall(Phaser.Math.Between(800, 2000), () => {
                spawnObstaclesPeriodically();
            })
        }

        // GAME OVER LOGIC
        this.physics.add.collider(this.forestSpirit, this.obstacles, (forestSpirit, obstacle) => {
            // Check if the player is landing on top of the rock
            if (forestSpirit.body.velocity.y > 0 && forestSpirit.body.bottom <= obstacle.body.top + 5) {
                // Player is falling and lands on top
                obstacle.destroy();
                console.log("Rock destroyed by landing on top!");

                // Make player bounce slightly if you want
                forestSpirit.setVelocityY(-300);
            } else {
                // Player hits side or bottom → Game Over
                forestSpirit.isDead = true;
                this.scene.start("gameOverScene");
                console.log("Game Over: collided with rock!");
            }
        })

        spawnObstaclesPeriodically()
    }

    update() {
        // BACKGROUND
        this.sun.rotation += 0.01;
        this.sky.tilePositionX -= this.speed / 2;
        this.clouds.tilePositionX -= this.speed;
        this.ground.tilePositionX += this.speed;

        // GAME OVER FLAG
        if(!this.forestSpirit.isDead){
            const elapsed = this.time.now - this.startTime
            this.score = Math.floor(elapsed / 1000)
            this.scoreText.setText(`SCORE // ${this.score}`);
        }
        // OBSTACLES
        this.obstacles.getChildren().forEach(obstacle => {
            obstacle.x -= 3 * this.speed

            // destroy when offscreen only when sprite is fully offscreen
            if (obstacle.x + obstacle.width < 0) {
                obstacle.destroy();
                console.log("obstacle destroyed")
            }
        })
    }
}