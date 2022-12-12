(function() {
	'use strict';

	const form = document.querySelector('form');

	if ( form ) {
		form.addEventListener('submit', (e) => {
			let message = form.querySelector('.form__message');
			message.classList.add('_active');
			e.preventDefault();
		});
	}
})();
