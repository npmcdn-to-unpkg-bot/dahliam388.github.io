$(document).ready(function () {
​
	// listen for scroll event on window
	$(window).scroll(function () {
​
		// distance from top of page
		var scrollTop = $(window).scrollTop()
​
		console.log(scrollTop)
​
		// apply css changes based on distance scrolled
		if (scrollTop > 100) {
			$('header').addClass('scrolled')
		} else {
			$('header').removeClass('scrolled')
		}
	})
​
})