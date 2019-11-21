const OSC = require('osc')

const sp = new OSC.SerialPort({
    devicePath: "/dev/cu.usbmodem22131",
    metadata: true
})

console.log('If you see this, it works')

