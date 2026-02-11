// Create floating hearts
function createHearts() {
    const heartsContainer = document.querySelector('.hearts-background');
    const hearts = ['❤️', '💕', '💖', '💗', '💝'];
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => heart.remove(), 6000);
    }, 300);
}

// Show surprise message
function showSurprise() {
    const surpriseDiv = document.getElementById('surpriseMessage');
    surpriseDiv.classList.remove('hidden');
}

// Handle Yes button
function sayYes() {
    alert('I LOVE YOU SO MUCH! 💕💕💕');
    createConfetti();
}

// Handle No button (moves away)
function sayNo() {
    const noBtn = event.target;
    const randomX = Math.random() * 200 - 100;
    const randomY = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#d63384', '#667eea', '#ffb6d9', '#ff69b4'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.borderRadius = '50%';
        confetti.style.pointerEvents = 'none';
        confetti.style.zIndex = '9999';
        
        document.body.appendChild(confetti);
        
        const duration = Math.random() * 2 + 2;
        const keyframes = `
            @keyframes fall-${i} {
                to {
                    transform: translateY(${window.innerHeight}px) rotate(360deg);
                    opacity: 0;
                }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = keyframes;
        document.head.appendChild(style);
        
        confetti.style.animation = `fall-${i} ${duration}s linear forwards`;
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}

// Countdown timer
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    function updateCountdown() {
        const now = new Date();
        const valentine = new Date(now.getFullYear(), 1, 14); // February 14
        
        if (now > valentine) {
            valentine.setFullYear(valentine.getFullYear() + 1);
        }
        
        const diff = valentine - now;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        countdownElement.textContent = `⏰ ${days}d ${hours}h ${minutes}m ${seconds}s until Valentine's Day`;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize everything when page loads
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    startCountdown();
});
