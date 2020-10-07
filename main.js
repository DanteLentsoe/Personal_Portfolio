function narBar(){
    const responsiveBar = document.querySelector(".bar-nav");
    const navLinks = document.querySelector(".nav-link-bar");
    const links = document.querySelectorAll(".nav-link-bar li");

    responsiveBar.addEventListener('click', () => {

        navLinks.classList.toggle('open');

    });
};