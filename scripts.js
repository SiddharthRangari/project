document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    const details = document.querySelectorAll('.details');

    boxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            details.forEach(detail => {
                detail.classList.remove('active');
            });

            details[index].classList.add('active');
            details[index].scrollIntoView({ behavior: 'smooth' });
        });
    });
});
