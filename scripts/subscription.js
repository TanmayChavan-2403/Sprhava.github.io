// Toggle menu subscription

let menuButton = document.getElementById('hamburger-menu-icon');
let menuBar = document.getElementById('mobile-menu-container');
let hamMenu = document.getElementById('hamburger-menu');

function toggleMenuBar(){
	let menuState = menuBar.getAttribute('data-state');
	if (menuState === 'close'){
		menuBar.style.transform = 'translate(0%)';
		menuBar.setAttribute('data-state', 'open');
		hamMenu.style.transform = 'scale(0)';
	} else {
		menuBar.style.transform = 'translate(-100%)';
		menuBar.setAttribute('data-state', 'close');
		hamMenu.style.transform = 'scale(1)';
	}
}



// Navbar subscription

window.addEventListener('scroll', e => {
	let navbar = document.getElementById('navbar');
	let navlinks = document.querySelectorAll('.nav-link-href');
	let position =window.pageYOffset;
	if (position > 20){
		navbar.style.backgroundColor='white';
		navlinks.forEach(navlink => {
			navlink.style.color = 'black';
		})
	} else {
		navbar.style.backgroundColor = 'transparent';
		navlinks.forEach(navlink => {
			navlink.style.color = 'white';
		})
	}
})

