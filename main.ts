input.onButtonPressed(Button.A, function () {
    Blinken = 1
})
input.onButtonPressed(Button.B, function () {
    Blinken = 0
})
let Blinken = 0
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.forever(function () {
    if (Blinken == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
    }
})
