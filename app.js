var rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var rov = require('./Rover.js')
var rover;
var inputNo = 1;
var output;
rl.on('line', function (data) {
    if (inputNo == 1) {
        var dataSplit = data.split(" ");
        rover = new rov(dataSplit[0], dataSplit[1]);
        inputNo++;
    } else if (inputNo == 2) {
        var dataSplit = data.split(" ");
        rover.setPosition(dataSplit[0], dataSplit[1], dataSplit[2]);
        inputNo++;
    } else if (inputNo == 3) {
        rover.processRover(data);
        output = rover.printPosition();
        inputNo++;
    } else if (inputNo == 4) {
        var dataSplit = data.split(" ");
        rover.setPosition(dataSplit[0], dataSplit[1], dataSplit[2]);
        inputNo++;
    } else if (inputNo == 5) {
        rover.processRover(data);
        console.log(output);
        console.log(rover.printPosition());
        process.exit();
    }
})