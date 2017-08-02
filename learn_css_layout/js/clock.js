let secondsHand = document.getElementById('secondsHand');


function sleep(milliseconds) {
    let start = new Date().getTime();

    for (let i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function seconds() {
    let sec;
    sec = new Date().getSeconds();
    secondsHand.classList.remove(`p${sec-1}`);
    secondsHand.classList.add(`p${sec}`);
    console.log(sec);
}

setInterval(seconds, 1000);


