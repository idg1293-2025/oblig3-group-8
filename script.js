const hidden_elements = document.querySelectorAll('.hide');
const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        if (element.isIntersecting) {
            element.target.classList.add('show');
        } else {
            element.target.classList.remove('show');
        }
    });
}, {
    threshold: 0.5 
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
      questionCount++;
      if(questionCount === waterQuiz.length){
        showResult();
      }
    });
  });
});

function showResult(){
  const resultEl = document.getElementById('guessResult');
  const normalUsage = document.getElementById('normalUsage');
  const alexUsage = document.getElementById('alexUsage');
  resultEl.textContent = `You Guessed ${guessedAmount} liters`;
  alexUsage.textContent = `Alex Used ${alexAmount} liters`;
  normalUsage.textContent = `The correct amount is ${normalAmount} liters`;

  if(guessedAmount < normalAmount){
    console.log("Wow You guessed the lowest amount of water try again?");
  } else if(guessedAmount === normalAmount){
    console.log("Wow You guessed the correct amount of water!");
  } else if(guessedAmount < alexAmount){
    console.log("Alex used the most water")
  } else{
    console.log("You guessed the most water used try again?")
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // Target the element you want to animate
  const target = document.querySelector(".street--house__1");

  // Create the intersection observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when the element is in view
          target.classList.add("animate");
          // Stop observing once animation is triggered
          
        }else {
          target.classList.remove("animate");
        }
      });
    },
    {
       // Adjust this based on when you want to trigger the animation
    }
  );

  // Start observing the target element
  observer.observe(target);
});