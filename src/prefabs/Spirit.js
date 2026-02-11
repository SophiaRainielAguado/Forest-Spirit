// Hero prefab
class Spirit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame) // call Sprite parent class
        scene.add.existing(this)           // add Hero to existing scene
        scene.physics.add.existing(this)   // add physics body to scene

        this.body.setSize(this.width, this.height)
        this.body.setCollideWorldBounds(true)

        // set custom Hero properties
        this.spiritVelocity = 100    // in pixels

        // initialize state machine managing Spirit (initial state, possible states, state args[])
        scene.spiritFSM = new StateMachine('idle', {
            idle: new IdleState(),
            move: new MoveState(),
            // dash: new DashState(),
            // hurt: new HurtState(),
        }, [scene, this])   // pass these as arguments to maintain scene/object context in the FSM
    }
}
