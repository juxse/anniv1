document.getElementById('revealMessageButton').addEventListener('click', function() {
    var message = document.getElementById('secretMessage');
    if (message.classList.contains('hidden')) {
        message.classList.remove('hidden');
    } else {
        message.classList.add('hidden');
    }
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heart.innerHTML = '❤️';
    document.querySelector('.heart-container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// Play background music on page load
document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');
    audio.play();
});
