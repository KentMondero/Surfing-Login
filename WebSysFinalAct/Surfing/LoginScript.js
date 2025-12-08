// SWITCH LOGIN <-> REGISTER
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

// ➤ Add smooth transition when switching
function animateForms() {
    document.querySelectorAll(".form-box").forEach(form => {
        form.classList.remove("show");
        void form.offsetWidth; // forces animation reset
        form.classList.add("show");
    });
}

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
    setTimeout(animateForms, 200); // delay for smooth animation
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
    setTimeout(animateForms, 200);
});

// SHOW / HIDE PASSWORD
document.querySelectorAll(".toggle-password").forEach(icon => {
    icon.addEventListener("click", () => {
        const target = document.getElementById(icon.dataset.target);
        if (target.type === "password") {
            target.type = "text";
            icon.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
        } else {
            target.type = "password";
            icon.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
        }
    });
});

// ➤ Initial animation when page loads
window.addEventListener("load", () => {
    animateForms();
});
