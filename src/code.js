(function(){
	$("#main").live("pageinit",function(){
		$("ul.bubbles li").animate({opacity:0,scale:0.1},0).delay(500).animate({
			opacity:1,
			transformOriginX:'50%',
			transformOriginY:'50%',
			scale:1
		},500,"easeOutBounce");
	});
})();