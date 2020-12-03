let button_count = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    if (button_count > 4) {
        button_count = 0
    }
})
forever(function () {
    if (button_count == 0) {
        light.showRing(
        `black black black purple purple black black black black black`
        )
    } else if (button_count == 0) {
        light.showRing(
        `purple purple black purple purple black black black black black`
        )
    } else if (button_count == 0) {
        light.showRing(
        `purple purple black purple purple black black black pink pink`
        )
    } else if (button_count == 0) {
        light.showRing(
        `purple purple black purple purple purple purple black pink pink`
        )
    } else {
        light.clear()
    }
})
