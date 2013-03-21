//var bubble_count = 0;
var me = {name:"David Wang", pic:"images/default-avatar.png"};
		  
var biz = {};

$(function(){
	
	$("#main").live("pageinit",function(){
		
		
		//alert("init");
		var cover_img_url = "images/cover.jpg";
		$("<img />").attr("src",cover_img_url).appendTo("#storage").load(function(){
			//alert("img loaded");
			stackBlurImage("cover_img","cover_canvas",20,false);
			$(".member_info #cover_canvas").css("top",($(".member_info").height()-$(".member_info #cover_canvas").height())/2);
			
			//console.log($(".member_info #cover_canvas").css("top"));
		});
		
		//load fb me profile
		//alert("My name is " + me.name + "/nMy Profile Picture: "+ me.pic);
		$("#me_name").html(me.name);
		//console.log("h: "+$(".member_info").outerHeight());
		$("div#me_pic").css("background-image","url("+me.pic+")").css("top",($(".member_info").height()-$(".member_info div#me_pic").height())/2);
		
		//load fb group feed
		
		//bubble_count = $("ul.bubbles li").length;
		jQuery.each($("ul.bubbles li"),function(i,v){
			//console.log("#"+i+": "+v);
			$(v).animate({opacity:0,scaleY:0.1},0).delay(300+500*i).animate({
			opacity:[1,'easeInCirc'],
			transformOriginX:'50%',
			transformOriginY:'0%',
			scaleY:1
		},500,"easeOutCirc");
		});
		/*$("ul.bubbles li").animate({opacity:0,scale:0.1},0).delay(500).animate({
			opacity:1,
			transformOriginX:'50%',
			transformOriginY:'50%',
			scale:1
		},500,"easeOutBounce");*/
	});
	//$("div#fb_login").hide();
	
});

function getDistance(c1,c2){
	var R = 6371;
	var dLat = toRad(c2.lat - c1.lat);
	var dLon = toRad(c2.lon - c1.lon);
	var lat1 = toRad(c1.lat);
	var lat2 = toRad(c2.lat);
	
	var a = Math.sin(dLat/2) * Math.sin(dlat/2) + Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
	var d = R * c;
	
	return d;
}

function toRad(Value) {
    /** Converts numeric degrees to radians */
    return Value * Math.PI / 180;
}