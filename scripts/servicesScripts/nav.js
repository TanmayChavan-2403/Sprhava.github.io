box.addEventListener('click', () => {
    const navList = document.querySelector(".navbar-items");
    navList.classList.toggle('toggling')

    const navbarBrand = document.querySelector('.navbar-brand');
    navbarBrand.classList.toggle('toggling')
        // console.log(navList.style.display);
        // navList.style.display = 'block';

});