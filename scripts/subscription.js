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
	let position =window.pageYOffset;
	if (position > 20){
		navbar.style.backgroundColor='#141414';
	} else {
		navbar.style.backgroundColor = 'transparent';
	}
})