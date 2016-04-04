$(document).ready(function () {
​
	// initial styles
	$('#box1')
		.css('background', 'red')
		.text('box one')
​
	$('#box2').css('background', 'blue').text('box two')
​
	// event handlers
	$('#box1').click(function () {
		$('#box-one').css('height', '500px').css('width', '500px')
		// $(this).css('height', '500px').css('width', '500px')
	})
​
	$('#box2').click(function () {
		$('#box2').css('height', '500px').css('width', '500px')
		// $(this).css('height', '500px').css('width', '500px')
	})
​
})