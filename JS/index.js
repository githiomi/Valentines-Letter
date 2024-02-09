// Scroll Reveal
const scroll_reveal = ScrollReveal({
    reset: true,
    distance: '500px',
    duration: 2500,
    delay: 50
});

scroll_reveal.reveal('.name', { origin: 'top' });
scroll_reveal.reveal('.gif', { origin: 'left' });
scroll_reveal.reveal('.question', { origin: 'right' });
scroll_reveal.reveal('.buttons', { origin: 'bottom' });

// Buttons
const threatText = document.getElementById('threat-text');
const noButton = document.getElementById("no")
const yesButton = document.getElementById("yes")
const gif = document.getElementById("gif-src");

noButton.addEventListener('mouseover', () => {
    //Changing the GIF
    gif.src = './Assets/gun.gif';
    threatText.style.display = 'block';

    const x = noButton.offsetLeft;
    const y = noButton.offsetTop
    const height = document.documentElement.clientHeight
    const width = document.documentElement.clientWidth;

    console.log(height);
    console.log(width);

    // Generate random positions
    const newX = Math.floor(Math.random() * (width - (width / 2) - x));
    const newY = Math.floor(Math.random() * (height - (height / 2) - y));

    if (newX > width || newY > height) {
        newX = (newX / 2);
        newY = (newY / 2);
    }

    // Set the new position
    noButton.style.left = `${newX - 300}px`;
    noButton.style.top = `${newY - 300}px`;

});

yesButton.addEventListener('mouseover', () => {
    gif.src = './Assets/happy-ghost.gif';
    threatText.style.display = 'none';
});

yesButton.addEventListener('click', (e) => {
    window.location.href = './HTML/success.html';
});