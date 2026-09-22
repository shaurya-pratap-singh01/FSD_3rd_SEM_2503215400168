const questions = [
    {
        question: "Which language is mainly used to structure a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language is mainly used to style a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "CSS"
    },
    {
        question: "Which language is mainly used to add interactivity to a webpage?",
        options: ["HTML", "CSS", "JavaScript", "Python"],
        answer: "JavaScript"
    },
    {
        question: "Which tag is used to create a heading in HTML?",
        options: ["<p>", "<h1>", "<div>", "<head>"],
        answer: "<h1>"
    },
    {
        question: "Which HTML tag is used to create a paragraph?",
        options: ["<h1>", "<p>", "<br>", "<body>"],
        answer: "<p>"
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["color", "background-color", "font-size", "text-align"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "background-color", "font-size", "text-align"],
        answer: "background-color"
    },
    {
        question: "Which CSS property is used to change the font size?",
        options: ["color", "background-color", "font-size", "text-align"],
        answer: "font-size"
    },
    {
        question: "Which CSS property is used to align text?",
        options: ["color", "background-color", "font-size", "text-align"],
        answer: "text-align"
    },
    {
        question: "Which JavaScript function is used to display a message in the console?",
        options: ["console.log()", "alert()", "prompt()", "document.write()"],
        answer: "console.log()"
    }
];


let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 10;
let selectedAnswer = null;


// START QUIZ
const startButton = document.querySelector("#startButton");

startButton.addEventListener("click", function () {

    const name = document.querySelector("#nameInput").value.trim();
    const rollNo = document.querySelector("#rollNoInput").value.trim();
    const section = document.querySelector('input[name="section"]:checked');


    // VALIDATION

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (rollNo === "") {
        alert("Please enter your roll number.");
        return;
    }

    if (section === null) {
        alert("Please select your section.");
        return;
    }


    // Start quiz

    document.querySelector("#studentSection").style.display = "none";

    document.querySelector("#quizSection").style.display = "block";

    showQuestion();
});


// SHOW QUESTION

function showQuestion() {

    clearInterval(timer);

    selectedAnswer = null;

    const questionData = questions[currentQuestion];


    document.querySelector("#questionNumber").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    document.querySelector("#question").textContent =
        questionData.question;


    document.querySelector("#timer").textContent =
        `Time Left: 10 seconds`;


    const optionsContainer = document.querySelector("#options");

    optionsContainer.innerHTML = "";


    // CREATE OPTIONS

    questionData.options.forEach(function (option) {

        const button = document.createElement("button");

        button.textContent = option;

        button.classList.add("option");

        button.addEventListener("click", function () {

            selectedAnswer = option;

            // Remove previous selection
            document.querySelectorAll(".option").forEach(function (btn) {
                btn.classList.remove("selected");
            });

            // Highlight selected option
            button.classList.add("selected");

        });

        optionsContainer.appendChild(button);
    });


    // START TIMER

    timeLeft = 10;

    timer = setInterval(function () {

        timeLeft--;

        document.querySelector("#timer").textContent =
            `Time Left: ${timeLeft} seconds`;


        if (timeLeft === 0) {

            clearInterval(timer);

            nextQuestion();
        }

    }, 1000);
}


// NEXT QUESTION

const nextButton = document.querySelector("#nextButton");

nextButton.addEventListener("click", function () {

    nextQuestion();

});


function nextQuestion() {

    clearInterval(timer);


    // Check answer only if user selected something

    if (selectedAnswer !== null) {

        if (selectedAnswer === questions[currentQuestion].answer) {

            score++;

        }

    }


    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }
}


// SHOW RESULT

function showResult() {

    clearInterval(timer);

    document.querySelector("#quizSection").innerHTML = `

        <h1>Quiz Completed!</h1>

        <h2>Your Score: ${score} / ${questions.length}</h2>

        <button onclick="location.reload()">
            Restart Quiz
        </button>

    `;
}