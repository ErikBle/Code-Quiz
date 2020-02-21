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
  console.log(highScores)
  
  
  userName.addEventListener("keyup", () => {
    saveScoreBtn.disabled = !userName.value;
  });
    
    saveHighScore = e => {
      e.preventDefault();

    

   

    const scores = {
      score : mostRecentScore,
      name: userName.value
      
    }
    highScores.push(scores);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    
  }