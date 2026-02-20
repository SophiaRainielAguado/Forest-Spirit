class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.setSize(48, 48);
        this.body.setOffset(0,0);
        this.body.setAllowGravity(false);

        // this.play({key: "obstacles", repeat: -1}) not necessary
    }
}