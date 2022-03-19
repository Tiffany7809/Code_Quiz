var Heading = document.getElementById("pageHeader");
var start = document.getElementById("startGame");
var page = document.getElementById("Home");
var countDownTime = document.getElementById ("countdown");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let btn4 = document.createElement("button");
let score = document.createElement("div");
let form = document.createElement("form");
let initials = document.createElement("input");
var s = document.createElement("input");
var text = document.getElementById("text");
var ScoreBoard = document.getElementById("highScores");
var currentScore = 0;
var timeLeft = 120;
//Quiz Questions


// when start game is clicked, start the timer
start.addEventListener("click", Game);

function Game() {
    start.remove();
    text.remove();

    //set timer behavior
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            countDownTime.textContent = "Time: "  + timeLeft;
            timeLeft--;
        } else {
        
            //when timer hits 0
            countDownTime.textContent = '';
            clearInterval(timeInterval);

            Heading.textContent = "All Done!"
            //show score
            page.appendChild(score);
            score.innerHTML = "your score:" + " " + currentScore;

            //form for entering initials
            form.innerHTML = "Enter your initials:"
            form.setAttribute("method", "post");
            form.setAttribute("action", "submit.php");

            initials.setAttribute("id", "player");
            initials.setAttribute("type", "text");
            initials.setAttribute("name", "initials"); 
            initials.setAttribute("placeholder", "Initials");

            s.setAttribute("type", "submit");
            s.setAttribute("value", "Submit");

            page.appendChild(form);
            form.appendChild(initials);
            form.appendChild(s);

            //remove answer buttons
            btn1.remove();
            btn2.remove();
            btn3.remove();
            btn4.remove();
            var inputPlayer= document.getElementById("player");
            form.onsubmit = function(event){
                event.preventDefault();
                localStorage.setItem("name", inputPlayer.value);
                localStorage.setItem("score", currentScore);
                form.reset();
            };
        }
    }, 1000);

  
    Heading.textContent = "Commonly used Data Types do NOT include:"; 
    page.appendChild(btn1); 
    page.appendChild(btn2);
    page.appendChild(btn3);
    page.appendChild(btn4);

    //ASSIGN QUESTIONS TO NEW BUTTONS
    btn1.innerHTML = "Strings";
    btn1.addEventListener("click", function (){ timeLeft -= 10; });

    btn2.innerHTML = "Booleans";
    btn2.addEventListener("click", function (){ timeLeft -= 10; });

    btn3.innerHTML = "Alerts";
    btn3.addEventListener("click", function (){ currentScore += 5; });
    btn3.addEventListener("click", Q2);

    btn4.innerHTML = "Numbers";
    btn4.addEventListener("click", function (){ timeLeft -= 10; });
};

function Q2() {
    Heading.textContent = "The condition of an if/else statement is enclosed within____________."; 
    page.appendChild(btn1); 
    page.appendChild(btn2);
    page.appendChild(btn3);
    page.appendChild(btn4);

    //ASSIGN QUESTIONS TO NEW BUTTONS
    btn1.innerHTML = "Quotes";
    btn1.addEventListener("click", function (){ timeLeft -= 10; });

    btn2.innerHTML = "Curly Brackets";
    btn2.addEventListener("click", function (){ timeLeft -= 10; });

    btn3.innerHTML = "Parentheses";
    btn3.addEventListener("click", function (){ currentScore += 5; });
    btn3.addEventListener("click", Q3);

    btn4.innerHTML = "Square Brackets";
    btn4.addEventListener("click", function (){ timeLeft -= 10; });
};

function Q3() {
    Heading.textContent = "Arrays in JavaScript can be used to store ________."; 
    page.appendChild(btn1); 
    page.appendChild(btn2);
    page.appendChild(btn3);
    page.appendChild(btn4);

    //ASSIGN QUESTIONS TO NEW BUTTONS
    btn1.innerHTML = "Numbers and Strings";
    btn1.addEventListener("click", function (){ timeLeft -= 10; });

    btn2.innerHTML = "Other Arrays";
    btn2.addEventListener("click", function (){ timeLeft -= 10; });

    btn3.innerHTML = "Booleans";
    btn3.addEventListener("click", function (){ timeLeft -= 10; });

    btn4.innerHTML = "Al of the above";
    btn4.addEventListener("click", function (){ currentScore += 5; });
    btn4.addEventListener("click", Q4);
};

function Q4() {
    Heading.textContent = "String values must be enclosed within ________ when being assigned to variables."; 
    page.appendChild(btn1); 
    page.appendChild(btn2);
    page.appendChild(btn3);
    page.appendChild(btn4);

    //ASSIGN QUESTIONS TO NEW BUTTONS
    btn1.innerHTML = "commas";
    btn1.addEventListener("click", function (){ timeLeft -= 10; });

    btn2.innerHTML = "Curly Brackets";
    btn2.addEventListener("click", function (){ timeLeft -= 10; });

    btn3.innerHTML = "Quotes";
    btn3.addEventListener("click", function (){ currentScore += 5; });
    btn3.addEventListener("click", Q5);

    btn4.innerHTML = "Parentheses";
    btn4.addEventListener("click", function (){ timeLeft -= 10; });
};

function Q5() {
    Heading.textContent = "A very useful tool used during development and debugging for printing content to the debugger is:"; 
    page.appendChild(btn1); 
    page.appendChild(btn2);
    page.appendChild(btn3);
    page.appendChild(btn4);

    //ASSIGN QUESTIONS TO NEW BUTTONS
    btn1.innerHTML = "JavaScripts";
    btn1.addEventListener("click", function (){ timeLeft -= 10; });

    btn2.innerHTML = "Terminal/Bash";
    btn2.addEventListener("click", function (){ timeLeft -= 10; });

    btn3.innerHTML = "For Loops";
    btn3.addEventListener("click", function (){ timeLeft -= 10; });

    btn4.innerHTML = "Console.log";
    btn4.addEventListener("click", function (){ currentScore += 5; timeLeft -= 100; });
};


//High Scores function
ScoreBoard.addEventListener("click", function(){

    Heading.textContent = "High Scores"
    btn1.remove();
    btn2.remove();
    btn3.remove();
    btn4.remove();
    start.remove();
    text.remove();
    form.remove();
    initials.remove();
    score.remove();



    //Creating back and clear buttons
    let clear = document.createElement("button");
    let Back = document.createElement("button");
    let table = document.createElement("table");
    
    clear.innerHTML = "Clear"
    Back.innerHTML ="Go back"
    page.appendChild(table);
    page.appendChild(clear);
    page.appendChild(Back);

    //Back button function
    Back.addEventListener("click", function(){
        Heading.textContent = "Coding Quiz Challenge"
        page.appendChild(text);
        page.appendChild(start);
        
        clear.remove();
        Back.remove();
        table.remove();
    });

    //Cear button function
    clear.addEventListener("click", function(){
        localStorage.clear();

    });

    




})





  
