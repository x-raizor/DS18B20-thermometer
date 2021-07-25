// http://www.suppertime.co.uk/blogmywiki/2019/04/microbit-ds18b20-temperature-sensor/
basic.showLeds(`
    . # . . #
    # # # . #
    . # . . .
    . # . . .
    . # # . .
    `)
basic.pause(500)
basic.forever(function () {
    proportionalFont.showNumber(DS18B20.TemperatureNumber(DS18B20.pin.pin0), 100)
    proportionalFont.showSpace(3, 50)
    serial.writeValue("temperature", DS18B20.TemperatureNumber(DS18B20.pin.pin0))
})
