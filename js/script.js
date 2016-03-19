$(document).ready(function(){$('.wrap').css('display','none');});
$(function(){$('.wrap').fadeIn();});

//glnav
$(function() { glnav(); });
function glnav(){
	var nav = $('.glnav');
	var winWidth = $(window).width();
	if(winWidth < 479){
		nav.hide();
		nav.find('a').on('click',function(){nav.hide();});
	} else {
		nav.show();
	}
}
$(window).resize(function(){glnav();});
$(function() {
	$('.menu-btn').on('click',function(){
		$('.glnav').slideToggle(400);
	});
});

//scroll
$(function() {
$('a[href^=#]').not('.glnav-entry a').click(function() {
	var speed = 800;
	var href = $(this).attr("href");
	var target = $(href == "#" || href == "" ? 'html' : href);
	var position = target.offset().top;
	$('body,html').animate({scrollTop:position}, speed);
	return false;
});
});

//pagetop
$(function() {
var pageTop= $('.pagetop');
offset = pageTop.offset();
$(window).scroll(function () {
		if($(window).scrollTop() > 450) {
			pageTop.fadeIn(200);
		} else {
			pageTop.fadeOut(200);
		}
});
});

$(function(){
	//fixed glnav
	var nav = $(".glnav");
	var navTop = nav.offset().top;
	$(window).scroll(function () {
		if($(window).scrollTop() >= navTop) {
			nav.addClass("fixed");
		} else {
			nav.removeClass("fixed");
		}
	});
});

$(function() {
var nav= $('.menu-btn');
offset = nav.offset();
if(nav.css('height') != '100px'){
	nav.hide();
}
$(window).scroll(function () {
	if(nav.css('height') != '100px'){
		if($(window).scrollTop() > 100) {
			nav.fadeIn(200);
		} else {
			nav.fadeOut(200);
		}
	}
});

});

//countdown
$(function() { countDown(); });
function countDown() {
	var currentDate = new Date();
	var eventDate = new Date(2016, 3, 16); // month is beginning with 0 

	var remainingMilliseconds = eventDate - currentDate;
	var remainingDays = Math.max(0, Math.ceil(remainingMilliseconds /  (1000 * 60 * 60 * 24)));
	
	$('.timeleft').text(remainingDays);
	setTimeout('countDown()', 1000);
}


//
$(function() {
	var btn = $('.read-more');
	var more = $('.more');

	btn.each(function() {
		$(this).on('click', function() {
			$(this).prev(more).slideToggle(function() {
				if ($(this).is(':visible')) {
					$(this).next().text('閉じる');
				} else {
					$(this).next().text('続きを見る');
				}
			});
		});		
	});

});