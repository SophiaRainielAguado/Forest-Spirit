// // Hero prefab
// class Spirit extends Phaser.Physics.Arcade.Sprite {
//     constructor(scene, x, y, texture, frame) {
//         super(scene, x, y, texture, frame) // call Sprite parent class
//         scene.add.existing(this)           // add Hero to existing scene
//         scene.physics.add.existing(this)   // add physics body to scene

//         this.body.setSize(this.width, this.height)
//         this.body.setCollideWorldBounds(true)

//         // set custom Hero properties
//         this.spiritVelocity = 100    // in pixels

//         // initialize state machine managing Spirit (initial state, possible states, state args[])
//         scene.spiritFSM = new StateMachine('idle', {
//             idle: new IdleState(),
//             move: new MoveState(),
//             // dash: new DashState(),
//             // hurt: new HurtState(),
//         }, [scene, this])   // pass these as arguments to maintain scene/object context in the FSM
//     }
// }

// // hero-specific state classes
// class IdleState extends State {
//     enter(scene, hero) {
//         hero.setVelocity(0)
//     }

//     execute(scene, hero) {
//         // use destructuring to make a local copy of the keyboard object
//         const {up, down} = scene.keys

//         // // transition to swing if pressing space
//         // if(Phaser.Input.Keyboard.JustDown(space)) {
//         //     this.stateMachine.transition('jump')
//         //     return
//         // }

//         // transition to move if pressing a movement key
//         if(up.isDown || down.isDown ) {
//             this.stateMachine.transition('move')
//             return
//         }
//     }
// }

// class MoveState extends State {
//     execute(scene, hero) {
//         // use destructuring to make a local copy of the keyboard object
//         const {up, down} = scene.keys

//         // // transition to swing if pressing space
//         // if(Phaser.Input.Keyboard.JustDown(space)) {
//         //     this.stateMachine.transition('jump')
//         //     return
//         // }

//         // transition to dash if pressing shift
//         // if(Phaser.Input.Keyboard.JustDown(shift)) {
//         //     this.stateMachine.transition('dash')
//         //     return
//         // }

//         // transition to idle if not pressing movement keys
//         if(!(up.isDown || down.isDown)) {
//             this.stateMachine.transition('idle')
//             return
//         }

//         // handle movement
//         let moveDirection = new Phaser.Math.Vector2(0, 0)
//         if(up.isDown) {
//             moveDirection.y = -1
//             hero.direction = 'up'
//         } else if(down.isDown) {
//             moveDirection.y = 1
//             hero.direction = 'down'
//         }

//         // normalize movement vector, update hero position, and play proper animation
//         moveDirection.normalize()
//         spirit.setVelocity(spirit.spiritVelocity * moveDirection.y)
//     }
// }

// // class DashState extends State {
// //     enter(scene, hero) {
// //         hero.setVelocity(0)
// //         hero.anims.play(`swing-${hero.direction}`)
// //         hero.setTint(0x00AA00)     // turn green
// //         switch(hero.direction) {
// //             case 'up':
// //                 hero.setVelocityY(-hero.heroVelocity * 3)
// //                 break
// //             case 'down':
// //                 hero.setVelocityY(hero.heroVelocity * 3)
// //                 break
// //             case 'left':
// //                 hero.setVelocityX(-hero.heroVelocity * 3)
// //                 break
// //             case 'right':
// //                 hero.setVelocityX(hero.heroVelocity * 3)
// //                 break
// //         }

// //         // set a short cooldown delay before going back to idle
// //         scene.time.delayedCall(hero.dashCooldown, () => {
// //             hero.clearTint()
// //             this.stateMachine.transition('idle')
// //         })
// //     }
// // }

// // class HurtState extends State {
// //     enter(scene, hero) {
// //         hero.setVelocity(0)
// //         hero.anims.play(`walk-${hero.direction}`)
// //         hero.anims.stop()
// //         hero.setTint(0xFF0000)     // turn red
// //         // create knockback by sending body in direction opposite facing direction
// //         switch(hero.direction) {
// //             case 'up':
// //                 hero.setVelocityY(hero.heroVelocity*2)
// //                 break
// //             case 'down':
// //                 hero.setVelocityY(-hero.heroVelocity*2)
// //                 break
// //             case 'left':
// //                 hero.setVelocityX(hero.heroVelocity*2)
// //                 break
// //             case 'right':
// //                 hero.setVelocityX(-hero.heroVelocity*2)
// //                 break
// //         }

// //         // set recovery timer
// //         scene.time.delayedCall(hero.hurtTimer, () => {
// //             hero.clearTint()
// //             this.stateMachine.transition('idle')
// //         })
// //     }
// // }