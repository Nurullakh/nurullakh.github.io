class Portfolio {
	constructor() {
		this.button = document.querySelectorAll('#portfolio-list li')
		this.img = document.querySelectorAll('.portfolio-img')
		this.info = document.querySelectorAll('.portfolio-info')
		// this.hamburger = document.querySelector('.hamburger')
		// this.notactive = document.querySelector('.notactive')
		// this.active = document.querySelector('.active')
		// this.exit = document.querySelector('.exit')

	}


	all() {
		this.img[0].src = 'img/nout1.png'
		this.img[1].src = 'img/nout2.png'
		this.img[2].src = 'img/nout3.png'
		this.img[3].src = 'img/nout4.png'
		this.info[0].textContent = 'Isometric Perspective Mock-Up'
		this.info[1].textContent = 'Time Zone App UI'
		this.info[2].textContent = 'Viro Media Players UI copy 2'
		this.info[3].textContent = 'Blog / Magazine Flat UI Kit'


	}

	web() {
		this.img.forEach((arr, i) => {
			let img = this.img
			let info = this.info
			img[i].src = 'img/nout2.png'
			info[i].textContent = 'Isometric Perspective Mock-Up'
		})
	}

	apps() {
		this.img.forEach((arr, i) => {
			let img = this.img
			let info = this.info
			img[i].src = 'img/nout1.png'
			info[i].textContent = 'Time Zone App UI'
		})
	}

	icons() {
		this.img.forEach((arr, i) => {
			let img = this.img
			let info = this.info
			img[i].src = 'img/nout4.png'
			info[i].textContent = 'Blog / Magazine Flat UI Kit'
		})
	}

}

let portfolio = new Portfolio()

portfolio.button[0].addEventListener('click', function() {
	portfolio.all()
})
portfolio.button[1].addEventListener('click', function() {
	portfolio.web()
})
portfolio.button[2].addEventListener('click', function() {
	portfolio.apps()
})
portfolio.button[3].addEventListener('click', function() {
	portfolio.icons()
})

hamburger = document.querySelector('.hamburger-onactive')
active = document.querySelector('.active')

hamburger.addEventListener('click', function(e) {
	e.preventDefault()
	if (hamburger.classList.contains('hamburger-active')) {
		hamburger.classList.remove('hamburger-active')
		active.style.display = 'none'
	} else {
		hamburger.classList.add('hamburger-active')
		active.style.display = 'block'
	}
})