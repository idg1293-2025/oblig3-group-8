const hidden_elements = document.querySelectorAll('.hide')
const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if(element.isIntersecting){
            element.target.classList.add('show');
        }
        else{
            element.target.classList.remove('show')
        }
    })
});

hidden_elements.forEach(el => {
    observer.observe(el);
});
// Script collected from: https://javascript.plainenglish.io/how-to-implement-animation-on-scroll-with-vanilla-javascript-655093a38059
const waterQuiz = [
    {
      question: "How many liters does a 10 minute Shower use?",
      options: [160, 120, 250, 200],
      answer: 160
    },
    {
      question: "How many liters does a Toilet use per flush?",
      options: [6, 12, 3, 20],
      answer: 6
    },
    {
        question: "How many liters does a bath use?",
        options: [400, 200, 350, 300],
        answer: 200
    },
      {
        question: "How many liters does a washing machine use per cycle?",
        options: [40, 50, 30, 80],
        answer: 30
      },
    
  ];

let score = 0;
let guessedAmount = 0;
let questionCount = 0;
const normalAmount = 396;
const alexAmount = 552;

// Selecting Buttons inside question containers
const questionGroups = document.querySelectorAll(".questions .button");

questionGroups.forEach(function(question, i) {
  // Get all buttons in container
  const buttons = question.querySelectorAll("button");

  buttons.forEach(function(button) {
    button.addEventListener("click", function()  {
      // Exit Function if question has already been answered
      if (question.dataset.answered === "true") return;
      // Set as true if it isn't already
      question.dataset.answered = "true";

      // Converting string to numbers so strict equality works correctly
      const clickedValue = parseInt(button.innerText, 10);
      const correctAnswer = waterQuiz[i].answer;
      guessedAmount += clickedValue;

      if (clickedValue === correctAnswer) {
        button.classList.add("correct");
        score++;
      } else {
        button.classList.add("false");
      }
      // Logging to see the results of the script working
      console.log(guessedAmount);
      console.log(score);
    });
  });
});



