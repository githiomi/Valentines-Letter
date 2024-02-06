// Typewriter Effect

// Scroll Reveal
const scroll_reveal = ScrollReveal ({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 10
});

scroll_reveal.reveal('.name', {origin: 'top'});
scroll_reveal.reveal('.home-content', {origin: 'left'});
scroll_reveal.reveal('.socials, .cv', {origin: 'right'});

// Buttons
const noButton = document.getElementById("no")
const yesButton = document.getElementById("yes")

noButton.addEventListener('mouseover', (event) =>{
    const x = noButton.offsetLeft;
    const y = noButton.offsetTop

    // Generate random positions
    const newX = Math.floor(Math.random() * (window.innerWidth - (x)));
    const newY = Math.floor(Math.random() * (window.innerHeight - y));

    // Limit newY to the height of the HTML document
    const maxAllowedY = document.documentElement.clientHeight - noButton.clientHeight;
    const limitedY = Math.min(newY, maxAllowedY);

    // Set the new position
    noButton.style.left = newX + 'px';
    noButton.style.top = limitedY + 'px';

})