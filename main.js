const phrases = document.querySelectorAll('.phrase');
let current = 0;

function showPhrase(idx) {
  phrases.forEach((p, i) => {
    p.style.opacity = i === idx ? '1' : '0';
  });
}

function nextPhrase() {
  current = (current + 1) % phrases.length;
  showPhrase(current);
}

setInterval(nextPhrase, 2500); // Cambia cada 2.5 segundos
showPhrase(current);
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('fullscreenchange', function() {
    video.style.objectFit = "contain";
    video.style.backgroundColor = "#000";
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll('.video-card video');
  videos.forEach(video => {
    video.addEventListener('play', function () {
      videos.forEach(v => {
        if (v !== video && !v.paused) {
          v.pause();
        }
      });
    });
  });
});

function showPhrase(idx) {
  phrases.forEach((p, i) => {
    p.style.opacity = i === idx ? '1' : '0';
  });
}

function nextPhrase() {
  current = (current + 1) % phrases.length;
  showPhrase(current);
}

setInterval(nextPhrase, 2500); // Cambia cada 2.5 segundos
showPhrase(current);