enum SpriteKind {
    Player,
    Projectile,
    Food,
    Enemy
}
let mySprite: Sprite = null
input.buttonA.onEvent(ButtonEvent.Down, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. 5 . . . . . . . . . . . 5 . . 
. 5 5 5 . 5 5 5 5 . . 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . 5 5 f f 5 5 f f 5 5 5 5 . . 
. 5 5 f 1 f 5 5 f 1 f 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 f f f f 5 5 5 . 
. . 5 f f f f f 2 2 2 f 5 5 . . 
. . 5 f f 2 2 2 2 f f 5 5 . . . 
. . . 5 5 f f f f f 5 5 5 . . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . 5 5 . . . . . 
. . . . . . . . 5 5 . . . . . . 
`)
})
input.buttonA.onEvent(ButtonEvent.Up, function () {
    mySprite.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 f f 5 5 5 5 5 5 f f 5 . . 
. 5 5 f 1 5 5 5 5 5 5 1 f 5 5 . 
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
`)
})
scene.setBackgroundColor(7)
mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . 
. . . . 5 5 5 5 5 5 5 5 . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 f f 5 5 5 5 5 5 f f 5 . . 
. 5 5 f 1 5 5 5 5 5 5 1 f 5 5 . 
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
controller.moveSprite(mySprite, 100)
