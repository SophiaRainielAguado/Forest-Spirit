// Hero prefab
class Spirit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture) // call Sprite parent class

        this.scene.add.existing(this);           // add Spirit to existing scene
        this.scene.physics.add.existing(this);   // add physics body to scene

        this.setScale(0.75)
        this.body.setMass(10);
        this.body.setSize(143, 154);
        this.play({ key: "run", repeat: -1})//move down or transfer animations to load scene

        this.jumpVelocity = -1250;
        this.isDead = false;
    }

    jump(){
        if(this.body.blocked.down){
            this.body.setVelocityY(this.jumpVelocity)
            this.scene.time.delayedCall(100, () => {
                 this.play({ key: "jump", repeat: -1});
            })
            this.scene.sound.play("jump", {volume: 0.5})
        }
    }

    update(){
        if (this.body.blocked.down && this.anims.currentAnim?.key === "jump") {
        this.play({ key: "run", repeat: -1 });
    }
    }
}
