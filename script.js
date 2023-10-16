const questions = document.querySelectorAll('.questions ')

console.log(questions)

questions.forEach(question => {
    question.addEventListener('click', function() {
        this.querySelector('.paragraph').classList.toggle('hidden');
    });
});