const quizData = [{
        question: "What is Steve Rogers Date of Birth?",
        a: "June 04 1914",
        b: "May 14 1918",
        c: "Sep 07 1918",
        d: "July 04 1918",
        correct: "d",
    },
    {
        question: "Who is the leader of the Guardians of the Galaxy?",
        a: "Rocket Raccoon",
        b: "Star Lord",
        c: "Drax",
        d: "Gamora",
        correct: "b",
    },
    {
        question: "What is the name of the serum that gave Captain America his powers?",
        a: "Super Soldier",
        b: "Mutant Enhancing",
        c: "Gamma Radiation",
        d: "In-Human",
        correct: "a",
    },
    {
        question: "Who assassinated Tony Stark's parents?",
        a: "Loki",
        b: "Red Skull",
        c: "Winter Soldier",
        d: "Ultron",
        correct: "c",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> WOW!!, you've scored ${correct} / ${total} </h3>
        </div>
    `
}
loadQuestion(index);