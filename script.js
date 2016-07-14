$('div.container').css('background-color', function () {
	return $(this).text();
});






$('.m1').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole2').css("display", "none");
	$('.whole3').css("display", "none");
	$('.whole4').css("display", "none");
	$('.whole5').css("display", "none");
	$('.whole6').css("display", "none");
	$('.whole1').fadeIn(400);
})
$('.m2').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole1').css("display", "none");
	$('.whole3').css("display", "none");
	$('.whole4').css("display", "none");
	$('.whole5').css("display", "none");
	$('.whole6').css("display", "none");
	$('.whole2').fadeIn(400);
})
$('.m3').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole1').css("display", "none");
	$('.whole2').css("display", "none");
	$('.whole4').css("display", "none");
	$('.whole5').css("display", "none");
	$('.whole6').css("display", "none");
	$('.whole3').fadeIn(400);
})
$('.m4').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole1').css("display", "none");
	$('.whole2').css("display", "none");
	$('.whole3').css("display", "none");
	$('.whole5').css("display", "none");
	$('.whole6').css("display", "none");
	$('.whole4').fadeIn(400);
})
$('.m5').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole1').css("display", "none");
	$('.whole2').css("display", "none");
	$('.whole4').css("display", "none");
	$('.whole3').css("display", "none");
	$('.whole6').css("display", "none");
	$('.whole5').fadeIn(400);
})
$('.m6').click(function () {

	$(this).siblings().css("text-decoration", "none");
	$(this).css("text-decoration", "overline");

	$('.whole1').css("display", "none");
	$('.whole2').css("display", "none");
	$('.whole4').css("display", "none");
	$('.whole5').css("display", "none");
	$('.whole3').css("display", "none");
	$('.whole6').fadeIn(400);
})



$(function () {
	$('.container').on('click', function () {

		SelectText($(this)[0]);
		document.execCommand('copy');

		var itsText = $(this).text();


		$('.transbox p').html(itsText + '<br/>' + ' Copied!');
		//$('.transbox').css('background', $(this).text());
		$('.transbox').fadeIn(400).delay(600).fadeOut(400);


	});

	function SelectText(element) {
		var doc = document,
			range, selection;
		if (doc.body.createTextRange) {
			range = document.body.createTextRange();
			range.moveToElementText(element);
			range.select();
		} else if (window.getSelection) {
			selection = window.getSelection();
			range = document.createRange();
			range.selectNodeContents(element);
			selection.removeAllRanges();
			selection.addRange(range);
		}
	}
});
