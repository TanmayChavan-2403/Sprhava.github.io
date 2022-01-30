let slider = document.getElementById('slider');
let sliderState = {
	currSlider: 2,
	direction: 'forward'
}

setInterval(() => {
	if ( sliderState.currSlider == 4){
		sliderState.currSlider = 3;
		sliderState.direction = 'backward';
	} else if (sliderState.currSlider == 0){
		sliderState.currSlider = 1;
		sliderState.direction = 'forward';
	}

	let position = document.getElementById(`s${sliderState.currSlider}`).offsetLeft;

	if (sliderState.direction == 'forward'){
		slider.style.left = `-${position}px`;
		sliderState.currSlider += 1
	} else{
		console.log(position);
		slider.style.left = `-${position}px`;
		sliderState.currSlider -= 1
	}

}, 5000)

