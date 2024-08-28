document.querySelectorAll('.box').forEach(item => {
    item.addEventListener('click', () => {
        const detailsId = 'details-' + item.id.split('-')[1];
        const details = document.getElementById(detailsId);
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
