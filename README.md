# Advent
## Introduction @fullscreen
Let's transform our napkin holders into an Advent
calendar and Bethlehem star. 

## Step 1
Get a ``||input.buttonA.onEvent()||`` block from ``||input.Input||`` and 
drag it to an empty spot in your work space.

```blocks
console.log("\"Start\"")
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

## Step 2
From ``||variables.Variables||`` click on "Make a Varible..." and name
it, "button_count".

Get a ``||input.buttonA.onEvent()||`` block from ``||input.Input||`` and 
drag it to an empty spot in your work space.

```blocks
console.log("\"Start\"")
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
})

## Finish

input.buttonA.onEvent(ButtonEvent.LongClick, function () {
    music.setVolume(255)
    music.playMelody("A F E F D G E F ", 120)
    music.setVolume(0)
})

input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    if (button_count >= 6) {
        button_count = 0
    }
})
let button_count = 0
button_count = 0
music.stopAllSounds()
music.setVolume(0)
forever(function () {
    if (button_count == 1) {
        light.showRing(
        `black black black pink pink black black black black black`
        )
    } else if (button_count == 2) {
        light.showRing(
        `pink pink black pink pink black black black black black`
        )
    } else if (button_count == 3) {
        light.showRing(
        `pink pink black pink pink black black black purple purple`
        )
    } else if (button_count == 4) {
        light.showRing(
        `pink pink black pink pink pink pink black purple purple`
        )
    } else if (button_count == 5) {
        light.showAnimationFrame(light.sparkleAnimation)
        pause(500)
        light.setAll(0xffff00)
    } else {
        light.clear()
    }
})