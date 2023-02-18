const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which type of JavaScript language is ___?",
    a: "Object-Oriented",
    b: "Object-Based",
    c: "Assembly-language",
    d: "High-level",
    correct: "b",
},
{
    question: "What geometric shape is generally used for stop signs?",
    a: "Hexagon",
    b: "Octagon",
    c: "Circle",
    d: "Triangle",
    correct: "b",
},
{
    question: "What type of animal was Harambe, who was shot after a child fell into it&#039;s enclosure at the Cincinnati Zoo?",
    a: "Tiger",
    b: "Panda",
    c: "Crocodile",
    d: "Gorilla",
    correct: "d",
},
{
    question: "What is on display in the Madame Tussaud&#039;s museum in London?",
    a: "Wax sculptures",
    b: "Designer clothing",
    c: "Unreleased",
    d: "Vintage cars",
    correct: "a",
},
{
    question: "According to Sherlock Holmes, &quot;If you eliminate the impossible, whatever remains, however improbable, must be the...&quot;",
    a: "Truth",
    b: "Answer",
    c: "Cause",
    d: "Source",
    correct: "a",
},
{
    question: "What company developed the vocaloid Hatsune Miku?",
    a: "Sega",
    b: "Crypton Future Media",
    c: "Sony",
    d: "Yamaha Corporation",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
skip = 0,
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


document.querySelector("#skip").addEventListener("click", function(){
    skip++;
    index++;
    loadQuestion();
})

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
    <div class="column">
        <h1> Your Score : ${correct} out of ${total}</h1>
        <h3> Correct answers : ${correct} </h3>
        <h3> Wrong answers : ${incorrect} </h3>
        <h3> Skipped answer : ${skip} </h3>
    </div>
`
}
loadQuestion(index);