const toggles = document.querySelectorAll('.toggle-icon');

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        const description = toggle.parentElement.nextElementSibling;
        const projectBox = toggle.closest('.project-box');

        // Toggle description visibility
        description.classList.toggle('open');

        // Toggle background on parent
        projectBox.classList.toggle('open-box');

        // Toggle icon
        if (toggle.classList.contains('bx-plus')) {
            toggle.classList.remove('bx-plus');
            toggle.classList.add('bx-minus');
        } else {
            toggle.classList.remove('bx-minus');
            toggle.classList.add('bx-plus');
        }
    });
});


//Form Script
//to keep form from reloading
document.getElementById('userForm').addEventListener('submit', (e) => {
    e.preventDefault();
});


const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', () => {

    const userName = document.getElementById('name').value
    const url = document.getElementById('url').value
    const message = document.getElementById('message').value

    console.log(`you name is: ${userName}`);
    console.log(`your URL is: ${url}`);
    console.log(`your message is: ${message}`)
})
