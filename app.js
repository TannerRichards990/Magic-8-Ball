// import functions and grab DOM elements
const questionSection = document.getElementById('question');
const askedQuestion = document.getElementById('your-question');
const askButton = document.getElementById('ask-button');
const answerSection = document.getElementById('answer');
const questionDisplay = document.getElementById('question-display');
const answerDisplay = document.getElementById('answer-display');
const MagicBall = document.getElementById('Magic-Ball');
// let state
const answer = [
    'Yes, definitely',
    'It is certain',
    'It is decidedly so',
    'Without a doubt',
    'You may rely on it',
    'As I see it, yes',
    'Most Likely',
    'Outlook good',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cannot predict now',
    'Concentrate and ask again',
    'Don’t count on it',
    'My reply is no',
    'My sources say no',
    'Outlook not so good',
    'Very doubtful',
];



// set event listeners 
askButton.addEventListener('click', () => {
    copyQuestion();
    toggleVisibility();
    showRandomAnswer();
});

function copyQuestion() {
    const question = yourQuestion.value;
    questionDisplay.textContent = question;
}

function toggleVisibility(){
    question.classlist.add('hidden');
    answer.classlist.remove('hidden');
  
}







  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
