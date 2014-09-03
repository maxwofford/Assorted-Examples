function onStart() {
	generateMosaic(hexToNum(getRandomColor()))
}

function generateMosaic(baseColor) {
	for (var n = 0; n < 10; n++) {
		for (var i = 0; i < 10; i++) {
			var tile = document.createElement('div');
			tile.style.cssText = 'display: inline-block; width: 10%; height: 10%; background-color:' + numToHex(baseColor + (n * 100) + (i * 10)) + ';'
			document.getElementById('container').appendChild(tile);
		};
	};

	numToHex(baseColor)
}

//Random color generation is from https://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.info('Random generated color is #', color)
    return color;
}

function numToHex(number) {
	return number.toString(16);
}

function hexToNum(hex) {
	return parseInt(hex, 16);
}