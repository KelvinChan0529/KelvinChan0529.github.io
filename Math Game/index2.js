let number, random1, random2 = "";
let score = 0;
var correctSound = document.createElement("audio");
correctSound.src = "correct.mp3";
var incorrectSound = document.createElement("audio");
incorrectSound.src = "incorrect.mp3";
var endSound = document.createElement("audio");
endSound.src = "end.mp3";
const submit = document.getElementById("submit");
document.getElementById("score").textContent = score;
document.getElementById("result_score").textContent = score;
layer2.style.display = "none";
layer3.style.display = "none";
layer4.style.display = "none";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

function selector(num) {
    var layer1 = document.getElementById("layer1");
    layer1.style.display = "none";
    layer2.style.display = "block";
    switch (num) {
        case 1:
            document.getElementById("title").textContent = "Addition challenge";
            number = num;
            break;
        case 2:
            document.getElementById("title").textContent = "Subtraction challenge";
            number = num;
            break;
        case 3:
            document.getElementById("title").textContent = "Multiplication challenge";
            number = num;
            break;
        case 4:
            document.getElementById("title").textContent = "Division challenge";
            number = num;
            break;
    }
}

//cancel button
function cancel() {
    number = '';
    var layer1 = document.getElementById("layer1");
    layer1.style.removeProperty("display");
    layer2.style.display = "none";
}


//start button
function start() {
    var layer2 = document.getElementById("layer2");
    layer2.style.display = "none";
    layer3.style.display = "block";
    timer();
    question(number);
}

function timer() {
    var countdown = 60;
    var timeDisplay = document.getElementById("time");
    timeDisplay.textContent = countdown;

    var countdownInterval = setInterval(function () {
        countdown--;
        timeDisplay.textContent = countdown;

        if (countdown === 9) {
            endSound.play();
        }

        if (countdown === 0) {
            clearInterval(countdownInterval);
            var layer3 = document.getElementById("layer3");
            layer3.style.display = "none";
            result();
        }
    }, 1000);

}


function question(number) {
    switch (number) {
        case 1:
            var inputElement = document.getElementById("inputNunber");
            inputElement.value = "";
            random1 = Math.floor(Math.random() * 99);
            var v1 = document.getElementById("v1");
            v1.value = random1;
            random2 = Math.floor(Math.random() * 99);
            var v2 = document.getElementById("v2");
            v2.value = random2;
            document.getElementById("formula").textContent = v1.value + " + " + v2.value;
            break;

        case 2:
            var inputElement = document.getElementById("inputNunber");
            inputElement.value = "";
            random1 = Math.floor(Math.random() * 101) + 100;
            var v1 = document.getElementById("v1");
            v1.value = random1;
            random2 = Math.floor(Math.random() * 100);
            var v2 = document.getElementById("v2");
            v2.value = random2;
            document.getElementById("formula").textContent = v1.value + " - " + v2.value;
            break;

        case 3:
            var inputElement = document.getElementById("inputNunber");
            inputElement.value = "";
            random1 = Math.floor(Math.random() * 50);
            var v1 = document.getElementById("v1");
            v1.value = random1;
            random2 = Math.floor(Math.random() * 50);
            var v2 = document.getElementById("v2");
            v2.value = random2;
            document.getElementById("formula").textContent = v1.value + " X " + v2.value;
            break;

        case 4:
            var inputElement = document.getElementById("inputNunber");
            inputElement.value = "";
            random1 = Math.floor(Math.random() * 76) * 2 + 50;
            var v1 = document.getElementById("v1");
            v1.value = random1;
            random2 = Math.floor(Math.random() * 26) * 2 + 2;
            var v2 = document.getElementById("v2");
            v2.value = random2;
            document.getElementById("formula").textContent = v1.value + " ÷ " + v2.value;
            break;
    }

}

function handleKeyDown(event) {
    if (event.keyCode === 13) {
        check_answer();
    }
}

function check_answer() {
    var input = document.getElementById("inputNunber").value;
    switch (number) {
        case 1:
            if (input == random1 + random2) {
                playCorrectSound();
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            } else {
                playIncorrectSound();
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            }
            break;

        case 2:
            if (input == random1 - random2) {
                playCorrectSound();
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            } else {
                playIncorrectSound();
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            }
            break;

        case 3:
            if (input == random1 * random2) {
                playCorrectSound();
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            } else {
                playIncorrectSound();
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            }
            break;

        case 4:
            if (input == random1 / random2) {
                playCorrectSound();
                score++;
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            } else {
                playIncorrectSound();
                document.getElementById("score").textContent = score;
                document.getElementById("result_score").textContent = score;
            }
            break;
    }
    question(number);
}

function result() {
    var layer3 = document.getElementById("layer3");
    layer3.style.display = "none";
    layer4.style.display = "block";
}

function playCorrectSound() {
    correctSound.play();
    canvas.style.display = "block";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.moveTo(70, 70);
    ctx.lineTo(130, 100);
    ctx.lineTo(270, 0);
    ctx.stroke();
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
    }, 500)
}

function playIncorrectSound() {
    incorrectSound.play();
    canvas.style.display = "block";
    ctx.lineWidth = 10;
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(80, 50);
    ctx.lineTo(200, 120);
    ctx.moveTo(200, 50);
    ctx.lineTo(80, 120);
    ctx.stroke();
    setTimeout(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.style.display = "none";
    }, 500)
}


