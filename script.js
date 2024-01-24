document.addEventListener('DOMContentLoaded', function () {
    // Select all question headers
    const questionHeaders = document.querySelectorAll('.question-header');

    questionHeaders.forEach(header => {
        const plusIcon = header.querySelector('.plus-icon');
        const minusIcon = header.querySelector('.minus-icon');
        const answer = header.nextElementSibling;

        // Initially hide the answer and minus icon
        answer.style.display = 'none';
        minusIcon.style.display = 'none';

        // Add click event listener to plus icon
        plusIcon.addEventListener('click', function () {
            answer.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        });

        // Add click event listener to minus icon
        minusIcon.addEventListener('click', function () {
            answer.style.display = 'none';
            minusIcon.style.display = 'none';
            plusIcon.style.display = 'block';
        });
    });
});