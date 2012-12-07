/*
1.实现无移出效果时的切换（2个小时，太无能了）
2.实现移出效果的切换
*/
var interv;
function circle () {
	interv = setInterval(slide, 5000);
}

function slide () {	
var $active = $('.carousel').find('.item.active')
	, children = $active.parent().children()
	, activePos = children.index($active)
	, $next
	, $prev;
	if(activePos < (children.length - 1) && activePos > -1) {
		$next = children[activePos + 1];
	}
	else if(activePos === children.length - 1) {
		$next = children[0];
	}
	console.log(typeof $next);
	$active.fadeTo('slow', 0, function(){
		$active.removeClass('active');
		$next.className = 'item active';
		$next.style.opacity = 1;
	});
	
	return this;
	}

$('.carousel').mouseover(function () {
	clearInterval(interv);
});
$('.carousel').mouseleave(function () {
	circle();
});