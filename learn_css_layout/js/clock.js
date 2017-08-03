

function sleep(milliseconds) {
    let start = new Date().getTime();

    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function getCurTime() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    return {
        hour: hour,
        minutes: minutes,
        seconds: seconds
    }
}

function printCurTime(hour = 0, minutes = 0, seconds = 0) {
    let time = document.getElementById('curTime');
    time.innerText = `${hour}:${minutes}:${seconds}`
}

function drawClock() {
    let { hour, minutes, seconds } = getCurTime();
    let secondsHand = document.getElementsByClassName('bar')[0];
    let clock = document.getElementById('clock');


    if (seconds > 30) {
        clock.classList.add('p51');
    } else {
        clock.classList.remove('p51');
    }

    secondsHand.style.webkitTransform = `rotate(${seconds * 6}deg)`;

    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    printCurTime(hour, minutes, seconds);

    console.log(`${hour}:${minutes}:${seconds}`);

}

setInterval(drawClock, 1000);


