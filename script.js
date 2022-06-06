const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-cont')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answers-btns')

let shuffledQuestions, currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove('hide')
    loadNextQuestion()
}

function loadNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Which is NOT a coding language?',
        answers: [
            { text: 'CSS', correct: false },
            { text: 'HTML', correct: false },
            { text: 'PBJ', correct: true },
            { text: 'JS', correct: false },
        ]
    }
]