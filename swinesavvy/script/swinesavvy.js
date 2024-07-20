document.addEventListener('DOMContentLoaded', function() {
    const quizQuestions = document.querySelectorAll('.quiz-question');
  
    quizQuestions.forEach(question => {
      const options = question.querySelectorAll('.quiz-option');
      const incorrectFeedback = question.querySelector('.feedback.incorrect');
      const correctFeedback = question.querySelector('.feedback.correct');
  
      options.forEach(option => {
        option.addEventListener('click', function() {
          const isCorrect = this.getAttribute('data-correct') === 'true';
  
          if (isCorrect) {
            correctFeedback.style.display = 'block';
            incorrectFeedback.style.display = 'none';
          } else {
            incorrectFeedback.style.display = 'block';
            correctFeedback.style.display = 'none';
          }
        });
      });
    });
  });