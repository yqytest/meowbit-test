enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
input.buttonA.onEvent(ButtonEvent.Click, function () {
	
})
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 f f 5 5 5 5 5 5 f f 5 . . 
. 5 5 f e 5 5 5 5 5 5 e f 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 f 5 5 5 5 5 5 5 5 5 5 f 5 . 
. 5 f 5 5 5 5 5 5 5 5 5 5 f 5 . 
. 5 5 f f 5 5 5 5 5 5 f f 5 5 . 
. . 5 5 5 f f f f f f 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
