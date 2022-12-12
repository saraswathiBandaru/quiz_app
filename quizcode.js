const quiz = [{
    question: "Which type of JavaScript language is ___",
    ans: "Object-Based",
    a: "object-Based",
    b: "Assembly-language",
    c: "High-level",
    d:"object-oriented"
},

{
    question: " In JavaScript, what is a block of statement?",
    ans: "block that combines a number of statements into a single compound statement",
    a: "Conditional block",
    b: "block that combines a number of statements into a single compound statement",
    c: "both conditional block and a single statement",
    d: "block that contains a single statement"
},

{
    question: "The function and  var are known as:",
    ans: "Declaration statements",
    a: "Keywords",
    b: "Data types",
    c: "Declaration statements",
    d: "Prototypes"
},

{
    question: "Which of the following type of a variable is volatile?",
    ans: "Mutable variable",
    a: "Mutable variable",
    b: "Dynamic variable",
    c: "Volatile variable",
    d: "Immutable variable"
},

{
    question: "In the JavaScript, which one of the following is not considered as an error:",
    ans: "Division by zero",
    a: "Syntax error",
    b: "Missing of semicolons",
    c: "Division by zero",
    d: "Missing of Bracket"
},
    // {question:"Which of the following number object function returns the value of the number?",
    // ans:"valueOf()",
    // a:"toString()",
    // b: "valueOf()",
    // c:" toLocaleString()",
    // d:"toPrecision()"},

    // {question:" In JavaScript, what will be used for calling the function definition expression:",
    // ans:"Function literal",
    // a:"Function prototype",
    // b:"Function_literal",
    // c:"Function_calling",
    // d:"Function_declaration"},

    // {question:"Which one of the following operator is used to check weather a specific property exists or not:",
    // ans:"in",
    // a:"Exists",
    // b:"exist",
    // c:"within",
    // d:"in"}

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const total = document.querySelector('#score');
let count = 0;
console.log(count);
let score = 0;
const load_question = () => {
    question.innerText = quiz[count].question;
    option1.innerText = quiz[count].a;
    option1.setAttribute('value', quiz[count].a);
    option2.innerText = quiz[count].b;
    option2.setAttribute('value', quiz[count].b);
    option3.innerText = quiz[count].c;
    option3.setAttribute('value', quiz[count].c);
    option4.innerText = quiz[count].d;
    option4.setAttribute('value', quiz[count].d);
}
load_question();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAns) => {
        if (curAns.checked) {
            answer = curAns.nextElementSibling.innerHTML;
        }
    })
    // console.log(answer)
    return answer;
}

const deselectAll = () => {
    answers.forEach((e) => e.checked = false);

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer, quiz[count].ans);

    if (checkedAnswer === quiz[count].ans) {
        score++;
        console.log(score);
    }


    count++;
    deselectAll();

    if (count < quiz.length) {
        load_question();
    } else {
        //  count=0;
        total.innerHTML = `<h3> YOUR SCORE ${score}/${quiz.length}</h3>
              <button class="btn" onclick="location.reload()">Play Again </button>`;
        total.classList.remove('showscore');
    }
});





