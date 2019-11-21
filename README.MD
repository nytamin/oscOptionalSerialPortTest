# How to test

* clone this repo
* ´npm install --no-optional´  <- use the no-optional to make sure the _serialport_ library isn't loaded
* node index.js

This results in the error:

```
Error: Cannot find module 'serialport'
    at Function.Module._resolveFilename (module.js:547:15)
    at Function.Module._load (module.js:474:25)
    at Module.require (module.js:596:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (.\node_modules\osc\src\platforms\osc-node-serialport.js:13:18)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
```
