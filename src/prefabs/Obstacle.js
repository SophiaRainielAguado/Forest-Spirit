class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, pos, texture){
        super(scene, pos.x, pos.y, texture);
        this.scene.add.existing(this);

        this.scene.physics.add.existing(this);
        this.body.setSize(64, 64);
        this.body.setOffset(0,0);
        this.body.setAllowGravity(false);

        // this.play({key: "obstacles", repeat: -1}) not necessary
    }
}