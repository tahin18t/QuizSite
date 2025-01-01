// Quiz Class
class Quiz {
    constructor(question, option1, option2, option3, option4, correctAnswer) {
        this.question = question;
        this.options = [option1, option2, option3, option4];
        this.correctAnswer = correctAnswer;
    }

    getQuestion() {
        return ((currentQuestionIndex+1) + ". " + this.question);
    }

    getOption(button) {

        button.forEach((Element, i) => {
            Element.innerText = this.options[i];
            Element.style.backgroundColor = "black";
            Element.disabled = false;
        })
    }
    getAnswer() {
        return this.correctAnswer;
    }
}

// Questions Array
const questions = [];
questions.push(new Quiz("What is the capital of France?", "Rome", "Berlin", "Paris", "Madrid", 2));
questions.push(new Quiz("Which planet is known as the Red Planet?", "Earth", "Venus", "Mars", "Jupiter", 2));
questions.push(new Quiz("What is 5 × 6?", "25", "30", "35", "40", 1));
questions.push(new Quiz("Who wrote 'Hamlet'?", "Charles Dickens", "William Shakespeare", "J.K. Rowling", "Mark Twain", 1));
questions.push(new Quiz("What is the chemical symbol for water?", "H2O", "CO2", "NaCl", "O2", 0));
questions.push(new Quiz("Which is the smallest prime number?", "0", "1", "2", "3", 2));
questions.push(new Quiz("What is the largest mammal?", "Elephant", "Blue Whale", "Giraffe", "Shark", 1));
questions.push(new Quiz("Which gas do plants absorb from the atmosphere?", "Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen", 2));
questions.push(new Quiz("How many continents are there?", "5", "6", "7", "8", 2));
questions.push(new Quiz("What is the square root of 81?", "7", "8", "9", "10", 2));
questions.push(new Quiz("Who painted the Mona Lisa?", "Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet", 2));
questions.push(new Quiz("Which is the longest river in the world?", "Nile", "Amazon", "Yangtze", "Mississippi", 0));
questions.push(new Quiz("What is the main ingredient in guacamole?", "Tomato", "Avocado", "Onion", "Chili", 1));
questions.push(new Quiz("What is the capital of Japan?", "Beijing", "Seoul", "Tokyo", "Bangkok", 2));
questions.push(new Quiz("How many legs does a spider have?", "6", "8", "10", "12", 1));
questions.push(new Quiz("Which is the largest planet in our solar system?", "Earth", "Mars", "Jupiter", "Saturn", 2));
questions.push(new Quiz("Who discovered gravity?", "Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla", 1));
questions.push(new Quiz("What is the boiling point of water in Celsius?", "90", "100", "110", "120", 1));
questions.push(new Quiz("Which country is famous for pizza?", "Germany", "USA", "Italy", "France", 2));
questions.push(new Quiz("Which language is spoken in Brazil?", "Spanish", "Portuguese", "French", "Italian", 1));

// Add more questions as needed...

// Variables
let currentQuestionIndex = 0;
let score = 0;
let correct = 0;
let wrong = 0;

const optionElement = document.querySelectorAll(".option");

const newOption1Element = document.getElementById("nextQuestion");
const resultElement = document.getElementById("result");

updateScore()
function updateScore() {
    resultElement.innerHTML = ("Your Score: " + score);
}

function loadQuestion(){
    try{
        const questionElement = document.getElementById("question");
        const currentQuestion = questions[currentQuestionIndex]
        questionElement.textContent = currentQuestion.getQuestion();

        currentQuestion.getOption(optionElement)

        newOption1Element.style.display = "none";
    }
    catch(error){
        showAnswer()
    }
}


loadQuestion()

function loadNextQuestion(){
    ++currentQuestionIndex;
    loadQuestion();
}
function selectAnswer(a){
    if(questions[currentQuestionIndex].getAnswer()===a){
        score+=5;
        correct++;
        optionElement[a].style.backgroundColor="green";
        updateScore()
    }
    else {
        wrong++;
        optionElement[questions[currentQuestionIndex].getAnswer()].style.backgroundColor="green";
        optionElement[a].style.backgroundColor="red";
    }
    optionElement.forEach((Element) => {
        Element.disabled = true;
    })
    newOption1Element.style.display = "block";
}

function showAnswer() {
    document.getElementById("quiz").innerHTML = `
        <h1>Total Questions = ${currentQuestionIndex}</h1>
        <h1 style="color:green;">Correct Answers = ${correct}</h1>
        <h1 style="color:red;">Wrong Answers = ${wrong}</h1>
        <hr>
        <h1>Final Score = ${score}</h1>
        <button type="reset" onclick="window.location.reload()" id="nextQuestion">Restart</button>`;
}
