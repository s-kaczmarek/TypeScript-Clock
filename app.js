var Clock = /** @class */ (function () {
    //    var h : string ;
    //    var m : string ;
    //    var s : string ;
    function Clock(h, m, s) {
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
    }
    Clock.prototype.timeGenerate = function () {
        var time = new Date();
        var hours = time.getHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
    };
    Clock.prototype.print = function () {
        if (hours.length < 2) {
            hours = '0' + hours;
        }
        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }
        var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
    };
    return Clock;
}());
Clock.timeGenerate();
var newClock = new Clock(hours, minutes, seconds);
Clock.print();
//
//setInterval(newClock, 1000);
document.getElementById('tsClock').innerHTML = newClock;
