

/* плавный скролл */

document.querySelectorAll('a[href^="#"').forEach(link => {
	link.addEventListener('click', function (e) {
		e.preventDefault();
		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

		const topOffset = 80;
		// const topOffset = 0; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		navbar.classList.remove('--is-active');

		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});

	});
});

const menu = document.querySelector('#menu');
const navbar = document.querySelector('nav');

menu.addEventListener('click', function (e) {
	navbar.classList.toggle('--is-active');
});
