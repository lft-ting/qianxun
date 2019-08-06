/*
* @Author: hp
* @Date:   2019-02-21 13:09:09
* @Last Modified by:   hp
* @Last Modified time: 2019-02-21 19:12:36
*/
setTimeout(function(){
	$('.box1>.logo').removeClass('no');
},2)
$('.music').click(function(event) {
	$(this).toggleClass('play');
	if($(this).hasClass('play')){
		// $('audio')[0].currentTime=0;
		$('audio')[0].play();
	}else{
		$('audio')[0].pause();
	}
});
$('.sidenav>li').click(function(event) {
	var index=$(this).index();
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	$('section').animate({'top':-100*index+'%'})
	$('section>div').eq(index).children('div').removeClass('no');
	$('section>div').eq(index).siblings().children('div').addClass('no');
});
var m=0;
var timer;
$(document).mousewheel(function(e,n){
	clearTimeout(timer)
	timer=setTimeout(function(){
		m=m-n;
		if(m<0){
			m=0;
		}
		if(m>6){
			m=6;
		}
		$('section').stop().animate({'top': -100*m+'%'});
		$('ol li').eq(m).addClass('current');
		$('ol li').eq(m).siblings().removeClass('current');
		$('section>div').eq(m).children('div').removeClass('no')
		$('section>div').eq(m).siblings().children('div').addClass('no')
	},300)
	
})