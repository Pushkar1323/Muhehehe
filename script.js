// ========== LOADING FIX ========== 
(function() {
    setTimeout(function() {
        hidePreloader();
    }, 3000);
    
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
var totalPages = 9;
var musicPlaying = false;
var correctPassword = '2713';

// ========== PASSWORD CHECK ==========
function checkPassword() {
    var input = document.getElementById('passwordInput');
    var errorMsg = document.getElementById('errorMsg');
    var lockContainer = document.querySelector('.lock-container');
    
    if (input.value === correctPassword) {
        lockContainer.classList.add('success');
        errorMsg.textContent = '✓ Correct! Opening... 💕';
        errorMsg.style.color = '#4ecdc4';
        
        setTimeout(function() {
            currentPage = 3;
            showPage(currentPage);
        }, 1000);
    } else {
        errorMsg.textContent = '❌ Wrong password! Try again 💔';
        errorMsg.style.color = '#ff6b6b';
        input.value = '';
        input.style.animation = 'shake 0.5s ease';
        setTimeout(function() {
            input.style.animation = '';
        }, 500);
    }
}

// Enter key pe bhi password check ho
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && currentPage === 2) {
        checkPassword();
    }
});

// ========== FLOATING HEARTS ==========
function createFloatingHearts() {
    var container = document.getElementById('heartsBg');
    if (!container) return;
    
    var hearts = ['💕', '💖', '💗', '💓', '💝', '❤️', '🥰', '😘', '💘'];
    
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

// ========== STARS ==========
function createStars(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';
    
    for (var i = 0; i < 120; i++) {
        var star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = (Math.random() * 3 + 1) + 'px';
        star.style.height = star.style.width;
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}

// ========== BUBBLES ==========
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

// ========== FIREFLIES ==========
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
        firefly.style.animationDuration = (Math.random() * 3 + 4) + 's';
        container.appendChild(firefly);
    }
}

// ========== EMOJI RAIN ==========
function createEmojiRain() {
    var emojis = ['💕', '💖', '✨', '🎉', '💗', '🥰', '💝', '⭐', '🌟', '💫'];
    
    for (var i = 0; i < 40; i++) {
        (function(index) {
            setTimeout(function() {
                var emoji = document.createElement('span');
                emoji.className = 'emoji-rain';
                emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
                emoji.style.left = Math.random() * 100 + '%';
                emoji.style.animationDuration = (Math.random() * 2 + 3) + 's';
                document.body.appendChild(emoji);
                
                setTimeout(function() { 
                    if (emoji.parentNode) emoji.parentNode.removeChild(emoji); 
                }, 5000);
            }, index * 100);
        })(i);
    }
}

// ========== CONFETTI ==========
function createConfetti() {
    var colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96e6a1', '#ffeaa7', '#fd79a8', '#ffd700', '#a29bfe'];
    
    for (var i = 0; i < 120; i++) {
        (function(index) {
            setTimeout(function() {
                var confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
                
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                }
                
                document.body.appendChild(confetti);
                
                setTimeout(function() { 
                    if (confetti.parentNode) confetti.parentNode.removeChild(confetti); 
                }, 4000);
            }, index * 25);
        })(i);
    }
}

// ========== FIREWORKS ==========
var fireworkInterval;
function createFireworks() {
    var container = document.getElementById('fireworks');
    if (!container) return;
    
    var colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#fd79a8', '#a29bfe'];
    
    if (fireworkInterval) clearInterval(fireworkInterval);
    
    fireworkInterval = setInterval(function() {
        if (currentPage !== 7) {
            clearInterval(fireworkInterval);
            return;
        }
        
        var firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 80 + 10 + '%';
        firework.style.top = Math.random() * 50 + 10 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.boxShadow = '0 0 10px ' + firework.style.backgroundColor;
        container.appendChild(firework);
        
        setTimeout(function() { 
            if (firework.parentNode) firework.parentNode.removeChild(firework); 
        }, 1200);
    }, 500);
}

// ========== SHOW PAGE ==========
function showPage(pageNum) {
    // Pause all audio
    var bgMusic = document.getElementById('bgMusic');
    var hindiMusic = document.getElementById('hindiMusic');
    if (bgMusic) bgMusic.pause();
    if (hindiMusic) hindiMusic.pause();
    
    // Hide all pages
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }
    
    // Show current page
    var currentPageEl = document.getElementById('page' + pageNum);
    if (currentPageEl) currentPageEl.classList.add('active');
    
    // Update navigation (hide on password page)
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    if (pageNum === 2) {
        // Password page - hide navigation
        if (prevBtn) prevBtn.style.display = 'none';
        if (nextBtn) nextBtn.style.display = 'none';
    } else {
        if (prevBtn) prevBtn.style.display = pageNum > 1 && pageNum !== 3 ? 'block' : 'none';
        if (nextBtn) nextBtn.style.display = pageNum < totalPages ? 'block' : 'none';
    }
    
    // Update dots
    var dots = document.querySelectorAll('.dot');
    for (var j = 0; j < dots.length; j++) {
        if (j === pageNum - 1) {
            dots[j].classList.add('active');
        } else {
            dots[j].classList.remove('active');
        }
    }
    
    // Page specific animations
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
            animateReasons();
            createFloatingHeartsPage6();
            break;
        case 7:
            createStars('stars7');
            createConfetti();
            createFireworks();
            break;
        case 8:
            createStars('stars8');
            animateCloser();
            break;
        case 9:
            createStars('stars9');
            animateCatKiss();
            break;
    }
}

// ========== PLAY AUDIO ==========
function playAudio(id) {
    var audio = document.getElementById(id);
    if (!audio) return;
    
    audio.currentTime = 0;
    var playPromise = audio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(function() {
            var btn = document.getElementById('musicBtn');
            if (btn) {
                btn.textContent = '🔊';
                btn.classList.add('playing');
            }
            musicPlaying = true;
        }).catch(function(e) {
            console.log('Audio autoplay blocked');
        });
    }
}

// ========== NAVIGATION ==========
function startJourney() {
    nextPage();
}

function nextPage() {
    if (currentPage < totalPages) {
        // Skip going back to password page
        if (currentPage === 2) {
            return; // Can't use next on password page
        }
        currentPage++;
        showPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        // Don't go back to password page
        if (currentPage === 3) {
            return;
        }
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
    
    // Reset
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

// ========== PAGE 6 - REASONS (UPDATED - 7 ITEMS) ==========
function animateReasons() {
    var reasons = ['r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7'];
    
    for (var i = 0; i < reasons.length; i++) {
        var el = document.getElementById(reasons[i]);
        if (el) el.classList.remove('visible');
    }
    
    var delay = 300;
    for (var j = 0; j < reasons.length; j++) {
        (function(index) {
            setTimeout(function() {
                var r = document.getElementById(reasons[index]);
                if (r) r.classList.add('visible');
            }, delay + (index * 400));
        })(j);
    }
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
        heart.style.opacity = '0.4';
        container.appendChild(heart);
    }
}

// ========== PAGE 8 - COME CLOSER ==========
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

// ========== PAGE 9 - CAT KISS ==========
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
            video.play().catch(function(e) {
                console.log('Video play error');
            });
        }
        createEmojiRain();
    }, delay + (texts.length * 1500) + 500);
}

// ========== EVENT LISTENERS ==========
document.addEventListener('DOMContentLoaded', function() {
    
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    if (prevBtn) prevBtn.addEventListener('click', prevPage);
    if (nextBtn) nextBtn.addEventListener('click', nextPage);
    
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
    
    var musicBtn = document.getElementById('musicBtn');
    if (musicBtn) {
        musicBtn.addEventListener('click', function() {
            var bgMusic = document.getElementById('bgMusic');
            var hindiMusic = document.getElementById('hindiMusic');
            
            if (musicPlaying) {
                if (bgMusic) bgMusic.pause();
                if (hindiMusic) hindiMusic.pause();
                musicBtn.textContent = '🎵';
                musicBtn.classList.remove('playing');
            } else {
                if (currentPage === 4 && hindiMusic) {
                    hindiMusic.play();
                } else if (bgMusic) {
                    bgMusic.play();
                }
                musicBtn.textContent = '🔊';
                musicBtn.classList.add('playing');
            }
            musicPlaying = !musicPlaying;
        });
    }
    
    // Dot navigation (but not for password page)
    var dots = document.querySelectorAll('.dot');
    for (var i = 0; i < dots.length; i++) {
        (function(index) {
            dots[index].addEventListener('click', function() {
                // Don't allow going back to password page
                if (index === 1) return;
                // If not unlocked yet, can't skip
                if (currentPage === 2 && index > 1) return;
                
                currentPage = index + 1;
                showPage(currentPage);
            });
        })(i);
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentPage === 2) return; // No keyboard nav on password page
        
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
    var touchEndX = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    document.addEventListener('touchend', function(e) {
        if (currentPage === 2) return; // No swipe on password page
        
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                nextPage();
            } else {
                prevPage();
            }
        }
    }, { passive: true });
});

// Make functions global
window.startJourney = startJourney;
window.nextPage = nextPage;
window.prevPage = prevPage;
window.checkPassword = checkPassword;
