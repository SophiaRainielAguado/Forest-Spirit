class customButton extends Phaser.GameObjects.Container{
    constructor(){
        super(scene, x, y)
        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                
            })
    }


}