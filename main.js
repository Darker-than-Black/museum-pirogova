var col = false;
$(document).on('click',function (e) {
	var el ='.search__window';
	if ($(e.target).closest(el).length && $(el).hasClass('visibleWindow')) return;
	if(!col){
		col = true;
	} else {
		$('.search__window').removeClass('visibleWindow');
		col = false;
	}
});

$('.nav-search').click( function () {
 	$('.search__window').addClass('visibleWindow');
});


var owl = $('.owl-carousel');
owl.owlCarousel({
    margin:0,
    nav:false,
    items: 1,
    dots: true,
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    animateOut: 'fadeOut',
});

var dot = owl.find('.owl-dot');
dot.each(function(){
	var index = $(this).index();
	$(this).html('<span>'+(index+1)+'</span>');
});



var mql = window.matchMedia('all and (min-width: 992px)');
if (mql.matches) {
    // размер окна 992px или больше
    $('.dropdown').hover( function() {
	 	$(this).find('.dropdown-menu').addClass('show').focus();;
	 }, function() {
	 	$(this).find('.dropdown-menu').removeClass('show');
	 });

    $(function() {
	    $(window).scroll(function() {
	        if ($(document).scrollTop() >= 90) {
	            $('.menu .navbar-brand img').css({
	            	"margin":"0",
	            	"width":"35px",
	            	"transition":".5s"
	            });
	            $('.menu .navbar .dropdown-menu').css({
	            	"top": "27px",
	            	"transition":".5s"
	            });
	        }
	        else {
	            $('.menu .navbar-brand img').css({
	            	"margin":"10px",
	            	"width":"50px",
	            	"transition":".5s"
	            });
	            $('.menu .navbar .dropdown-menu').css({
	            	"top": "44px",
	            	"transition":".5s"
	            });
	        }
	    });
	});
} else {
    // нет, размер окна менее 992px 
    $(function(){
    	var h = window.innerHeight - 75;
	    $(window).scroll(function() {
	        if ($(document).scrollTop() > h) {
	            $('.menu').css({
	            	"background-color":"rgba(103, 0, 20, 0.6)",
	            });
	        }
	        else {
	            $('.menu').css({
	            	"background-color":"transparent",
	            });
	        }
	    });
    })
}