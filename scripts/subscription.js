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
		menuButton.style.color = 'black';
		navlinks.forEach(navlink => {
			navlink.style.color = 'black';
		})
	} else {
		navbar.style.backgroundColor = 'transparent';
		menuButton.style.color = 'white';
		navlinks.forEach(navlink => {
			navlink.style.color = 'white';
		})
	}
})






// Contact-us page toggle button subscription
let fields = document.querySelectorAll('.address');
let googleMap = document.getElementById('googlemap');

let address = fields[0].children[1];
// let phoneNumber = fields[1].children[1];
// let contactMail = fields[2].children[1]
// let website = fields[3].children[1]

function toogleAddress(country, button){

	let ID= button.id == 'ITB' ? 'GTB' : 'ITB';
	let anotherButton = document.getElementById(ID);

	if (country == 'India'){
		address.innerText = 'BM Arcade, Belthur, Kadugodi Post, Above Airtel Store Whitefield- Hoskote Mian, Road Bengaluru – 560067, Karnataka, India'
		googleMap.removeChild(googleMap.children[0]);
		googleMap.insertAdjacentHTML('afterbegin', 
			`
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7774.87290706235!2d77.757726!3d13.007855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x76d086294f06bd69!2sSGP%20Finance%20Corporation%20(%20SGP%20FIN%20CORP)!5e0!3m2!1sen!2sin!4v1643918177306!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			`
			)
	} else {
		address.innerText = 'Raintaler Str, Munich, Germany';
		googleMap.removeChild(googleMap.children[0]);
		googleMap.insertAdjacentHTML('afterbegin',
			`
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d42621.24104179245!2d11.580336!3d48.113562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ddf0d491b3a7f%3A0xf3f56dcfa08b5906!2sRaintaler%20Str.%2C%20M%C3%BCnchen%2C%20Germany!5e0!3m2!1sen!2sus!4v1643918318798!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
			`
			)
	}

	button.style.backgroundColor = 'black';
	button.style.color = 'grey';

	anotherButton.style.backgroundColor = 'grey';
	anotherButton.style.color = 'black';
}