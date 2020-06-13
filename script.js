const questions = [{
      question: "What is the baby of a moth known as?",
      choices: ['baby', 'infant', 'kit', 'larva'],
      correctAnswer: 3
}, {
      question: "What is the adult of a kid called?",
      choices: ['baby', 'doe', 'goat', 'chick'],
      correctAnswer: 2
}, {
      question: "What are the young of buffalo?",
      choices: ['calf', 'baby', 'pup', 'cow'],
      correctAnswer: 0
}, {
      question: "What is a baby alligator called?",
      choices: ['baby', 'gator', 'hatchling', 'calf'],
      correctAnswer: 2
}, {
      question: "What is a baby goose called?",
      choices: ['gooser', 'gosling', 'gup', 'pup'],
      correctAnswer: 1
}, {
      question: "What a baby hamster called?",
      choices: ['pup', 'chick', 'infant', 'billy'],
      correctAnswer: 0
}, {
      question: "What is a baby hawk called?",
      choices: ['hawklett', 'pup', 'larva', 'eyas'],
      correctAnswer: 3
}, {
      question: "What is a baby grasshopper called?",
      choices: ['hopper', 'nymph', 'stick', 'grassie'],
      correctAnswer: 1
}, {
      question: "What is a baby kangaroo called?",
      choices: ['kinga', 'joey', 'calf', 'baby'],
      correctAnswer: 1
}, {
      question: "What is a baby whale called?",
      choices: ['whala', 'cub', 'grub', 'infant'],
      correctAnswer: 1
}, {
      question: "What is a baby monkey called?",
      choices: ['infant', 'baby', 'calf', 'pup'],
      correctAnswer: 0
}, {
      question: "What is a baby bear called?",
      choices: ['cub', 'balu', 'young', 'bearlet'],
      correctAnswer: 0
}];

let currentQuestion = 0;
let correctAnswers = 0;
let quizOver = false;

$(document).ready(function(){
  displayCurrentQuestion();
  $(this).find('.quizMessage').hide();
  $(this).find('.nextButton').on('click', function() {
    if (!quizOver) {
      value = $("input[type='radio']:checked").val();
      if (value == undefined) {
        $(document).find('.quizMessage').text("Please select an answer.");
        $(document).find('.quizMessage').show();
      } else {
        $(document).find('.quizMessage').hide();
        if (value == questions[currentQuestion].correctAnswer) {
          correctAnswers++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          displayCurrentQuestion();
        } else {
          displayScore();
          $(document).find('.nextButton').text('Play Again?');
          quizOver = true;
        }
      }
    } else {
      quizOver = false;
      $(document).find('.nextButton').text('Next Question');
      resetQuiz();
      displayCurrentQuestion();
      hideScore();
    }
  });
});
