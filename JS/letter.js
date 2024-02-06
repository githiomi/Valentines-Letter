// LETTER
const gun_gif = document.querySelector('.gun-gif');
const letter = document.querySelector('.letter');
const envelope = document.querySelector('.envelope');

envelope.addEventListener('mouseover', () => {
    letter.classList.add('over-letter')
    gun_gif.classList.remove('show')
});

envelope.addEventListener('mouseout', () => {
    letter.classList.remove('over-letter')

    setTimeout(() => {
        gun_gif.classList.add('show');
    }, 1500);
});