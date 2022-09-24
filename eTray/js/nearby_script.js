function scrollDiv1(dir, px) {
	var scroller = document.getElementById('scroller1');
	if (dir == 'l') {
		scroller.scrollLeft -= px;
	}
	else if (dir == 'r') {
		scroller.scrollLeft += px;
	}
}

function scrollDiv2(dir, px) {
	var scroller = document.getElementById('scroller2');
	if (dir == 'l') {
		scroller.scrollLeft -= px;
	}
	else if (dir == 'r') {
		scroller.scrollLeft += px;
	}
}