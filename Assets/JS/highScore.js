// lines to get the audio playing
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "../Music/LoLtheme.mp3");
	$(".theme-button").on("click", function() {
		audioElement.play();
	  });
	  $(".pause-button").on("click", function() {
		audioElement.pause();
	  });

const username = document.getElementById("userName");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");


const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];




highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  $('#userNameBtn').on('click', function(event){
    event.preventdefault();
  });