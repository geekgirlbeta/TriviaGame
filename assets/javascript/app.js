var correct = 0;
var wrong = 0;

var currentQuestion = {};
var eightQuestions = [];
var answersArray = [];


var questions = [
    { question : "What actor does Tina Belcher's voice?",
    answers: [
        "Sarah Silverman",
        "Dan Mintz",
        "Your mom",
        "Yeardley Smith"
    ],
    correct: [
        "Dan Mintz"
    ]
    },
    { question : "In the episode The Outside Toilet, which actor voiced the toilet?",
    answers: [
        "Tom Green",
        "Your Mom",
        "Jon Hamm",
        "H. Jon Benjamin"
    ],
    correct: [
        "Jon Hamm"
    ]
    },
    { question : "When did Bob's Burgers first air?",
    answers: [
        "2010",
        "2013",
        "2011",
        "2008"
    ],
    correct: [
        "2011"
    ]
    },
    { question : "Did Gene ever find the two-butted goat?",
    answers: [
        "No",
        "Yes",
        "Your Mom",
        "I don't know."
    ],
    correct: [
        "Yes"
    ]
    },
    { question : "How old are Tine, Gene, and Louise?",
    answers: [
        "14-11-9",
        "13-11-9",
        "15-12-9",
        "13-11-10"
    ],
    correct: [
        "13-11-9"
    ]
    },
    { question : "What holiday is Bob obsessed with?",
    answers: [
        "Valentine's Day",
        "Thanksgiving",
        "Halloween",
        "Christmas"
    ],
    correct: [
        "Thanksgiving"
    ]
    },
    { question : "What color is Tina's berret?",
    answers: [
        "Blue",
        "Pink",
        "Yellow",
        "Red"
    ],
    correct: [
        "Yellow"
    ]
    },
    { question : "What is the name of Linda's sister?",
    answers: [
        "Gloria",
        "Jocelyn",
        "Gayle",
        "Gretchen"
    ],
    correct: [
        "Gayle"
    ]
    },
    { question : "Which is the name of the island across the water from the mainland?",
    answers: [
        "King's Rock Island",
        "Good King Island",
        "Kingfisher Island",
        "King's Head Island"
    ],
    correct: [
        "King's Head Island"
    ]
    },
    { question : "Which of these characters is not a Pesto child?",
    answers: [
        "Jimmy Jr",
        "Andy",
        "Ollie",
        "Tammy"
    ],
    correct: [
        "Tammy"
    ]
    },
    { question : "Which is the name of the school the Belcher children attend?",
    answers: [
        "Glencrest",
        "Schooner",
        "Wagstaff",
        "Huxley"
    ],
    correct: [
        "Wagstaff"
    ]
    },
    { question : "Which is the name of the amusement park down the street from the restaurant?",
    answers: [
        "Wildwood Warf",
        "Fisherman's Wharf",
        "Wonder Wharf",
        "Atlantic Boardwalk"
    ],
    correct: [
        "Wonder Wharf"
    ]
    },
    { question : "On which street is the Bob's Burgers restaurant located?",
    answers: [
        "Bay Boulevard",
        "Sea Street",
        "Ocean Avenue",
        "Harbor Way"
    ],
    correct: [
        "Ocean Avenue"
    ]
    },
    { question : "Which character shares their name with their voice actor?",
    answers: [
        "Gene",
        "Mort",
        "Louise",
        "Teddy"
    ],
    correct: [
        "Gene"
    ]
    },
    { question : "Which is the name of Linda's ex-fiancée and the local health inspector?",
    answers: [
        "Mort",
        "Javed",
        "Hugo",
        "Jairo"
    ],
    correct: [
        "Hugo"
    ]
    },
    { question : "Which is the name of the permanent business next door to the restaurant?",
    answers: [
        "Yours Truly Stationery",
        "The Hobby Hole",
        "It's Your Funeral Home And Crematorium",
        "Reflections"
    ],
    correct: [
        "It's Your Funeral Home And Crematorium"
    ]
    },
    { question : "Which color shirt does Gene wear for the majority of the show?",
    answers: [
        "Red",
        "Yellow",
        "Blue",
        "Green"
    ],
    correct: [
        "Yellow"
    ]
    },
    { question : "How much does a regular burger cost at the restaurant?",
    answers: [
        "$5.50",
        "$4.95",
        "$5.95",
        "$5.00"
    ],
    correct: [
        "$5.00"
    ]
    },
    { question : "With which local gang does Louise seek help in retrieving her ears from Logan?",
    answers: [
        "One Eyed Snakes",
        "Two Horned Toads",
        "Four Toes Sloths",
        "Three Headed Dogs"
    ],
    correct: [
        "One Eyed Snakes"
    ]
    },
    { question : "Which is the name of the organization both Tina and Louise were once a part of?",
    answers: [
        "Thundergirls",
        "Girl Whalers",
        "Girl Scouts",
        "Girlwinds"
    ],
    correct: [
        "Thundergirls"
    ]
    },
    { question : "Which sport did the Belcher kids attempt to start at their school to avoid going to P.E.?",
    answers: [
        "Ultimate Frisbee",
        "Synchronized Swimming",
        "Dodgeball",
        "Ice Skating"
    ],
    correct: [
        "Synchronized Swimming"
    ]
    },
    { question : "Which was the original last name of Jimmy Pesto Sr.?",
    answers: [
        "Pesto",
        "Palladino",
        "Papadopoulos",
        "Poplopovich"
    ],
    correct: [
        "Poplopovich"
    ]
    },
    { question : "Which of Louise's 'friends' ends up sleeping over at her surprise slumber party?",
    answers: [
        "Harley",
        "Jessica",
        "Jodi",
        "Abby"
    ],
    correct: [
        "Jessica"
    ]
    },
    { question : "Who wins Mr. Fischoeder's ticket contest when they are bribed to go to his Thanksgiving dinner?",
    answers: [
        "Gene",
        "Tina",
        "Louise",
        "Linda"
    ],
    correct: [
        "Louise"
    ]
    }
]



// Code to run the timer on the page.
var startTimerValue;
var intervalId;


function startQuestionTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrementTimer, 1000);
}

function decrementTimer() {
    startTimerValue--;
    $("#counter").html("<h2>" + startTimerValue + "</h2>");
    if (startTimerValue === 0) {
        wrong++;
        stopTimer();
        nextQuestion();
        $("#choice").empty();
        $("#answered").html("<h2>Your time has run out. The correct answer is </h2>" + currentQuestion.correct[0]);
    }
}

function stopTimer() {
    clearInterval(intervalId);
}
// End of code that runs the timer on the page.
function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomChoice = questions[randomIndex];
    return randomChoice;
}

function currentGameQuestions() {
    var usedQuestions = [];
    eightQuestions = [];
    for (var i = 0; i < 8; i++) {
        var tempQuestion = getRandomQuestion();
        while (usedQuestions.includes(tempQuestion.question)) {
            tempQuestion = getRandomQuestion();
        }
        eightQuestions.push(tempQuestion);
        usedQuestions.push(tempQuestion.question);
        
        //questions.splice(randomIndex, 1);

    }
    console.log(eightQuestions);
}

// Grabs a random question out of the questions array.
//function randomQuestion() {
//    return questions[Math.floor(Math.random() * questions.length)];
//}

function shouldGameEnd() {
    if (eightQuestions === undefined){
        return true;
    }
    if (eightQuestions.length > 0) {
        return false;
    } else {
        return true;
    }
}


function answerButtons() {
    console.log("This is what is in currentQuestion: " + currentQuestion.answers);
    currentQuestion.answers.forEach(function(answer) {
        //answersArray.push(answer);
        $("#choice").append(`<button data-val=${answer}>${answer}</button>`)
    })
}   

function buttonClick() {
    $("#choice button").each(function(index) {
        var ans = $(this);
        ans.off("click");
        ans.on("click", function(event) {
            var a = ans.text();
            console.log("This is a: " + a);
            console.log("This is current: " + currentQuestion.correct[0]);
            if (a === currentQuestion.correct[0]) {
                correct++;
                stopTimer();
                $("#answered").html("<p>You have answered correctly!</p>");
                nextQuestion();
            } else {
                wrong++;
                stopTimer();
                $("#answered").html("<p>You have answered incorrectly. The correct answer is: </p>" + currentQuestion.correct[0]);
                nextQuestion();
            }
        })
    });
}

function runGame() {
    currentGameQuestions();
    $("#start-game").off("click");
    $("#start-game").on("click", function(event) {
        startGame();
        event.preventDefault();
    })
}

function nextQuestion() {
    answersArray = [];
    $("#counter").html("<h2>---</h2>");
    setTimeout(startGame, 1000 * 3);
    $("#choice").empty();
}

function reset() {
    $("#answered").empty();
    $("#correct").empty();
    $("#wrong").empty();
}

function endOfGame() {
    $("#correct").html("Number of correct answers: " + correct);
    $("#wrong").html("Number of incorrect answers: " + wrong);
    currentQuestion = {};
    correct = 0;
    wrong = 0;
    eightQuestions = [];
    answersArray = []; 
    $("#question").empty();
    $("#choice").empty();
    $("#start-game-div").show();
    runGame(); 
}


function startGame() {
    reset();
    console.log("Should the game end? " +shouldGameEnd());
    if (shouldGameEnd()) {
        endOfGame();
        return;
    }
    currentQuestion = eightQuestions.pop();
    //console.log(eightQuestions);
    //TODO what happens when eightQuestions is empty
    startTimerValue = 30;
    $("#start-game-div").hide();
    answerButtons();
    buttonClick();
    startQuestionTimer();
    $("#question").text(currentQuestion.question);  
}

$(document).ready(function() {
    runGame(); 
});



