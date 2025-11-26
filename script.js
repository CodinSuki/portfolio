const toggleButton = document.getElementById('theme-toggle');
const testbutton = document.getElementById('theme-test');
const body = document.body;


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
});

testbutton.addEventListener('click', () => {
    window.alert("I don't have a formal photo sorry sir D:");
});
