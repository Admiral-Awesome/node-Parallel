var cp = require('child_process');

var n1 = cp.fork("./calc");
var n2 = cp.fork('./calc');
var n3 = cp.fork('./calc');

console.time("Calculated in");

var summ = 0;

var doneCounter = 0;

n1.send("startPlease");
n2.send("startPlease");
n3.send("startPlease");
n1.on("message", function(Sum) {
    summ += Sum;
    checkDone();
});

n2.on("message", function(Sum) {
    summ += Sum;
    checkDone();
});

n3.on("message", function(Sum) {
    summ += Sum;
    checkDone();
});

function checkDone() {
    doneCounter += 1;
    if ( doneCounter == 3 ) {
        process.emit("done");
    }
}

process.addListener('done', function() {
    console.log(`Summ = ${summ}`);
    console.timeEnd("Calculated in");
})