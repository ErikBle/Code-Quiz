var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var startBtn = document.querySelector("#startBtn");

function startQuiz() {
    document.querySelector(".Main").appendChild(btn1);
    document.querySelector(".Main").appendChild(btn2);
    document.querySelector(".Main").appendChild(btn3);
    document.querySelector(".Main").appendChild(btn4);
    document.getElementById("startBtn").style.display = "none";
};


startBtn.addEventListener("click", startQuiz);


//Links to the Highscore page when clicked
document.querySelector(".HSbtn").onclick = function () {
    location.href = "./Assets/Pages/highscore.html";
};