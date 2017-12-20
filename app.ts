class Clock {
  el: Element;
  constructor(element) {
    this.el = element;
    setInterval(() => this.run(), 1000)
  }
  
  run() {
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
  }
}

const clock = new Clock(document.getElementById('tsClock'))