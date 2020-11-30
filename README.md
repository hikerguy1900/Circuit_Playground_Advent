### @activities true
# Advent
## Introduction

## Activity 1: Varaibles
### Step 1
Variables store information. They allow your program to
remember something. In this activity we will create a
varaible that will remember how many times button, "A"
was pressed.

### Step 2
Get a ``||input.on buttonA click||`` block from
``||input.Input||`` and drag it to an empty spot in your
workspace.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

### Step 3
From ``||variables.Variables||`` click on "Make a Varible..."
and name it, "button_count".  Now drag the
``||variables.change button_count by 1||`` block inside of
your, ``||input.on buttonA click||`` block.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
})
```

### Step 4
Under ``||advanced.Advanced||`` open the 
``||console.Console||`` group and drag
``||console.console log value x = 0||`` to the bottom of
your, ``||input.on buttonA click||``.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("x", 0)
})
```

### Step 5
Go back to ``||variables.Variables||`` and drag 
``||variables.button_count||`` on top of the "0" in
``||console.console log value x = 0||``. Next change,
"x" to, "button_count".
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
})
```

### Step 6
Let's simulate! Click on the, "A" button (left button),
once. "Show console Simulator" should appear. Click on it.
Now you should see a strip chart. Try clicking on the,
"A", button several times to see how the graph changes.
You'll notice that each time you click on the button 
the value of our button_count varaible goees up by 1.
This is exactly what we setup our program to do!

## Activity 2: Conditional Execution
### Step 1
Our last activity was about variables. Recall our variable's
value increased each time we clicked the, "A" button. But,
value never went down. In this activity we will implement
a condition that will set our varaible back to 0 once it 
reaches a specific value.

### Step 2
From ``||logic.Logic||`` drag a ``||logic.if then true||``
block and place it after the console block in your program.
The ``||logic.if then true||`` is in the "conditionals"
section.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (true) {
    }
})
```

### Step 3
From ``||logic.Logic||`` drag a ``||logic.0 = 0||`` block
from the comparison section. Drop it on top of the, "true"
of your if block. Notice how the shape of the,
``||logic.true||``, and the ``||logic.0 = 0||`` are the same.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (0 == 0) {
    }
})
```

### Step 4
From ``||variables.Variables||`` drag your
``||variables.button_count||`` block on top
of the left "0" in the ``||logic.0 = 0||``. Next change the
equal sign (=) to greater than (>). Finally change the zero
on the right to 5.

```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (button_count > 5) {
    }
})
```
### Step 5
You are almost there. Last step before we simulate. From
``||variables.Variables||`` drag a 
``||variables.set button_count to 0||`` inside of your
``||logic.if button_count > 5||``.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (button_count > 5) {
        button_count = 0
    }
})
```


## Activity 3: Conditional Exeuction
Two description

### Step 1
Some instructions

### Step 2
Some more insructions.


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