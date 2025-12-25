let currentPage = 1;
const totalPages = 8;
let musicPlaying = false;

// Preloader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        createFloatingHearts();
        createStars('stars1');
    }, 2500);
});

// Create Floating Hearts
function createFloatingHearts() {
    const container = document.getElementById('heartsBg');
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🥰', '😘'];
    
    for (let i = 0; i < 25; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

// Create Stars
function createStars(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(star);
    }
}

// Emoji Rain
function createEmojiRain() {
    const emojis = ['💕', '💖', '✨', '🎉', '💗', '🥰', '💝', '⭐', '🌟'];
    
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.className = 'emoji-rain';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (Math.random() * 2 + 3) + 's';
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 5000);
        }, i * 100);
    }
}

// Confetti
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#ffeaa7', '#dfe6e9', '#fd79a8'];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// Show Page
function showPage(pageNum) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('page' + pageNum).classList.add('active');
    
    document.getElementById('prevBtn').style.display = pageNum > 1 ? 'block' : 'none';
    document.getElementById('nextBtn').style.display = pageNum < totalPages ? 'block' : 'none';
    
    // Page specific animations
    switch(pageNum) {
        case 2:
            createStars('stars2');
            animateCloser();
            break;
        case 3:
            createStars('stars3');
            animateWannaBeYours();
            break;
        case 4:
            createStars('stars4');
            animateHindiLyrics();
            break;
        case 5:
            animateGallery();
            createEmojiRain();
            break;
        case 6:
            animateReasons();
            break;
        case 7:
            createStars('stars7');
            createConfetti();
            break;
        case 8:
            createStars('stars8');
            animateCatKiss();
            break;
    }
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

// Page 2 - Come Closer Animation
function animateCloser() {
    const texts = ['closer1', 'closer2', 'closer3', 'closer4', 'closer5'];
    let delay = 0;
    
    texts.forEach((id, index) => {
        setTimeout(() => {
            texts.forEach(t => document.getElementById(t).classList.remove('show'));
            const el = document.getElementById(id);
            el.classList.add('show');
            el.style.fontSize = (2.5 + index * 0.5) + 'rem';
        }, delay);
        delay += 1500;
    });
}

// Page 3 - Wanna Be Yours with Photos
function animateWannaBeYours() {
    const items = [
        { text: 'wanna1', photo: 'photo1' },
        { text: 'wanna2', photo: 'photo2' },
        { text: 'wanna3', photo: 'photo3' },
        { text: 'wanna4', photo: 'photo4' }
    ];
    
    // Reset all
    items.forEach(item => {
        document.getElementById(item.text).classList.remove('visible');
        document.getElementById(item.photo).classList.remove('visible');
    });
    
    let delay = 0;
    items.forEach((item, index) => {
        // Show text
        setTimeout(() => {
            document.getElementById(item.text).classList.add('visible');
        }, delay);
        delay += 800;
        
        // Show photo
        setTimeout(() => {
            document.getElementById(item.photo).classList.add('visible');
        }, delay);
        delay += 1500;
    });
}

// Page 4 - Hindi Lyrics Animation
function animateHindiLyrics() {
    const lines = ['hl1', 'hl2', 'hl3', 'hl4', 'hl5', 'hl6', 'hl7'];
    
    lines.forEach(id => document.getElementById(id).classList.remove('visible'));
    
    let delay = 0;
    lines.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).classList.add('visible');
        }, delay);
        delay += 1200;
    });
}

// Page 5 - Gallery Animation
function animateGallery() {
    const cards = document.querySelectorAll('.photo-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 300);
    });
}

// Page 6 - Reasons Animation
function animateReasons() {
    const reasons = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
    
    reasons.forEach(id => document.getElementById(id).classList.remove('visible'));
    
    let delay = 0;
    reasons.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).classList.add('visible');
        }, delay);
        delay += 500;
    });
}

// Page 8 - Cat Kiss Animation
function animateCatKiss() {
    const texts = ['cat1', 'cat2', 'cat3', 'cat4', 'cat5'];
    
    texts.forEach(id => document.getElementById(id).classList.remove('show'));
    document.getElementById('catVideo').classList.remove('show');
    
    let delay = 0;
    texts.forEach((id, index) => {
        setTimeout(() => {
            texts.forEach(t => document.getElementById(t).classList.remove('show'));
            const el = document.getElementById(id);
            el.classList.add('show');
            el.style.fontSize = (2 + index * 0.3) + 'rem';
        }, delay);
        delay += 2000;
    });
    
    // Show cat video
    setTimeout(() => {
        texts.forEach(id => document.getElementById(id).classList.remove('show'));
        document.getElementById('catVideo').classList.add('show');
        createEmojiRain();
    }, delay);
}

// Music Control
document.getElementById('musicBtn').addEventListener('click', () => {
    const audio = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');
    
    if (musicPlaying) {
        audio.pause();
        btn.textContent = '🎵';
    } else {
        audio.play();
        btn.textContent = '🔊';
    }
    musicPlaying = !musicPlaying;
});
