namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Ball, function (sprite, otherSprite) {
    Ball.setFlag(SpriteFlag.Ghost, true)
    Ball.x = Ball.vx * -1
    pause(200)
    Ball.setFlag(SpriteFlag.Ghost, false)
})
let Ball: Sprite = null
let Player1 = sprites.create(img`
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    . . . . . . . . . . . . . 2 2 2 
    `, SpriteKind.Player)
controller.moveSprite(Player1, 0, 100)
Player1.setPosition(5, 60)
info.setScore(0)
let Player2 = sprites.create(img`
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    7 7 7 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.player2.moveSprite(Player2)
Player2.setPosition(155, 60)
info.player2.setScore(0)
Ball = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Ball)
Ball.setKind(SpriteKind.Ball)
if (Math.percentChance(50)) {
    Ball.setVelocity(-75, randint(-75, 75))
} else {
    Ball.setVelocity(75, randint(-75, 75))
}
game.onUpdate(function () {
    if (Ball.y <= 0) {
        Ball.y = 0
        Ball.vy = Ball.vy * -1
    } else if (Ball.y >= scene.screenHeight()) {
        Ball.y = scene.screenHeight()
        Ball.vy = Ball.vy * -1
    }
    if (Ball.x < 0) {
        Ball.destroy()
        info.player2.changeScoreBy(1)
        Ball.setKind(SpriteKind.Ball)
        Ball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ball)
        Ball.setVelocity(75, randint(-75, 75))
    } else if (Ball.x > scene.screenWidth()) {
        Ball.destroy()
        info.player1.changeScoreBy(1)
        Ball = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . 1 1 1 1 1 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Ball)
        Ball.setVelocity(-75, randint(-75, 75))
    }
})
