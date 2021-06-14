let counter = 0
let hand = 0
input.onGesture(Gesture.Shake, function () {
    counter = 3
    for (let index = 0; index < 3; index++) {
        basic.showNumber(counter)
        counter += -1
        basic.pause(500)
    }
    hand = randint(1, 3)
    if (hand == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    }
    if (hand == 3) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    }
})
basic.forever(function () {
	
})
