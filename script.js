// Variables
const startBtn = document.getElementById('play-btn');
const overlay = document.getElementById('start-overlay');
const mainSite = document.getElementById('main-site');
const audio = document.getElementById('audio-player');
const lyrics = document.querySelectorAll('.lyric-line');

// 1. Start Journey
startBtn.addEventListener('click', () => {
    // Attempt to play audio
    audio.play().then(() => {
        console.log("Audio playing");
    }).catch(err => {
        console.log("Audio autoplay blocked", err);
        alert("Please tap anywhere to play music!");
    });

    // Fade out overlay
    overlay.style.opacity = '0';
    
    // Show Main Site after 1 second
    setTimeout(() => {
        overlay.style.display = 'none';
        mainSite.style.display = 'block';
        setTimeout(() => mainSite.style.opacity = '1', 100);
        
        // Start initial fireworks
        launchConfetti();
    }, 1000);
});

// 2. Lyrics Sync Logic (The Best Part)
audio.addEventListener('timeupdate', () => {
    let currentTime = audio.currentTime;

    lyrics.forEach(line => {
        let lineTime = line.getAttribute('data-time');
        
        if (currentTime >= lineTime) {
            // Remove active from all
            lyrics.forEach(l => l.classList.remove('active'));
            
            // Add active to current
            line.classList.add('active');
            
            // Auto-Scroll to keep lyric in center (Smooth)
            line.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
});

// 3. Fireworks Effect
function launchConfetti() {
    var duration = 3 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
}

// Trigger fireworks again at the end
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        launchConfetti();
    }
};
