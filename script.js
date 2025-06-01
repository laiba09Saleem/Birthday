document.addEventListener('DOMContentLoaded', function() {
    // Card elements
    const card = document.querySelector('.birthday-card');
    const cardCover = document.querySelector('.card-cover');
    const cardInside = document.querySelector('.card-inside');
    const pages = document.querySelectorAll('.card-page');
    const nextBtns = document.querySelectorAll('.next-btn');
    const celebrateBtn = document.querySelector('.celebrate-btn');
    const celebrationOverlay = document.querySelector('.celebration-overlay');
    const closeCelebration = document.querySelector('.close-celebration');
    
    let currentPage = 0;
    
    // Open card
    cardCover.addEventListener('click', function() {
        cardCover.classList.remove('active');
        card.style.transform = 'rotateY(180deg)';
        showPage(0);
    });
    
    // Next page buttons
    nextBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentPage++;
            if (currentPage < pages.length) {
                showPage(currentPage);
            }
        });
    });
    
    // Celebrate button
    celebrateBtn.addEventListener('click', function() {
        triggerCelebration();
    });
    
    // Close celebration
    closeCelebration.addEventListener('click', function() {
        celebrationOverlay.classList.remove('active');
    });
    
    // Show specific page
    function showPage(index) {
        pages.forEach(page => page.classList.remove('active'));
        pages[index].classList.add('active');
        
        // Add animations
        const pageContent = pages[index].querySelector('.page-content');
        pageContent.classList.add('animate__animated', 'animate__fadeIn');
        
        // Special animation for cake page
        if (index === 2) {
            const cake = document.querySelector('.cake-container');
            cake.classList.add('animate__animated', 'animate__pulse');
        }
    }
    
    // Trigger celebration
    function triggerCelebration() {
        // Confetti effect
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#ff6b00', '#ffffff']
        });
        
        // Show celebration overlay
        setTimeout(() => {
            celebrationOverlay.classList.add('active');
        }, 1000);
    }
});

// Light all candles
function lightCandles() {
    const candles = document.querySelectorAll('.candle');
    const celebrateBtn = document.querySelector('.celebrate-btn');
    let allLit = true;
    
    // Check if all candles are already lit
    candles.forEach(candle => {
        if (!candle.classList.contains('lit')) {
            allLit = false;
        }
    });
    
    // Toggle candles
    if (allLit) {
        // Blow out all candles
        candles.forEach(candle => {
            candle.classList.remove('lit');
        });
        celebrateBtn.classList.add('hidden');
    } else {
        // Light all candles
        candles.forEach(candle => {
            candle.classList.add('lit');
        });
        celebrateBtn.classList.remove('hidden');
        
        // Small confetti for each candle
        setTimeout(() => {
            confetti({
                particleCount: 30,
                spread: 30,
                origin: { y: 0.6 },
                colors: ['#ff6b00']
            });
        }, 300);
    }
}