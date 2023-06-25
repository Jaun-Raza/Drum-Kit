var numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    })
}

document.addEventListener('keydown', (e) => {
    makeSound(e.key);
    buttonAnimation(e.key);
})

const makeSound = (key) => {

    switch (key) {
        case "w":
            var tune1 = new Audio('sounds/tom-1.mp3');
            tune1.play();
            break;
        case "a":
            var tune2 = new Audio('sounds/tom-2.mp3');
            tune2.play();
            break;
        case "s":
            var tune3 = new Audio('sounds/tom-3.mp3');
            tune3.play();
            break;
        case "d":
            var tune4 = new Audio('sounds/tom-4.mp3');
            tune4.play();
            break;
        case "j":
            var tune5 = new Audio('sounds/snare.mp3');
            tune5.play();
            break;
        case "k":
            var tune6 = new Audio('sounds/kick-bass.mp3');
            tune6.play();
            break;
        case "l":
            var tune7 = new Audio('sounds/crash.mp3');
            tune7.play();
            break;
    }
}

function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add('pressed');

    setTimeout(() => {
        activeButton.classList.remove('pressed');
    }, 100)

}