### @activities true
# Advent
## Introduction

## Activity 1: Varaibles
### Step
Variables store information. They allow your program to
remember something. In this activity we will create a
varaible that will remember how many times button, "A"
was pressed.

### Step
Get a ``||input.on button A click||`` block from
``||input.Input||`` and drag it to an empty spot in your
workspace.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
})
```

### Step
From ``||variables.Variables||`` click on "Make a Varible..."
and name it, "button_count".  Now drag the
``||variables.change button_count by 1||`` block inside of
your, ``||input.on button A click||`` block.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
})
```

### Step
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

### Step
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

### Step
Let's simulate! On the left is a picture of the Circuit
Playground Express. Left of center is the, "A" button.
The butto is the black circle. The button label is a black
"A" inside of a white triangle. Once you find the button,
click on it one time.

After you click once, "Show console Simulator", should
appear. Click on, "Show console Simulator".

Now you should see a strip chart. Try clicking on the,
"A", button several times to see how the graph changes.
You'll notice that each time you click on the button 
the value of our button_count varaible goees up by 1.
This is exactly what we setup our program to do!

## Activity 2: Conditional Execution
### Step
Our last activity was about variables. Our variable's
value increased each time we clicked the "A" button. But,
the value never went down. In this activity we will
add a condition that will set our varaible back to 0 once
it reaches a specific value.

### Step
From ``||logic.Logic||`` drag a ``||logic.if true then||``
block and place it after the console block in your program.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (true) {
    }
})
```

### Step
From ``||logic.Logic||`` drag a ``||logic.0 = 0||`` block
on top of the, "true" of your if block. Notice how the
shape of the, ``||logic.true||``, and the
``||logic.0 = 0||`` are the same.
```blocks
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
    if (0 == 0) {
    }
})
```

### Step
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
### Step
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

### Step
Let's simulate! On the left is a picture of the Circuit
Playground Express. Left of center is the, "A" button.
The button is the black circle. The button label is a black
"A" inside of a white triangle. Once you find the button,
click on it one time.

After you click once, "Show console Simulator", should
appear. Click on, "Show console Simulator".

Now you should see a strip chart. Try clicking on the,
"A", button several times to see how the graph changes.
You'll notice that each time you click on the button 
the value of our button_count varaible goees up by 1.
And, this time after clicking 6 times the value of our
button_count variable is set back to 0.

## Activity 3: Action Lights
### Step
Now that our program knows how to count let's control some
lights (LEDs) with it.

You have some experience with programming. So we can go 
a little faster now. If you need help just click
on the wise old owl to the left for a hint.

We are also going to use the simulator a lot to check our
progress. The simulator is always there to the left
anytime you want to see what your program does. And, don't
forget about slow-mo mode (snail) to see just which block
of your program is running.

### Step
From ``||logic.Logic||`` drag a ``||logic.if true then||``
inside of the ``||loops.forever||`` block that is aready
in your work space. From ``||logic.Logic||`` drag a
``||logic.0 = 0||`` block on top of the, "true" of your
if block. Next reaplce the left 0 with 
``||variables.button_count||``. Finally change the right
0 to 1.
```blocks
forever(function () {
    if (button_count == 1) {
    }
})
```
### Step
From ``||light.Light||`` drag a ``||light.showRing()||``
inside of your if block.

```blocks
forever(function () {
    if (button_count == 1) {
        light.showRing(
        `black black black pink pink black black black black black`
        )
    }
})
```

### Step
Click on the + sign at the bottom of your if block 5 times.
Replace all of the ``||logic.true||``'s with
``||logic.0 = 0||``. Then replace all of the left 0's with 
``||variables.button_count||``. Replace all of the 0's by
counting up from 2 to 5.
```blocks
forever(function () {
    if (button_count == 1) {
        light.showRing(
        `black black black pink pink black black black black black`
        )
    } else if (button_count == 2) {
    } else if (button_count == 3) {
    } else if (button_count == 4) {
    } else if (button_count == 5) {
    } else {
    }
})
```



### Step
Drag a ``||light.showRing()||`` into each of the if blocks.

```blocks
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
```


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