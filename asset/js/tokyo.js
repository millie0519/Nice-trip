$(function(){
	$('html').css('overflow','hidden');

	$(document).ready(function() {
		setTimeout(function() {
			$('[data-vbg]').youtube_background();
		}, 100);

		$(window).on('load', function() {
			setTimeout(function() {
				setTimeout(function() {
					$('html').css('overflow','auto');
					$('.load').fadeOut();
				}, 1000);

				// GSAP
				gsap.registerPlugin(ScrollTrigger);
				gsap.registerPlugin(ScrollSmoother);
				ScrollSmoother.create({
					wrapper: "#smooth-wrapper",
					content: "#smooth-content",
					smooth: 1,
					effects: true,
				});
				gsapAni();
			}, 1000);
		});
	});


	function gsapAni(){
		//반응형
		var moveY = $(window).innerWidth() * 0.2;
		ScrollTrigger.matchMedia({
			"(min-width: 768px)": function(){
				let tl_v = gsap.timeline({
					scrollTrigger: {
						trigger: '.visual',
						pin: true,
						scrub: true,
					}
				});

				tl_v.to('.video', {
					width: "70%",
					height: "70%",
					marginTop: moveY,
					borderRadius: 30
				})
				.to('.tokyo', {
					y: -moveY
				}, 0);
			}
		});
	}
	
	function gsapAni02(){
		const aniTxt = gsap.timeline();
		aniTxt.from(".mid-txt .txt1", {x: innerWidth * 1, duration: 4})
				.from(".mid-txt .txt2", {x: innerWidth * -1, duration: 4})

		ScrollTrigger.create({
			animation: aniTxt,
			trigger: ".mid-txt",
			start: "top top",
			end: "+=200%",
			scrub: true,
			pin: true,
			anticipatePin: 1,
			refreshPriority: -1
		});
	}
	gsapAni02();

	function gsapAni03(){
		gsap.utils.toArray(".city-wrap .group").forEach((item) => {
			ScrollTrigger.create({
				trigger: item,
				start: "top top",
				//end: "bottom 20%",
				markers: true,
				onEnter: () => {animate(item)}, 
			});
		});

		const animate = (item) => {
			gsap.to(item, 
				{ toggleClass: {
					targets: item,
					className: "act"
				}},
			);
		}
	}
	gsapAni03();
 
	var flag = 1;
	$(window).on('scroll', function() {
		//console.log($(window).scrollTop(), $('.mid-txt').offset().top)
		if (flag === 1 && $(window).scrollTop() > window.innerHeight) {
			ScrollTrigger.refresh();
			flag = 0;
		}
	});

	$(window).resize(function(){
		ScrollTrigger.refresh();
	});
});