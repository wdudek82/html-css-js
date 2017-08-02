function changeDisplay(displayType) {
    let items = document.querySelectorAll('.inline');

    console.log(displayType);

    items.forEach(item => item.style.display = displayType);
}


function changeVisibility(visibilityType) {
    let items = document.querySelectorAll('.inline');

    console.log(visibilityType);
    console.log(items);

    items.forEach(item => item.style.visibility = visibilityType);
}


function colorGenerator() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let _ of new Array(6)) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

let mainDivElems = document.getElementsByClassName('mainDiv');
let contentDiv = document.getElementById('content');

for (let item of mainDivElems) {
    item.addEventListener('click', function() {
        let newColor = colorGenerator();
        this.style.background = newColor;
        contentDiv.innerHTML = 'Element ID: ' + this.id + ' changed color to: ' + newColor;
    });
}
