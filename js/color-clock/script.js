function updateColor() {
	var element = document.getElementsByTagName('body');
	element.css({"transition": "all 0.8s", "-webkit-transition": "all 0.8s"});
	var time = new Date;
	// We have to explicitly convert our numbers to string to keep any zeros 
	var color = '#' + time.getHours().toString() + time.getMinutes().toString() + time.getSeconds().toString();
	element.style.background = color;
	// Recursive functions are recursive
	setTimeout(function(){updateColor();}, 1000);
}