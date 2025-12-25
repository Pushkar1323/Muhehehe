let currentPage = 1;
const totalPages = 8;
let musicPlaying = false;

// ========== PRELOADER ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('preloader').classList.add('hidden');
        createFloatingHearts();
        createStars('stars1');
        createShootingStars();
    }, 3000);
});

// ========== CURSOR TRAIL ==========
document.addEventListener('mousemove', (e) => {
    const trail = document.getElementById('cursorTrail');
    if (trail) {
        trail.style.left = e.clientX - 10 + 'px';
        trail.style.top = e.clientY - 10 + 'px';
    }
});

// ========== FLOATING HEARTS ==========
function createFloatingHearts() {
    const container = document.getElementById('heartsBg');
    if (!container) return;
    
    const hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🥰', '😘', '💘', '💞'];
    
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.animationDelay = Math.random() * 6 + 's';
        container.appendChild(heart);
    }
}

// ========== STARS ==========
function createStars(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 200; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        star.style.animationDuration = (Math.random() * 2 + 1) + 's';
        container.appendChild(star);
    }
}

// ========== SHOOTING STARS ==========
function createShootingStars() {
    setInterval(() => {
        const container = document.getElementById('shootingStars1');
        if (!container || currentPage !== 1) return;
        
        const star = document.createElement('div');
        star.className = 'shooting-star';
        star.style.left = Math.random() * 50 + '%';
        star.style.top = Math.random() * 30 + '%';
        container.appendChild(star);
        
        setTimeout(() => star.remove(), 2000);
    }, 3000);
}

// ========== BUBBLES ==========
function createBubbles() {
    const container = document.getElementById('bubbles3');
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = (Math.random() * 30 + 10) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(bubble);
    }
}

// ========== FIREFLIES ==========
function createFireflies() {
    const container = document.getElementById('fireflies4');
    if (!container) return;
    container.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
        const firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animationDuration = (Math.random() * 4 + 4) + 's';
        firefly.style.animationDelay = Math.random() * 4 + 's';
        container.appendChild(firefly);
    }
}

// ========== EMOJI RAIN ==========
function createEmojiRain() {
    const emojis = ['💕', '💖', '✨', '🎉', '💗', '🥰', '💝', '⭐', '🌟', '💫', '🎊'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const emoji = document.createElement('span');
            emoji.className = 'emoji-rain';
            emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            emoji.style.left = Math.random() * 100 + '%';
            emoji.style.animationDuration = (Math.random() * 3 + 3) + 's';
            document.body.appendChild(emoji);
            
            setTimeout(() => emoji.remove(), 6000);
        }, i * 80);
    }
}

// ========== CONFETTI ==========
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#ffeaa7', '#dfe6e9', '#fd79a8', '#ffd700', '#a29bfe'];
    const shapes = ['square', 'circle'];
    
    for (let i = 0; i < 200; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            
            if (shapes[Math.floor(Math.random() * shapes.length)] === 'circle') {
                confetti.style.borderRadius = '50%';
            }
            
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 25);
    }
}

// ========== FIREWORKS ==========
function createFireworks() {
    const container = document.getElementById('fireworks');
    if (!container) return;
    
    const colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#a29bfe', '#fd79a8'];
    
    setInterval(() => {
        if (currentPage !== 7) return;
        
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 80 + 10 + '%';
        firework.style.top = Math.random() * 50 + 10 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.boxShadow = `0 0 20px ${firework.style.backgroundColor}`;
        container.appendChild(firework);
        
        setTimeout(() => firework.remove(), 1000);
    }, 500);
}

// ========== SHOW PAGE ==========
function showPage(pageNum) {
    // Stop all audio when changing pages
    document.getElementById('bgMusic').pause();
    document.getElementById('hindiMusic').pause();
    
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById('page' + pageNum).classList.add('active');
    
    // Update navigation
    document.getElementById('prevBtn').style.display = pageNum > 1 ? 'block' : 'none';
    document.getElementById('nextBtn').style.display = pageNum < totalPages ? 'block' : 'none';
    
    // Update dots
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === pageNum - 1);
    });
    
    // Page specific animations
    switch(pageNum) {
        case 2:
            createStars('stars2');
            animateCloser();
            break;
        case 3:
            createStars('stars3');
            createBubbles();
            animateWannaBeYours();
            playMusic('bgMusic');
            break;
        case 4:
            createStars('stars4');
            createFireflies();
            animateHindiLyrics();
            playMusic('hindiMusic');
            break;
        case 5:
            animateGallery();
            createEmojiRain();
            break;
        case 6:
            animateReasons();
            createHeartsPage6();
            break;
        case 7:
            createStars('stars7');
            createConfetti();
            createFireworks();
            break;
        case 8:
            createStars('stars8');
            animateCatKiss();
            break;
    }
}

// ========== PLAY MUSIC ==========
function playMusic(audioId) {
    const audio = document.getElementById(audioId);
    if (audio) {
        audio.currentTime = 0;
        audio.play().catch(e => console.log('Audio play failed:', e));
        document.getElementById('musicBtn').textContent = '🔊';
        document.getElementById('musicBtn').classList.add('playing');
        musicPlaying = true;
    }
}

// ========== OPEN SURPRISE ==========
function openSurprise() {
    nextPage();
    // Try to play music on user interaction
    const audio = document.getElementById('bgMusic');
    audio.play().catch(e => console.log('Audio autoplay blocked'));
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

// ========== PAGE 2 - COME CLOSER ==========
function animateCloser() {
    const texts = ['closer1', 'closer2', 'closer3', 'closer4', 'closer5'];
    let delay = 0;
    
    // Reset all
    texts.forEach(id => {
        const el = document.getElementById(id);
        el.classList.remove('show');
        el.style.fontSize = '3rem';
    });
    
    texts.forEach((id, index) => {
        setTimeout(() => {
            texts.forEach(t => document.getElementById(t).classList.remove('show'));
            const el = document.getElementById(id);
            el.classList.add('show');
            el.style.fontSize = (2.5 + index * 0.6) + 'rem';
        }, delay);
        delay += 1800;
    });
    
    // Auto go to next page after animation
    setTimeout(() => {
        if (currentPage === 2) nextPage();
    }, delay + 1500);
}

// ========== PAGE 3 - WANNA BE YOURS ==========
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
    
    let delay = 500;
    items.forEach((item, index) => {
        setTimeout(() => {
            document.getElementById(item.text).classList.add('visible');
        }, delay);
        delay += 1000;
        
        setTimeout(() => {
            document.getElementById(item.photo).classList.add('visible');
        }, delay);
        delay += 2000;
    });
}

// ========== PAGE 4 - HINDI LYRICS ==========
function animateHindiLyrics() {
    const lines = ['hl1', 'hl2', 'hl3', 'hl4', 'hl5', 'hl6', 'hl7'];
    
    lines.forEach(id => document.getElementById(id).classList.remove('visible'));
    
    let delay = 500;
    lines.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).classList.add('visible');
        }, delay);
        delay += 1500;
    });
}

// ========== PAGE 5 - GALLERY ==========
function animateGallery() {
    const cards = document.querySelectorAll('.photo-card');
    cards.forEach((card, index) => {
        card.classList.remove('visible');
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 400 + 300);
    });
}

// ========== PAGE 6 - REASONS ==========
function animateReasons() {
    const reasons = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
    
    reasons.forEach(id => document.getElementById(id).classList.remove('visible'));
    
    let delay = 300;
    reasons.forEach((id, index) => {
        setTimeout(() => {
            document.getElementById(id).classList.add('visible');
        }, delay);
        delay += 600;
    });
}

function createHeartsPage6() {
    const container = document.getElementById('heartsPage6');
    if (!container) return;
    container.innerHTML = '';
    
    const hearts = ['💕', '💖', '💗', '❤️'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        heart.style.opacity = '0.3';
        container.appendChild(heart);
    }
}

// ========== PAGE 8 - CAT KISS (FIXED) ==========
function animateCatKiss() {
    const texts = ['kiss1', 'kiss2', 'kiss3'];
    const intro = document.getElementById('kissIntro');
    const videoWrapper = document.getElementById('videoWrapper');
    const video = document.getElementById('catVideo');
    
    // Reset
    intro.style.display = 'block';
    videoWrapper.classList.remove('show');
    texts.forEach(id => {
        document.getElementById(id).classList.remove('show');
    });
    
    let delay = 0;
    texts.forEach((id, index) => {
        setTimeout(() => {
            texts.forEach(t => document.getElementById(t).classList.remove('show'));
            document.getElementById(id).classList.add('show');
        }, delay);
        delay += 2000;
    });
    
    // Show video with sound
    setTimeout(() => {
        intro.style.display = 'none';
        videoWrapper.classList.add('show');
        video.muted = false; // SOUND ON
        video.currentTime = 0;
        video.play().catch(e => console.log('Video play failed:', e));
        createEmojiRain();
    }, delay + 500);
}

// ========== FULLSCREEN VIDEO ==========
document.getElementById('fullscreenBtn').addEventListener('click', () => {
    const video = document.getElementById('catVideo');
    
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
});

// ========== REPLAY VIDEO ==========
document.getElementById('replayBtn').addEventListener('click', () => {
    const video = document.getElementById('catVideo');
    video.currentTime = 0;
    video.play();
});

// ========== MUSIC CONTROL ==========
document.getElementById('musicBtn').addEventListener('click', () => {
    const bgMusic = document.getElementById('bgMusic');
    const hindiMusic = document.getElementById('hindiMusic');
    const btn = document.getElementById('musicBtn');
    
    if (musicPlaying) {
        bgMusic.pause();
        hindiMusic.pause();
        btn.textContent = '🎵';
        btn.classList.remove('playing');
    } else {
        if (currentPage === 3) {
            bgMusic.play();
        } else if (currentPage === 4) {
            hindiMusic.play();
        } else {
            bgMusic.play();
        }
        btn.textContent = '🔊';
        btn.classList.add('playing');
    }
    musicPlaying = !musicPlaying;
});

// ========== DOT NAVIGATION ==========
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentPage = index + 1;
        showPage(currentPage);
    });
});

// ========== KEYBOARD NAVIGATION ==========
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight' || e.key === ' ') {
        nextPage();
    } else if (e.key === 'ArrowLeft') {
        prevPage();
    }
});

// ========== SWIPE NAVIGATION (MOBILE) ==========
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) {
            nextPage(); // Swipe left = next
        } else {
            prevPage(); // Swipe right = prev
        }
    }
}
