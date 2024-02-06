// LETTER
const envelope = document.querySelector('.envelope');
const letter = document.querySelector('.letter');

envelope.addEventListener('mouseover', () => {
    letter.classList.add('over-letter')
});

envelope.addEventListener('mouseout', () => {
    letter.classList.remove('over-letter')
});