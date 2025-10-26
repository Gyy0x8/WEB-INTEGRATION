document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const focusedCard = document.querySelector('.project-card:focus');
            if (focusedCard) {
                focusedCard.click();
            }
        }
    });
});