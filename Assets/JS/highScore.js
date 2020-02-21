// lines to get the audio playing
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "../Music/LoLtheme.mp3");
	$(".theme-button").on("click", function() {
		audioElement.play();
	  });
	  $(".pause-button").on("click", function() {
		audioElement.pause();
	  });

    
  const userName = document.getElementById("userName");
  const saveScoreBtn = document.getElementById("saveScoreBtn")
  const mostRecentScore = localStorage.getItem('score')
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const highScoresList = document.getElementById("highScoresList");

  //onClick how to save the score
  //the onClick is on the html page
  saveHighScore = e => {
      e.preventDefault();
      const scores = {
      score : mostRecentScore,
      name: userName.value
      
    }
    highScores.push(scores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    
  }

  //To display the scores
  highScoresList.innerHTML = highScores
  .map(scores => {
    return `<li class="high-score">${scores.name} : ${scores.score}</li>`;
  })
  .join("");

  //clears the local cache. xd
  //onclick on the html page.
  function clearAll() {
    localStorage.clear();
 }
