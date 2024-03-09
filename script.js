// Sample data for song name and duration
const songs = [
    { name: "Freaks", duration: "3:45", url: "http://127.0.0.1:3000/songs/X2Download.app%20-%20Surf%20Curse%20-%20Freaks%20[Official%20Audio]%20(128%20kbps).mp3" },
    { name: "Holding Out for a Hero", duration: "4:20", url: "http://127.0.0.1:3000/songs/y2mate.com%20-%20Bonnie%20Tyler%20%20Holding%20out%20for%20a%20hero%20Lyrics%20on%20screen.mp3" },
    { name: "Dream It Possible", duration: "2:55", url: "http://127.0.0.1:3000/songs/y2mate.com%20-%20Delacey%20%20Dream%20It%20Possible%20%20lyrics%20.mp3" },
    { name: "Levitating", duration: "3:30", url: "http://127.0.0.1:3002/songs/y2mate.com%20-%20Dua%20Lipa%20%20Levitating%20Lyrics.mp3" },
    { name: "Aurora", duration: "3:15", url: "http://127.0.0.1:3002/songs/y2mate.com%20-%20K391%20%20R%C3%98RY%20%20Aurora%20Lyrics.mp3" },
    { name: "Blinding Lights", duration: "3:55", url: "http://127.0.0.1:3002/songs/y2mate.com%20-%20The%20Weeknd%20%20Blinding%20Lights%20Lyrics.mp3" }
];

let currentSongIndex = 0;
let audio = new Audio();

// Function to display song name and duration
function displaySongInfo() {
    const currentSong = songs[currentSongIndex];
    const songNameElement = document.querySelector(".songname");
    const songDurationElement = document.querySelector(".songduration");
    songNameElement.textContent = currentSong.name;
    songDurationElement.textContent = currentSong.duration;
}

// Function to play song
function playSong() {
    const currentSong = songs[currentSongIndex];
    if (!audio.src || audio.src !== currentSong.url) {
        audio.src = currentSong.url;
        audio.play();
    } else {
        audio.play();
    }
}

// Function to pause song
function pauseSong() {
    audio.pause();
}

// Function to play previous song
function playPrevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
        currentSongIndex = songs.length - 1;
    }
    displaySongInfo();
    playSong();
}

// Function to play next song
function playNextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
        currentSongIndex = 0;
    }
    displaySongInfo();
    playSong();
}

// Event listener for play/pause button
const playPauseButton = document.getElementById("playpause");
playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
// Event listener for play/pause button
const playPauseButton = document.getElementById("playpause");
playPauseButton.addEventListener("click", function() {
    if (audio.paused) {
        playSong();
        document.getElementById('playIcon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';
    } else {
        pauseSong();
        document.getElementById('playIcon').innerHTML = '<path d="M8 5v14l11-7z"/>';
    }
});

   
});

// Event listener for previous button
const prevButton = document.getElementById("prev");
prevButton.addEventListener("click", playPrevSong);

// Event listener for next button
const nextButton = document.getElementById("next");
nextButton.addEventListener("click", playNextSong);

// Event listener for when audio ends to play next song automatically
audio.addEventListener('ended', playNextSong);

// Display initial song info
displaySongInfo();
