const quiz = [

        {
          question: "What is React JS?",
           a: "A JavaScript library for building user interfaces",
           b: "A web development framework",
           c: "A database management system",
           d: "A programming language",
          ans: "ans1"
        },
        {
          question: "What is JSX?",
           a: "A web browser",
           b: "A programming language",
           c: "A file format",
           d: "A syntax extension for JavaScript",
          ans: "ans4"
        },
        {
          question: "What is the virtual DOM?",
           a: "A real-time representation of the current state of the application",
           b: "A type of computer processor",
           c: "A data structure used by React to efficiently update the UI",
           d: "A JavaScript object that holds all of the application's data",
          ans: "ans3"
        },
        {
          question: "What is a React component?",
           a: "A function that returns HTML",
           b: "A class that extends the React.Component class",
           c: "An object that holds state",
           d: "A built-in HTML element",
          ans: "ans2"
        },
        {
          question: "What is the purpose of state in React?",
           a: "To hold data that can change over time",
           b: "To store static data",
           c: "To represent the current location of the user",
           d: "To hold functions that can be passed as props",
          ans: "ans1"
        }
      
];

const question = document.querySelector('#question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

let timeLeft = 60;

const loadQuestion = () => {
    const questionList = quiz[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;


    //  question.innerText = quiz[0].question;
};


loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }

        
    }

    );
    return answer;
};

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer(); 
    if(checkedAnswer == quiz[questionCount].ans){
        score++;
    };
    questionCount++;
    if(questionCount < quiz.length){
        loadQuestion();
    }
    // else{
    //     showScore.innerHTML = `
    //     <h3> You Scored ${score}/${quiz.length}</h3>
    //     `;
    //     showScore.classList.remove('scoreArea');
        
    // }

})


