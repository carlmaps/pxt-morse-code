function displayLetter() {
    index = 0
    for (let index = 0; index <= 25; index++) {
        if (morseCode[index] == codedLetter) {
            basic.showString("" + Letter[index])
        }
    }
}
let index = 0
let morseCode: string[] = []
let Letter: string[] = []
let codedLetter = ""
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
codedLetter = ""
Letter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 0) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        codedLetter = "" + codedLetter + "."
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (pins.digitalReadPin(DigitalPin.P15) == 0) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        codedLetter = "" + codedLetter + "-"
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        displayLetter()
        codedLetter = ""
    }
})
