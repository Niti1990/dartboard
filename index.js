//create a div element that appears when the wrapper is clicked
//define that it appears where the mouse is clicked
//add animation of throwing dart
//style the dartborad
//define a scrore system or modulate accuracy

const wrapper = document.querySelector('.wrapper')

wrapper.addEventListener('click', function (click) {
	// console.log(click.offsetY)
	//  const timestart = Date.now()
	const Y = click.offsetY
	const x = click.offsetX
	// create div for dart
	const dart = document.createElement('div')

	dart.classList.add('dart')
	dart.style.left = x + 'px'
	dart.style.top = Y + 'px'
	console.log(dart)
	wrapper.appendChild(dart)
})
let clickTime
wrapper.addEventListener('mousedown', click => {
	const timestart = Date.now()
})
