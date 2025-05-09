const hidden_elements = document.querySelectorAll('.hide');
const observer = new IntersectionObserver(elements => {
    elements.forEach(element => {
        element.target.classList.toggle("show", element.isIntersecting)
    });
}, {
    threshold: 0.3 
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

      // Calling Watertank to give the correct amount compared to the questions answered
      updateWaterTank(questionCount);

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

  const alexWater = document.getElementById('alextank');
  const normalWater = document.getElementById('normaltank');
  const guessedWater = document.getElementById('guessedtank');

  resultEl.textContent = `You Guessed ${guessedAmount} liters`;
  alexUsage.textContent = `Alex Used ${alexAmount} liters`;
  normalUsage.textContent = `The correct amount is ${normalAmount} liters`;

  // Giving class depending on which value is the largest and smallest
  if(guessedAmount < normalAmount){
    guessedWater.classList.add('smallest');
    alexWater.classList.add('largest');
    console.log("Wow You guessed the lowest amount of water try again?");
    
  } else if(guessedAmount === normalAmount){
    alexWater.classList.add('largest');
    console.log("Wow You guessed the correct amount of water!");

  } else if(guessedAmount < alexAmount){
    alexWater.classList.add('largest');
    normalWater.classList.add('smallest');
    console.log("Alex used the most water");

  } else{
    guessedWater.classList.add('largest');
    normalWater.classList.add('smallest');
    console.log("You guessed the most water used try again?");
  }
}
const waterLevel = document.getElementById('water-level');
const waterTank = document.querySelector('.water--meter__container')
function updateWaterTank(index){
  waterLevel.classList.remove('stage-0', 'stage-1', 'stage-2', 'stage-3');
  waterLevel.classList.add('stage-' + index);
  if(waterLevel.classList.contains('stage-3')){
    waterTank.classList.add('shake');
  } else{
    waterTank.classList.remove('shake');
  }
}



const target = document.querySelector(".street--house__1");

    // Start observing the target element without a separate `observer` variable and adding animation when it comes into frame
    new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add("animate");
            } else {
                target.classList.remove("animate");
            }
        });
    }).observe(target);

    
    const stickyElement = document.querySelector(".water--meter__sticky");
    const targetSection = document.querySelector(".grid--watertank"); 
    
    const sticky = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stickyElement.classList.remove("show"); // Removes 'show' class when intersecting final quiz result
          } 
        });
      },
      {
        // Remove as soon as result comes into view
        threshold: 0, 
      }
    );
    
    sticky.observe(targetSection);

    const waveTarget = document.querySelector(".water")
    const spil = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              waterTank.classList.add("spil");
              waterTank.classList.remove("shake");
              waterLevel.classList.remove('stage-3');
          } else {
              waterTank.classList.remove("spil");
          }
      });
    },
      {
        threshold: 0.3,
      }
    );
    spil.observe(waveTarget);