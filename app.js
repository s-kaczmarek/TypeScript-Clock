<<<<<<< HEAD
var clock = document.getElementById('clock');

function Clock() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

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

  clock.textContent = clockStr;
  
}

Clock();
setInterval(Clock, 1000);
=======
var Clock = /** @class */ (function () {
    function Clock(element) {
        var _this = this;
        this.el = element;
        setInterval(function () { return _this.run(); }, 1000);
    }
    Clock.prototype.run = function () {
        var time = new Date();
        var hours = time.getHours().toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
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
        this.el.textContent = clockStr;
    };
    return Clock;
}());
var clock = new Clock(document.getElementById('tsClock')); // const changed to var
var utcButton = document.getElementById('button');
var utcClock = document.getElementById('tsClock');
utcButton.addEventListener("click", utcChange);
function utcChange() {
    var clock = new Clock(document.getElementById('tsClock') + 'works');
}
>>>>>>> TS-version
