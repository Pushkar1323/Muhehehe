const config = {
    songStart: 17, // Starts at 17 seconds
    message: "Meeting you was the highlight of my 2024. I can't wait to spend every second of 2025 with my favorite person. ❤️",
    lyrics: [
        { t: 17, text: "I wanna be your vacuum cleaner..." },
        { t: 20, text: "Breathing in your dust..." },
        { t: 23, text: "I wanna be your Ford Cortina..." },
        { t: 26, text: "I will never rust..." },
        { t: 30, text: "If you like your coffee hot..." },
        { t: 33, text: "Let me be your coffee pot..." },
        { t: 36, text: "You call the shots babe..." },
        { t: 39, text: "I just wanna be yours..." },
        { t: 43, text: "Secrets I have held in my heart..." },
        { t: 46, text: "Are harder to hide than I thought..." },
        { t: 51, text: "Maybe I just wanna be yours..." },
        { t: 55, text: "I wanna be yours..." },
        { t: 60, text: "Happy New Year, Cutie! ❤️" }
    ]
};

const audio = document.getElementById('mainAudio');
const typingEl = document.getElementById('typing-text');
const lyricsEl = document.getElementById('lyrics-line');

function switchPage(current, next) {
    const currScreen = document.getElementById(`page${current}`);
    const nextScreen = document.getElementById(`page${next}`);
    
    currScreen.classList.remove('active');
    setTimeout(() => {
        currScreen.style.display = 'none';
        nextScreen.style.display = 'flex';
        setTimeout(() => nextScreen.classList.add('active'), 50);
    }, 800);
}

// Flow 1 -> 2
function goToPage2() {
    switchPage(1, 2);
    setTimeout(startTyping, 1000);
}

function startTyping() {
    let i = 0;
    function type() {
        if (i < config.message.length) {
            typingEl.innerHTML += config.message.charAt(i);
            i++;
            setTimeout(type, 50);
        } else {
            document.getElementById('nextBtn').classList.add('show');
        }
    }
    type();
}

// Flow 2 -> 3 -> 4
function goToPage3() {
    switchPage(2, 3);
    setTimeout(() => {
        switchPage(3, 4);
        startFinalSurprise();
    }, 3000);
}

function startFinalSurprise() {
    audio.currentTime = config.songStart;
    audio.play();

    // Photo Slider
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 3500);

    // Lyrics Sync
    audio.addEventListener('timeupdate', () => {
        const current = audio.currentTime;
        const line = config.lyrics.findLast(l => current >= l.t);
        if (line && lyricsEl.innerText !== line.text) {
            lyricsEl.innerText = line.text;
            lyricsEl.classList.remove('pop-up');
            void lyricsEl.offsetWidth; // Trigger reflow
            lyricsEl.classList.add('pop-up');
        }
    });

    // Floating Hearts
    setInterval(createHeart, 400);
}

function createHeart() {
    const container = document.getElementById('hearts-container');
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = ['❤️', '✨', '💖', '🌸'][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.bottom = '-5vh';
    heart.style.fontSize = (Math.random() * 15 + 15) + 'px';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
}
