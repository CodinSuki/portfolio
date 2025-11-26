const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});


const testButton = document.getElementById('theme-test');
testButton.addEventListener('click', () => {
    window.alert("I don't have a formal photo sorry sir D:");
});
