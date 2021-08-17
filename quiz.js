const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-button");
const outputHere = document.querySelector("#output");
const correctAnswers = ["60", "right angled triangle", "greater than the third side"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for (let value of formResults.values()) {
        if (value === correctAnswers[index]) {
            score = score + 1;
        }
        index = index + 1;

    }
    
    outputHere.innerText = "Your score is " + score;
}

submitAnswerBtn.addEventListener("click", calculateScore);