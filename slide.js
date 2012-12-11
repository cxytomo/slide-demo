/*
1.实现无移出效果时的切换（2个小时，太无能了）
2.实现移出效果的切换
*/
var interv;
function circle () {
	interv = setInterval(slide(dir), 5000);
}

function slide (direction) {	
var $active = $('.carousel').find('.item.active')
	, children = $active.parent().children()
	, activePos = children.index($active)
	, $next
	, $prev;
	if(direction === 'next') {
		if(activePos < (children.length - 1) && activePos > -1) {
			$next = children[activePos + 1];
		}
		else if(activePos === children.length - 1) {
			$next = children[0];
		}
		$active.fadeTo('slow', 0.01, function(){
			$active.removeClass('active');
			$next.className = 'item active';
			$next.style.opacity = 1;
		});
	}
	if(direction === 'prev') {
		if(activePos > 0 && activePos <= (children.length - 1)){
			$prev = children[activePos - 1];
		}
		else if(activePos === 0) {
			$prev = children[children.length - 1];
		}
		$active.fadeTo('slow', 0.01, function(){
			$active.removeClass('active');
			$prev.className = 'item active';
			$prev.style.opacity = 1;
		});
	}	
	return this;
	}

$('.carousel').mouseover(function () {
	clearInterval(interv);
});
$('.carousel').mouseleave(function () {
	circle();
});
$('.carousel-control.left').click(function(e){
	slide('prev');
	e.preventDefault();
});
$('.carousel-control.right').click(function(e){
	slide('next');
	e.preventDefault();
});