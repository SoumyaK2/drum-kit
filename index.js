var n = document.querySelectorAll("button").length;

for (var i = 0; i < n; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonHtml = this.innerHTML;
        
        makeSound(buttonHtml);
        buttonAnimation(buttonHtml);
    });
}

document.addEventListener("keypress",(event)=>{
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio("sounds/snare.mp3");
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio("sounds/kick-bass.mp3");
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio("sounds/crash.mp3");
            tom7.play();
            break;
        default:
            console.log("Something wrong");


    }
}

function buttonAnimation(key){
    var activeButton= document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(()=>{
        activeButton.classList.remove("pressed");
    },100);
}

