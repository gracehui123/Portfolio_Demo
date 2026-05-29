// Add JavaScript code for your web site here and call it from index.html.
const resume_button = document.querySelector('#resume-button');

const successMessage = () => {
    console.log("You have successfully downloaded my resume!");
}

resume_button.addEventListener('click', successMessage);