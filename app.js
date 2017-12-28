var Clock = /** @class */ (function () {
    function Clock(element) {
        var _this = this;
        this.el = element;
        setInterval(function () { return _this.run(); }, 1000);
    }
    Clock.prototype.run = function () {
        var time = new Date();
        var hours = time.getHours() + utcValue;
        var hoursChanged = hours.toString();
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        if (hoursChanged.length < 2) {
            hoursChanged = '0' + hoursChanged;
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
utcButton.addEventListener("click", utcChange);
var utcValue = 0;
function utcChange() {
    utcValue += 1;
}
