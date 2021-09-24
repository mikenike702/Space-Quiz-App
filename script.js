const quizData = [
    {
        question: 'If you happen to fall out of your spaceship without wearing a spacesuit, for roughly how long could you survive?',
        a: '0.01 seconds',
        b: '10 seconds',
        c: '30 seconds',
        d: '60 seconds',
        correct: 'c',
    }, 
    {
        question: 'If an asteroid is 10 AU away from the Earth, how far away is it from the Earth?',
        a: '10 lightyears',
        b: '10 times the distance from the Earth to the Sun',
        c: '10 times the distance from the Earth to the edge of the Solar System',
        d: '10 times the distance from the Sun to Mercury',
        correct: 'b',
    }, 
    {
        question: 'Around 70 percent of the univers is made up of:',
        a: 'Hydrogen',
        b: 'Helium',
        c: 'Dark matter',
        d: 'Dark energy',
        correct: 'd',
    }, 
    {
        question: 'SpaceX, the innovative company headed by entrepreneur Elon Musk, has pioneered which space-related technology?',
        a: 'Sending supplies to the international Space Station',
        b: 'Landing probes on comets',
        c: 'Re-landing rockets for reuse',
        d: 'Terraforming other planets',
        correct: 'c',
    }, 
    {
        question: 'Which mars rover, launched in 2003 with an expected life-span of only 90 days, continues to be active as of 2016?',
        a: 'Curiosity',
        b: 'Opportunity',
        c: 'Spirit',
        d: 'Voyager 2',
        correct: 'b',
    }, 
    {
        question: 'what was the first rocket designed by SpaceX?',
        a: 'Falcon 00',
        b: 'Falcon 1',
        c: 'Falcon Xtreme Pro',
        d: 'Falcon Wayfinder',
        correct: 'b',       
    }, 
    {
        question: 'When was SpaceX founded?',
        a: '2000',
        b: '2001',
        c: '2002',
        d: '2003',
        correct: 'c',
    }, 
    {
        question: 'The furthest scientists have landed a probe is:',
        a: 'Mars',
        b: 'Venus',
        c: 'Pluto',
        d: 'Titan',
        correct: 'd',
    }, 
    {
        question: 'The closest star to the Earth outside of our own solar system is:',
        a: 'The Sun',
        b: 'Sirius',
        c: 'Alpha Centauri',
        d: 'Deneb',
        correct: 'c',
    }, 
    {
        question: 'As portrayed in the Cristopher Nolan film "Interstellar", you will not get trapped in a black hole if you do not cross the:',
        a: 'Singularity',
        b: 'Event horizon',
        c: 'Wormhole',
        d: 'Heliosheath',
        correct: 'b', 
    },
];
const quiz = document.getElementById ("quiz");
const answersEls = document.querySelectorAll 
 (".answer");
const questionEl = document.getElementById ("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById
("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.
    question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answersEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answersEls.forEach((answerEl) => {
        answerEl.checked = false;   
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].
        correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answered 
            correctly at ${score}/${quizData.length} 
            questions.</h2>
            <button onclick="location.reload()
            ">Reload</button> 
            `;
        }
    }
});
