const heroesNamed = [
    ["tracer", "solider"],
    ["zarya", "rein"]
]
const view = document.querySelector('.test-view')
const buttons = document.querySelector('.test-buttons')

const questions = [
    {
        title: "Как вам нравится играть?",
        answers: [
            "Агрессивно",
            "Спокойно",
        ]
    },
    {
        title: "Какие герои вам больше нравятся?",
        answers: [
            "Быстрые и ловкие",
            "Медлительные и сильные",
        ]
    }
]

let currentQuestion = 0
let answers = []

function renderQuestion(question){
    view.innerHTML = question?.title

    buttons.innerHTML = ""

    for(let answer in question?.answers){
        buttons.innerHTML += `
            <div class="button" onclick="answer(${parseInt(answer)})">${question?.answers[answer]}</div>
        `
    }
}

function answer(id){
    answers.push(id)
    nextQuestion()
}

function nextQuestion(){
    currentQuestion += 1
    if(currentQuestion < questions.length){
        renderQuestion(questions[currentQuestion])
    }else{
        buttons.innerHTML = ""
        const group = answers[0]
        const hero = answers[1]
        view.innerHTML = `Ваш герой: ${heroesNamed[group][hero]}`
    }
}

renderQuestion(questions[0])

