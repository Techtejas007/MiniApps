var questions = [{
    question: "What is the baby of a moth known as?",
    choices: ["baby", "infant", "kit", "larva"]
    correctAnswer: 3
},{
    question: "What is the adult of a kid called",
    choices: ["calf", "doe", "goat", "chick"]
    correctAnswer: 2
},{
    question: "What is the young of Buffalo called?",
    choices: ["calf", "baby", "pup", "cow"]
    correctAnswer: 0
},{
    question: "What is the baby monkey called?",
    choices: ["infant", "baby", "pup", "calf"]
    correctAnswer: 0
},{
    question: "What is the baby bear called?",
    choices: ["cub", "baby balu", "young bear", "bearlet"]
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function() {
    displayCurrentQuestion();
    $(this).find("quizMessage").hide();
    $(this).find(".nextButton").on("click", function (){
        if (!quizOver) {
            value = $("input[type='radio]:checked").val();
            if (value == undefined) {
                $(document).find(".quizMessage").text("Please select  an answer");
                $(document).find(".quizMessage").show();
            }else{
                $(document).find(".quizMessage").hide();
                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                }
             }
        } else {
            quizOver = false;
            $(document).find(".nextButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });
});

function displayCurrentQuestion() {
    console.log("In display current Question");
    
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find(".quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    
    $(questionClass).text(question);
    
    $(choiceList).find("li").remove();
    
    var choice;
    for (i = 0; i< numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />') + choice + '</li>').appendTo(choiceList);
    }
    function resetQuiz() {
        currentQuestion = 0;
        currentAnswers = 0;
        hideScore();
    }
    function displaySore() {
        $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
        $(document).find(".quizContainer > .result").show();
    }
    function hideScore() {
        $(document).find(".result").hide();
    }
    
    
}