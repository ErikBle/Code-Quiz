var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");
var startBtn = document.querySelector(".start");

function startQuiz(event) {
    console.log(event);
    document.querySelector(".Main").appendChild(btn1);

};


startBtn.addEventListener("click", startQuiz);


//Links to the Highscore page when clicked
document.querySelector(".HSbtn").onclick = function () {
    location.href = "./Assets/Pages/highscore.html";
};