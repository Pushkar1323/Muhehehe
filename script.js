// Data for Typing Effect
const textToType = "Happy New Year My Love! ❤️";
const typingElement = document.getElementById("typing-text");
let typeIndex = 0;

// Data for Lyrics (Time in seconds : Lyric text)
// Bhai maine "I Wanna Be Yours" ke lyrics 17s ke hisab se set kiye hain.
// Agar timing thoda aage peeche ho, toh number change kar dena.
const lyricsData = [
    { time: 17, text: "I wanna be your vacuum cleaner..." },
    { time: 20, text: "Breathing in your dust..." },
    { time: 23.5, text: "I wanna be your Ford Cortina..." },
    { time: 26.5, text: "I will never rust..." },
    { time: 30, text: "If you like your coffee hot..." },
    { time: 33, text: "Let me be your coffee pot..." },
    { time: 36, text: "You call the shots babe..." },
    { time: 39, text: "I just wanna be yours..." },
    { time: 43, text: "Secrets I have held in my heart..." },
    { time: 46, text: "Are harder to hide than I thought..." },
    { time: 51, text: "Maybe I just wanna be yours..." },
    { time: 55, text: "I wanna be yours..." },
    { time: 58, text: "Happy New Year Cutie! ❤️" }
];

const audio = document.getElementById("audioPlayer");
const lyricsDiv = document.getElementById("lyrics");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("main-content");
const photos = document.querySelectorAll(".photo-frame img");

// 1. Overlay Click Handler
overlay.addEventListener("click", () => {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
        mainContent.style.opacity = "1";
        startExperience();
    }, 1000);
});

function startExperience() {
    // Start Audio at 17 seconds
    audio.currentTime = 17; 
    audio.play();

    // Start Typing Effect
    typeWriter();

    // Start Background Hearts
    createHearts();

    // Start Photo Slideshow
    setInterval(changePhoto, 3000); // Change photo every 3 seconds

    // Start Lyrics Sync
    audio.addEventListener("timeupdate", updateLyrics);
}

// Typing Effect Function
function typeWriter() {
    if (typeIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, 100);
    }
}

// Lyrics Sync Function
function updateLyrics() {
    let currentTime = audio.currentTime;
    
    // Find the lyric that matches current time
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime >= lyricsData[i].time && 
           (i === lyricsData.length - 1 || currentTime < lyricsData[i+1].time)) {
            
            // Only update if text is different to prevent flickering
            if (lyricsDiv.innerText !== lyricsData[i].text) {
                lyricsDiv.style.opacity = 0; // Fade out
                setTimeout(() => {
                    lyricsDiv.innerText = lyricsData[i].text;
                    lyricsDiv.style.opacity = 1; // Fade in
                }, 200);
            }
            break;
        }
    }
}

// Photo Slideshow Function
let currentPhotoIndex = 0;
function changePhoto() {
    photos[currentPhotoIndex].classList.remove("active-photo");
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photos[currentPhotoIndex].classList.add("active-photo");
}

// Create Floating Hearts Function
function createHearts() {
    const bg = document.querySelector('.background-elements');
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = Math.random() > 0.5 ? '❤️' : '✨';
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 5 + "s"; // 5-8s speed
        bg.appendChild(heart);

        // Remove heart after animation to keep DOM clean
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 500);
}
