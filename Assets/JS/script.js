var currentQuestion;
var currentPoints;
var unAnswered;
var userChoice;
var correctAnswers;
var incorrectAnswers;
var seconds;
var time;
$('#hsBtn').hide();

var triviaQuestion = [
    {
        question: "What is the short form for League of Legends?",
        answerList: ["LoL", "lol", "LeagueOL"],
        answer: 0
    },
    {
        question: "How many roles are there in League?",
        answerList: ["2", "4", "5"],
        answer: 2
    },
    {
        question: "What is the shortest time you can surrender?",
        answerList: ["5 min", "15 min", "20 min"],
        answer: 1
    },
    {
        question: "How many different kind of drakes are there?",
        answerList: ["2", "4", "5"],
        answer: 2
    },
    {
        question: "How many Inhibators, IN TOTAL, are there?",
        answerList: ["6", "9", "14"],
        answer: 0
    },
    {
        question: "The game ends when the enemy __ is destoryed",
        answerList: ["Boss", "Nexus", "Dota"],
        answer: 1
    },
];

var outputs = {

    correct: "Correct",
    incorrect: "Incorrect",
    over: "Quiz is up!"
}
// lines to get the audio playing
var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "./Assets/Music/LoLtheme.mp3");
	$(".theme-button").on("click", function() {
		audioElement.play();
	  });
	  $(".pause-button").on("click", function() {
		audioElement.pause();
	  });

// When start is pressed
$('#startBtn').on('click', function(){
	$(this).hide();
	$('#startOverBtn').hide();
	$('p').hide();
	$('#highScoreBtn').hide();
	$('#hsBtn').hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	$('#highScoreBtn').hide();
	$('#hsBtn').hide();
	newGame();
});


//empties everything and sets it to 0
function newGame() {

    $("#final-msg").empty();
    $("#correctAnswers").empty();
    $("#incorrectAnswers").empty();
	$("#unanswered").empty();
	$("#currentPoints").empty();
	$(".answerList").empty();

    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
	unanswered = 0;
	currentPoints = 0;
	seconds = 0;
	firstQus();
	
}

// Grabs the first question and STARTS the global timer
function firstQus() {
	$('#msg').empty();
    $('#correctans').empty();
	$(".answerList").show();
	$("#outputRight").empty();
	$("#outputWrong").empty();
	seconds = 40;
	

	$('#currentQuestion').html('Question '+ (currentQuestion +1)+ '/' +triviaQuestion.length);
	$('.question').html('<h2>' + triviaQuestion[currentQuestion].question + '</h2>');
	for(var i = 0; i < 3; i++)
	{
		var choices = $('<div>');
		choices.text(triviaQuestion[currentQuestion].answerList[i]);
        choices.attr({'data-index': i });
		choices.addClass('btn-primary');
		$('.answerList').append(choices);
	}
	countdown();
	
	$('.btn-primary').on('click',function(){
		userChoice = $(this).data('index');
		clearInterval(time);
		answer();
	});
}

// Grabs a new question, doesn't affect the global timer
function newQus (){
	$('#msg').empty();
    $('#correctans').empty();
	$(".answerList").show();
	$("#outputRight").empty();
	$("#outputWrong").empty();

	$('#currentQuestion').html('Question '+ (currentQuestion +1)+ '/' +triviaQuestion.length);
	$('.question').html('<h2>' + triviaQuestion[currentQuestion].question + '</h2>');
	for(var i = 0; i < 3; i++)
	{
		var choices = $('<div>');
		choices.text(triviaQuestion[currentQuestion].answerList[i]);
        choices.attr({'data-index': i });
		choices.addClass('btn-primary');
		$('.answerList').append(choices);
	}
	countdown();
	
	$('.btn-primary').on('click',function(){
		userChoice = $(this).data('index');
		clearInterval(time);
		answer();
	});
}

//code for the global timer
function countdown(){
	$('#time-left').html('<h3>Time Remaining: ' + seconds + '</h3>');
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#time-left').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answer();
	}
}

//lines when the user submits an answer
function answer(){
	$('#currentQuestion').empty();
    $('.question').empty();
    $('.answerList').empty();

	var rightAnswerText = triviaQuestion[currentQuestion].answerList[triviaQuestion[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestion[currentQuestion].answer;
	
	
	if((userChoice == rightAnswerIndex)) {
		correctAnswers++;
		currentPoints+=6;
		$('#outputRight').html(outputs.correct);
	} else if((userChoice != rightAnswerIndex)){
		incorrectAnswers++;
		currentPoints-=3;
		seconds-=5;
		$('#outputWrong').html(outputs.incorrect);
		$('#correctans').html('The correct answer was: ' + rightAnswerText);
	} else{
		incorrectAnswers++;
		$('#msg').html(outputs.over);
		$('#correctans').html('The correct answer was: ' + rightAnswerText);
	}	
	
	if(currentQuestion == (triviaQuestion.length-1)){
		setTimeout(resultboard, 2500)
	} else{
		currentQuestion++;
		setTimeout(newQus, 2500);
	}	
}

//End screen
function resultboard(){
	$('#time-left').empty();
	$('#msg').empty();
	$('#correctans').empty();
	$("#outputRight").empty();
	$("#outputWrong").empty();
	localStorage.setItem("score", JSON.stringify(currentPoints));

	$('#final-msg').html(outputs.over);
	$('#correctAnswers').html("Correct Answers: " + correctAnswers);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswers);
	$('#currentPoints').html("Total Points: " + currentPoints);
	$('#hsBtn').show();
	$('#startOverBtn').addClass('btn-primary');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over');
	$('#highScoreBtn').show();
	
}







