


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


// Script collected and edited from: https://javascript.plainenglish.io/how-to-implement-animation-on-scroll-with-vanilla-javascript-655093a38059

