// Get all the service buttons
const serviceButtons = document.querySelectorAll('.service-button');

// Add an event listener to each button
serviceButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(`Clicked on ${button.textContent}`);
    });
});
