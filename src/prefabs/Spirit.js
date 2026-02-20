// Hero prefab
class Spirit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture) // call Sprite parent class

        this.scene.add.existing(this);           // add Spirit to existing scene
        this.scene.physics.add.existing(this);   // add physics body to scene

        this.setScale(0.75)
        this.body.setMass(10);
        this.body.setSize(143, 154);

        this.jumpVelocity = -1250;
    }


    jump(){
        if("setVelocityY" in this.body){
            this.body.setVelocityY(this.jumpVelocity)
        }
    }
}
