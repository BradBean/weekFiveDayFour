let list = $('.navItem').each(function(){
	$(this).css('color','white');
});
let items = $('#nav').children();
$(items).css('backgroundColor','#145');

let wholeDiv = $('#contentContainer').children();

let evenNumb = $(wholeDiv).ready(function(){
	$('li:even').css('backgroundColor', '#ccc')
})
let oddNumb = $(wholeDiv).ready(function(){
	$('li:odd').css('backgroundColor', '#aaa')
})
let inputTag = $('#myInput').val('Brad Bean')



