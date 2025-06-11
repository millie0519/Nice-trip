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
				gsapAni();
			}, 1000); 
		});
	});

	function gsapAni(){
		//반응형
		ScrollTrigger.matchMedia({
			"(min-width: 768px)": function(){
				let tl_v = gsap.timeline({
					scrollTrigger: {
						trigger: '.visual',
						pin: true,
						scrub: true,
						end: "+=919",
						//markers: true
					}
				});

				tl_v.to('.video', {
					width: "70%",
					height: "70%",					
					marginTop: 350,
					borderRadius: 30
				})
				.to('.tokyo', {
					top: -300
				}, 0);
			}
		});
	}

	gsap.registerPlugin(ScrollTrigger);
	function gsapAni02(){
		const aniTxt = gsap.timeline();
		aniTxt.from(".mid-txt .txt1", {x: innerWidth * 1, duration: 4})
				.from(".mid-txt .txt2", {x: innerWidth * -1, duration: 4})

		ScrollTrigger.create({
			animation: aniTxt,
			trigger: ".mid-txt",
			start: "top top",
			end: "20% top",
			scrub: true,
			markers: true,
			pin: true,
			anticipatePin: 1,
			refreshPriority: -1
		});
	}
	gsapAni02();

	function gsapAni03(){
		let tl_v3 = gsap.timeline({
			scrollTrigger: {
				trigger: '.city-wrap',
				pin: true,
				scrub: true,
				//markers: true
			}
		});

		tl_v3.to('.city-wrap .pictures', {
			width: "40%",
			paddingBottom: "15%",
			end: () => "+=" + window.innerHeight,
		})
		// .to('.tokyo', {
		// 	top: -300
		// }, 0);
	}
	//gsapAni03();

	$(window).scroll(function(){
		// console.log($(window).scrollTop(), $('.city-wrap').offset().top)
	});
});