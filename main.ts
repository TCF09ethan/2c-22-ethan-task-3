let count = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(0 + 0)
    count = 9
    count += -1
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(0)
    basic.showNumber(9)
    basic.showNumber(8)
    basic.showNumber(7)
    basic.showNumber(6)
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
})
basic.forever(function () {
    basic.showNumber(1)
    basic.showNumber(2)
    basic.showNumber(3)
    basic.showNumber(4)
    basic.showNumber(5)
    basic.showNumber(6)
})
