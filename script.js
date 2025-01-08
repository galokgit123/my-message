var myBannerTimeline = new TimelineLite();

myBannerTimeline.from('#photo',3, {top:'-=400', left:'+=600', ease:'Quad..easeInOut'})
	.from("#logo", 1.5, {scale: 1, y: 300, ease: Elastic.easeOut.config(.3, .4)})
  .from('#hed', 1, {alpha:0, scale:0, top:'+=30', ease:'Back.easeOut'})
  .from('#txt1', .5, {opacity:0, top:'-=20'})
  .from('#txt2', 1.5 , {alpha:0, top:'-=30', ease:'Back.easeOut'})
  .to("#logo", .5, {delay: 3, scale: .98, ease: Power2.easeInOut})
  .from('#cta', 2, {alpha:0})
  .from('#cta>em', 1 , {alpha:0});

myBannerTimeline.add(TweenMax.to('#cta', .5, {'backgroundColor':'rgba(0,0,0,1)', repeat:3, yoyo:true}));

myBannerTimeline.timeScale(1.3);