startGame.addEventListener("click", countDown);

var countDownTime = document.getElementById ("countdown")

function countDown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            countDownTime.textContent = "Time: "  + timeLeft;
            timeLeft--;
        } else {
            countDownTime.textContent = '';
            clearInterval(timeInterval);
        }
    }, 1000);
}   


