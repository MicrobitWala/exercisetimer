input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    1023,
    0
    )
    basic.pause(1000)
    led.plotBarGraph(
    800,
    0
    )
    basic.pause(1000)
    led.plotBarGraph(
    577,
    0
    )
    basic.pause(1000)
    led.plotBarGraph(
    354,
    0
    )
    basic.pause(1000)
    led.plotBarGraph(
    131,
    0
    )
    basic.pause(1000)
    led.unplot(0, 3)
    led.unplot(1, 3)
    led.unplot(3, 3)
    led.unplot(4, 3)
    basic.pause(1000)
    led.plotBarGraph(
    0,
    0
    )
    basic.pause(1000)
    led.unplot(2, 4)
    basic.pause(1000)
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
