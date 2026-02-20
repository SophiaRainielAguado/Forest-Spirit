// Hero prefab
class Spirit extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture) {
        super(scene, x, y, texture) // call Sprite parent class

        this.scene.add.existing(this);           // add Spirit to existing scene
        this.scene.physics.add.existing(this);   // add physics body to scene

        this.setScale(0.75)
        this.body.setMass(10);
        this.body.setSize(143, 154);
        //this.play({ key: "run", repeat: -1})//move down or transfer animations to load scene

        this.jumpVelocity = -1250;
    }

    // create(){
    //     this.anims.create({
    //         key: "run",
    //         frames: this,anims.generateFrameNumbers("spirit", {
    //             start: 0,
    //             end: 1,
    //         }),
    //         frameRate: 30,
    //     });

    //     this.anims.create({
    //         key: "jump",
    //         frames: this,anims.generateFrameNumbers("spirit", {
    //             start: 0,
    //             end: 1,
    //         }),
    //         frameRate: 30,
    //     });
    // }
    jump(){
        if("setVelocityY" in this.body){
            this.body.setVelocityY(this.jumpVelocity)
            // this.scene.time.delayedCall(100, () => {
            //     this.play({ key: "jump", repeat: -1});
            // })
        }
    }
}
