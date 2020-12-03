# Advent
## Introduction
```template
let button_count = 0
input.buttonA.onEvent(ButtonEvent.Click, function () {
    button_count += 1
    console.logValue("button_count", button_count)
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
```


## Step
In our Blinky Blinky tutorial we learned about controlling
the lights on our Circuit Playground. Then, in our
Light Show tutorial we learned about varaiables and
conditoinal statements. In this tutorial we will combine
those concepts to create a simple Advent calendar.

## Step
You've already learned alot about creating programs for your
Circuit Playground by arranging the programming blocks. In
this tutorial the code is already written. But, it does not
work. :-( Let's fix it!

## Step
Advent is the season of prepartion for Christmas. Christmas
is when we remember Jesus's birth nealry 2,000 and 20 years
ago. There are four weeks of Advent. Each week has a color
and a theme. 

-- Week 1: Hope (Purple)

-- Week 2: Faith (Purple)

-- Week 3: Joe (Pink)

-- Week 4: Peace (Purple)

We want to use button A on our Circuit Playgroud to count the
weeks of Advent. We want the lights on our Circuit Playground
to show the colors for each week. But, if you use the
simulator to the left you will see the colors don't change
when we press button A. 

## Step 
For our program to remember how many times button A was pressed
we need a variable. Our variable's name is 
``||variables.button_count||``. Use the simulator and the,
"Show console Simulator" button to check if
``||variables.button_count||`` changes when you press button A.

## Step
Using the simulator we confimed that our button and 
``||variables.button_count||`` variable are working.  The next
thing we need to check are our conditional statements. These
are our "if" and "else if" statements. You can see a big block
of "if" and "else if" statements in our program. Let's check them
in the next step.

## Step
When the condition for an "if" or "else if" statement is true
the code in side runs. For example, we could say, 

-- If the number of wheels equels 1, then we have a unicycle.

-- Else if the number of wheels equals 2, then we have a bicycle.

-- Else if the number of wheels equals 3, then we have a tricycle.

-- Else, then I don't know the name of the cycle.

For our Advent Calendar we make a decision based on the how many
times the button has been pressed (``||variables.button_count||``).

-- If ``||variables.button_count||`` = 1, then 1 purple light.
-- Else if ``||variables.button_count||`` = 2, then 2 purple lights.
-- Else if ``||variables.button_count||`` = 3, then 2 purple lights & 1 pink.
-- Else if ``||variables.button_count||`` = 4, then 3 purple lights & 1 pink.
-- Else, turn all lights off

Take a couple of minutes to see if you can find the problem in our
program.

## Step
All of the "if" and "else if" conditions in our program are set equal to 
0. That isn't correct. Let's change the numbers to the correct Advent
week number based on our example "if" and "else if" statments below.

-- If ``||variables.button_count||`` = 1, then 1 purple light.

-- Else if ``||variables.button_count||`` = 2, then 2 purple lights.

-- Else if ``||variables.button_count||`` = 3, then 2 purple lights & 1 pink.

-- Else if ``||variables.button_count||`` = 4, then 3 purple lights & 1 pink.

-- Else, turn all lights off

## Finish
