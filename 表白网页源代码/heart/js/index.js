const arr = "2019-05-29 18:06:00".split(/[- :]/);//改这里
const box = document.getElementsByClassName('textCon')[0];

function init() {
    const width = box.offsetWidth;
    const count = parseInt((width / 50 * 5).toString());
    for (let i = 0; i < count; i++) {
        const size = parseInt((ran(60, 120) / 10).toString());
        const ele = document.createElement('div');
        ele.classList.add('item');
        ele.style.width = size + 'px';
        ele.style.height = size + 'px';
        ele.style.left = ran(0, 95) + '%';
        ele.style.top = ran(20, 80) + '%';
        ele.style.animationDelay = ran(0, 30) / 10 + 's';
        box.appendChild(ele);
    }
}

function ran(min, max) {
    min = parseInt(min);
    max = parseInt(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function timer_start() {

    // arr减去数字，强制由字符串类型变成数字
    const start_time = new Date(arr[0] - 0, arr[1] - 1, arr[2] - 0, arr[3] - 0, arr[4] - 0, arr[5] - 0);
    // var start_time =  new Date(beginTime);
    // var start_time = Date.parse(beginTime);
    let duration = parseInt((new Date() - start_time).toString()) / 1000;
    let seconds = parseInt((duration % 60).toString());
    if (seconds < 10)
        seconds = "0" + seconds;
    duration = parseInt((duration / 60).toString());
    let minutes = duration % 60;
    if (minutes < 10)
        minutes = "0" + minutes;
    duration = parseInt((duration / 60).toString());
    let hours = duration % 24;
    if (hours < 10)
        hours = "0" + hours;
    duration = parseInt((duration / 24).toString());
    const days = duration;
    document.getElementsByClassName('days-number')[0].innerHTML = ("" + days);
    document.getElementsByClassName('seconds')[0].innerHTML = (hours + " 时 " + minutes + " 分 " + seconds + " 秒");
}

window.setInterval(timer_start, 1000);
timer_start();
init();
