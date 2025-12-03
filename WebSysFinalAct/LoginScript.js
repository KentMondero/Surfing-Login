document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.querySelector('.wrapper');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const iconClose = document.querySelector('.icon-close');

    if(registerLink){
      registerLink.addEventListener('click', function(e){
        e.preventDefault();
        wrapper.classList.add('active');
      });
    }
    if(loginLink){
      loginLink.addEventListener('click', function(e){
        e.preventDefault();
        wrapper.classList.remove('active');
      });
    }
    if(iconClose){
      iconClose.addEventListener('click', function(){ wrapper.classList.remove('active'); });
    }
  });


document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.toggle-password').forEach(icon => {
        icon.addEventListener('click', () => {

            const target = icon.getAttribute('data-target');
            const input = document.getElementById(target);

            if (input.type === "password") {
                input.type = "text";
                icon.innerHTML = '<ion-icon name="eye-outline"></ion-icon>';
            } else {
                input.type = "password";
                icon.innerHTML = '<ion-icon name="eye-off-outline"></ion-icon>';
            }
        });
    });
});

