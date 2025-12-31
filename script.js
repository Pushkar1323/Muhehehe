// ========== LOADING FIX ========== 
(function() {
    setTimeout(hidePreloader, 3000);
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(hidePreloader, 2000);
        });
    } else {
        setTimeout(hidePreloader, 2000);
    }
})();

function hidePreloader() {
    var preloader = document.getElementById('preloader');
    if (preloader && !preloader.classList.contains('hidden')) {
        preloader.classList.add('hidden');
        initPage();
    }
}

function initPage() {
    createFloatingHearts();
    createStars('stars1');
}

// ========== VARIABLES ==========
var currentPage = 1;
var totalPages = 13;
var musicPlaying = false;
var correctPassword = '2713';

// ========== PASSWORD CHECK ==========
function checkPassword() {
    var input = document.getElementById('passwordInput');
    var errorMsg = document.getElementById('errorMsg');
    
    if (input.value === correctPassword) {
        errorMsg.textContent = '✓ Correct! 💕';
        errorMsg.style.color = '#4ecdc4';
        setTimeout(function() {
            currentPage = 3;
            showPage(currentPage);
        }, 1000);
    } else {
        errorMsg.textContent = '❌ Wrong password!';
        input.value = '';
        input.style.animation = 'shake 0.5s ease';
        setTimeout(function() { input.style.animation = ''; }, 500);
    }
}

document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && currentPage === 2) checkPassword();
});

// ========== SECRET REVEAL ==========
function revealSecret() {
    var front = document.getElementById('secretFront');
    var back = document.getElementById('secretBack');
    var footer = document.getElementById('secretFooter');
    
    front.classList.add('hide');
    back.classList.add('show');
    footer.classList.add('show');
}

// ========== VIRTUAL HUG (WITH GIF) ==========
function sendHug() {
    var hugBox = document.getElementById('hugBox');
    var hugGifContainer = document.getElementById('hugGifContainer');
    var hugAgainBtn = document.getElementById('hugAgainBtn');
    
    hugBox.classList.add('hide');
    hugGifContainer.classList.add('show');
    hugAgainBtn.classList.add('show');
}

function resetHug() {
    var hugBox = document.getElementById('hugBox');
    var hugGifContainer = document.getElementById('hugGifContainer');
    var hugAgainBtn = document.getElementById('hugAgainBtn');
    
    hugBox.classList.remove('hide');
    hugGifContainer.classList.remove('show');
    hugAgainBtn.classList.remove('show');
}

// ========== CREATE ELEMENTS ==========
function createFloatingHearts() {
    var container = document.getElementById('heartsBg');
    if (!container) return;
    var hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🥰', '😘'];
    for (var i = 0; i < 25; i++) {
        var heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 15 + 18) + 'px';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

function createStars(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < 100; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

function createBubbles() {
    var container = document.getElementById('bubbles3');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < 15; i++) {
        var bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.width = (Math.random() * 40 + 15) + 'px';
        bubble.style.height = bubble.style.width;
        bubble.style.animationDuration = (Math.random() * 5 + 5) + 's';
        bubble.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(bubble);
    }
}

function createFireflies() {
    var container = document.getElementById('fireflies4');
    if (!container) return;
    container.innerHTML = '';
    for (var i = 0; i < 20; i++) {
        var firefly = document.createElement('div');
        firefly.className = 'firefly';
        firefly.style.left = Math.random() * 100 + '%';
        firefly.style.top = Math.random() * 100 + '%';
        firefly.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(firefly);
    }
}

function createEmojiRain() {
    var emojis = ['💕', '💖', '✨', '🎉', '💗', '🥰', '💝', '⭐'];
    for (var i = 0; i < 40; i++) {
        (function(index) {
            setTimeout(function() {
                var emoji = document.createElement('span');
                emoji.className = 'emoji-rain';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = Math.random() * 100 + '%';
                document.body.appendChild(emoji);
                setTimeout(function() { if (emoji.parentNode) emoji.remove(); }, 5000);
            }, index * 100);
        })(i);
    }
}

function createConfetti() {
    var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#ffeaa7', '#fd79a8', '#ffd700'];
    for (var i = 0; i < 100; i++) {
        (function(index) {
            setTimeout(function() {
                var confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                document.body.appendChild(confetti);
                setTimeout(function() { if (confetti.parentNode) confetti.remove(); }, 4000);
            }, index * 25);
        })(i);
    }
}

var fireworkInterval;
function createFireworks() {
    var container = document.getElementById('fireworks');
    if (!container) return;
    var colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#fd79a8'];
    if (fireworkInterval) clearInterval(fireworkInterval);
    fireworkInterval = setInterval(function() {
        if (currentPage !== 11) { clearInterval(fireworkInterval); return; }
        var firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 80 + 10 + '%';
        firework.style.top = Math.random() * 50 + 10 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(firework);
        setTimeout(function() { if (firework.parentNode) firework.remove(); }, 1200);
    }, 500);
}

function createFloatingHeartsPage6() {
    var container = document.getElementById('heartsPage6');
    if (!container) return;
    container.innerHTML = '';
    var hearts = ['💕', '💖', '💗', '❤️'];
    for (var i = 0; i < 15; i++) {
        var heart = document.createElement('span');
        heart.className = 'floating-heart';
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 4 + 4) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
    }
}

// ========== SHOW PAGE ==========
function showPage(pageNum) {
    // Pause all audio
    var audios = ['bgMusic', 'hindiMusic', 'balloonMusic'];
    audios.forEach(function(id) {
        var audio = document.getElementById(id);
        if (audio) audio.pause();
    });
    
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) pages[i].classList.remove('active');
    
    // Show current page
    var currentPageEl = document.getElementById('page' + pageNum);
    if (currentPageEl) currentPageEl.classList.add('active');
    
    // Navigation
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (pageNum === 2) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = pageNum > 1 && pageNum !== 3 ? 'block' : 'none';
        nextBtn.style.display = pageNum < totalPages ? 'block' : 'none';
    }
    
    // Dots
    var dots = document.querySelectorAll('.dot');
    for (var j = 0; j < dots.length; j++) {
        dots[j].classList.toggle('active', j === pageNum - 1);
    }
    
    // Page specific
    switch(pageNum) {
        case 2:
            createStars('stars2');
            document.getElementById('passwordInput').focus();
            break;
        case 3:
            createStars('stars3');
            createBubbles();
            animateWannaBeYours();
            playAudio('bgMusic');
            break;
        case 4:
            createStars('stars4');
            createFireflies();
            animateHindiLyrics();
            playAudio('hindiMusic');
            break;
        case 5:
            animateGallery();
            createEmojiRain();
            break;
        case 6:
            createStars('stars6');
            createFloatingHeartsPage6();
            break;
        case 7:
            createStars('stars7');
            break;
        case 8:
            createStars('stars8');
            animateLanguages();
            break;
        case 9:
            createStars('stars9');
            resetHug();
            break;
        case 10:
            createStars('stars10');
            playAudio('balloonMusic');
            break;
        case 11:
            createStars('stars11');
            createConfetti();
            createFireworks();
            break;
        case 12:
            createStars('stars12');
            animateCloser();
            break;
        case 13:
            createStars('stars13');
            animateCatKiss();
            break;
    }
}

// ========== PLAY AUDIO ==========
function playAudio(id) {
    var audio = document.getElementById(id);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().then(function() {
        var btn = document.getElementById('musicBtn');
        btn.textContent = '🔊';
        btn.classList.add('playing');
        musicPlaying = true;
    }).catch(function() {});
}

// ========== NAVIGATION ==========
function startJourney() { 
    nextPage(); 
}

function nextPage() {
    if (currentPage < totalPages && currentPage !== 2) {
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1 && currentPage !== 3) {
        currentPage--;
        showPage(currentPage);
    }
}

// ========== PAGE 3 - WANNA BE YOURS ==========
function animateWannaBeYours() {
    var items = [
        { text: 'wanna1', photo: 'photo1' },
        { text: 'wanna2', photo: 'photo2' },
        { text: 'wanna3', photo: 'photo3' },
        { text: 'wanna4', photo: 'photo4' }
    ];
    
    for (var i = 0; i < items.length; i++) {
        var textEl = document.getElementById(items[i].text);
        var photoEl = document.getElementById(items[i].photo);
        if (textEl) textEl.classList.remove('visible');
        if (photoEl) photoEl.classList.remove('visible');
    }
    
    var delay = 500;
    for (var j = 0; j < items.length; j++) {
        (function(index) {
            setTimeout(function() {
                var t = document.getElementById(items[index].text);
                if (t) t.classList.add('visible');
            }, delay + (index * 2600));
            
            setTimeout(function() {
                var p = document.getElementById(items[index].photo);
                if (p) p.classList.add('visible');
            }, delay + 800 + (index * 2600));
        })(j);
    }
}

// ========== PAGE 4 - HINDI LYRICS ==========
function animateHindiLyrics() {
    var lines = ['hl1', 'hl2', 'hl3', 'hl4', 'hl5', 'hl6', 'hl7'];
    
    for (var i = 0; i < lines.length; i++) {
        var el = document.getElementById(lines[i]);
        if (el) el.classList.remove('visible');
    }
    
    var delay = 500;
    for (var j = 0; j < lines.length; j++) {
        (function(index) {
            setTimeout(function() {
                var line = document.getElementById(lines[index]);
                if (line) line.classList.add('visible');
            }, delay + (index * 1200));
        })(j);
    }
}

// ========== PAGE 5 - GALLERY ==========
function animateGallery() {
    var cards = document.querySelectorAll('.photo-card');
    
    for (var i = 0; i < cards.length; i++) {
        cards[i].classList.remove('visible');
    }
    
    for (var j = 0; j < cards.length; j++) {
        (function(index) {
            setTimeout(function() {
                cards[index].classList.add('visible');
            }, 200 + (index * 300));
        })(j);
    }
}

// ========== PAGE 8 - LANGUAGES ==========
function animateLanguages() {
    var langs = [];
    for (var i = 1; i <= 10; i++) {
        langs.push('lang' + i);
    }
    
    for (var i = 0; i < langs.length; i++) {
        var el = document.getElementById(langs[i]);
        if (el) el.classList.remove('visible');
    }
    
    var delay = 300;
    for (var j = 0; j < langs.length; j++) {
        (function(index) {
            setTimeout(function() {
                var lang = document.getElementById(langs[index]);
                if (lang) lang.classList.add('visible');
            }, delay + (index * 400));
        })(j);
    }
}

// ========== PAGE 12 - COME CLOSER ==========
function animateCloser() {
    var texts = ['closer1', 'closer2', 'closer3', 'closer4', 'closer5'];
    
    for (var i = 0; i < texts.length; i++) {
        var el = document.getElementById(texts[i]);
        if (el) {
            el.classList.remove('show');
            el.style.fontSize = '3rem';
        }
    }
    
    var delay = 500;
    for (var j = 0; j < texts.length; j++) {
        (function(index) {
            setTimeout(function() {
                for (var k = 0; k < texts.length; k++) {
                    var hideEl = document.getElementById(texts[k]);
                    if (hideEl) hideEl.classList.remove('show');
                }
                var showEl = document.getElementById(texts[index]);
                if (showEl) {
                    showEl.classList.add('show');
                    showEl.style.fontSize = (2.5 + index * 0.5) + 'rem';
                }
            }, delay + (index * 1500));
        })(j);
    }
}

// ========== PAGE 13 - CAT KISS ==========
function animateCatKiss() {
    var texts = ['kiss1', 'kiss2', 'kiss3'];
    var intro = document.getElementById('kissIntro');
    var videoWrapper = document.getElementById('videoWrapper');
    var video = document.getElementById('catVideo');
    
    if (intro) intro.style.display = 'block';
    if (videoWrapper) videoWrapper.classList.remove('show');
    for (var i = 0; i < texts.length; i++) {
        var el = document.getElementById(texts[i]);
        if (el) el.classList.remove('show');
    }
    
    var delay = 500;
    for (var j = 0; j < texts.length; j++) {
        (function(index) {
            setTimeout(function() {
                for (var k = 0; k < texts.length; k++) {
                    var hideEl = document.getElementById(texts[k]);
                    if (hideEl) hideEl.classList.remove('show');
                }
                var showEl = document.getElementById(texts[index]);
                if (showEl) showEl.classList.add('show');
            }, delay + (index * 1500));
        })(j);
    }
    
    setTimeout(function() {
        if (intro) intro.style.display = 'none';
        if (videoWrapper) videoWrapper.classList.add('show');
        if (video) {
            video.muted = false;
            video.currentTime = 0;
            video.play().catch(function() {});
        }
        createEmojiRain();
    }, delay + (texts.length * 1500) + 500);
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation buttons
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.addEventListener('click', prevPage);
    if (nextBtn) nextBtn.addEventListener('click', nextPage);
    
    // Fullscreen button
    var fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', function() {
            var video = document.getElementById('catVideo');
            if (!video) return;
            
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.webkitRequestFullscreen) {
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) {
                video.msRequestFullscreen();
            } else if (video.webkitEnterFullscreen) {
                video.webkitEnterFullscreen();
            }
        });
    }
    
    // Replay button
    var replayBtn = document.getElementById('replayBtn');
    if (replayBtn) {
        replayBtn.addEventListener('click', function() {
            var video = document.getElementById('catVideo');
            if (video) {
                video.currentTime = 0;
                video.play();
            }
        });
    }
    
    // Music button
    var musicBtn = document.getElementById('musicBtn');
    if (musicBtn) {
        musicBtn.addEventListener('click', function() {
            var bgMusic = document.getElementById('bgMusic');
            var hindiMusic = document.getElementById('hindiMusic');
            var balloonMusic = document.getElementById('balloonMusic');
            
            if (musicPlaying) {
                if (bgMusic) bgMusic.pause();
                if (hindiMusic) hindiMusic.pause();
                if (balloonMusic) balloonMusic.pause();
                musicBtn.textContent = '🎵';
                musicBtn.classList.remove('playing');
            } else {
                if (currentPage === 4 && hindiMusic) {
                    hindiMusic.play();
                } else if (currentPage === 10 && balloonMusic) {
                    balloonMusic.play();
                } else if (bgMusic) {
                    bgMusic.play();
                }
                musicBtn.textContent = '🔊';
                musicBtn.classList.add('playing');
            }
            musicPlaying = !musicPlaying;
        });
    }
    
    // Dot navigation
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
        (function(index) {
            dots[index].addEventListener('click', function() {
                if (index === 1) return;
                if (currentPage === 2 && index > 1) return;
                currentPage = index + 1;
                showPage(currentPage);
            });
        })(i);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentPage === 2) return;
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextPage();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevPage();
        }
    });
    
    // Swipe navigation
    var touchStartX = 0;
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (currentPage === 2) return;
        var touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextPage();
            else prevPage();
        }
    }, { passive: true });
});

// Global functions
window.startJourney = startJourney;
window.nextPage = nextPage;
window.prevPage = prevPage;
window.checkPassword = checkPassword;
window.revealSecret = revealSecret;
window.sendHug = sendHug;
window.resetHug = resetHug;
