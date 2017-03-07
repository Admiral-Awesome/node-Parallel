module.exports = function () {
    var Summ = 0;

    for (var i = 0; i < 1000; i++)
        for (var k = 0; k < 1000; k++)
            for (var j = 0; j < 100; j++) {
                Summ += Math.random();
            }
    process.send(Summ);        
    return Summ;
}

process.on("message", function() {
    module.exports();
})