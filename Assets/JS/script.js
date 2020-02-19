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
        answerList: ["2", "3", "4"],
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

    correct: "Correct :) ",
    incorrect: "Incorrect :( ",
    timing: "Out of Time!",
    over: "Quiz is up!"
}

var currentQuestion;
var correctAnswers;
var incorrectAnswers;
var unanswered;
var answered;
var userChoice;
var seconds;
var time;

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

function newGame()
{

    $("#final-msg").empty();
    $("#correctanswers").empty();
    $("#incorrectanswers").empty();
    $("#unanswered").empty();

    currentQuestion = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    newQus();
}





