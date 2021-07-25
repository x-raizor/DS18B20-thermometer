# http://www.suppertime.co.uk/blogmywiki/2019/04/microbit-ds18b20-temperature-sensor/

basic.show_leds("""
    . # . . #
    # # # . #
    . # . . .
    . # . . .
    . # # . .
    """)

basic.pause(1000)

def on_forever():
    basic.show_string(str((DS18B20.temperature_number(DS18B20.pin.PIN0))))

basic.forever(on_forever)
