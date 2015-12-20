'use strict';

const tesseract = require('node-tesseract');

tesseract.process(__dirname + '/image.png', (err, text) => {
	if (err) {
		console.error(err);
	} else {
		console.log(text);
	}
});
