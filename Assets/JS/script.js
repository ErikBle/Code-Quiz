var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var startBtn = document.querySelector("#startBtn");

function startQuiz() {
    document.querySelector(".btn-group-vertical").appendChild(btn1);
    document.querySelector(".btn-group-vertical").appendChild(btn2);
    document.querySelector(".btn-group-vertical").appendChild(btn3);
    document.querySelector(".btn-group-vertical").appendChild(btn4);
    btn1.className = "btn btn-primary";
    btn2.className = "btn btn-primary";
    btn3.className = "btn btn-primary";
    btn4.className = "btn btn-primary";
    document.getElementById("startBtn").style.display = "none";
    document.querySelector("p").style.display = "none";
};


startBtn.addEventListener("click", startQuiz);


//Links to the Highscore page when clicked
document.getElementById("HSbtn").onclick = function () {
    location.href = "./Assets/Pages/highscore.html";
};