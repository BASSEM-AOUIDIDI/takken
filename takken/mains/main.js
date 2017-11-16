
		// insert '<img src="images/ryu_stand_still.png">' into the .main div
		

		// animate ryu when hovered over
		// Hint: think of using mouseover and mouseout events
		

		// When you click on ryu, he should do a "hadouken"
	

		// Hint: think of using mousedown and mouseup and animate(to animate the hadouken gif).

$('.img1').on('click', function(){
	 $('.img1').attr('src','images/ryu_hadoken_pose.png');
	 $(".main").append("<img id='theImg' src='images/hadouken.gif'/>");
	 $("#theImg").animate({left: "+=300"}, 900);
    	$("#theImg").animate({left: "-=700"}, 1000);
	});
$('.img2').on('click', function(){
	 $('.main').attr('src','images/mirror.png');
	 $(".main").append("<img id='mirror' src='images/mirror.png'/>");

	 });



$('#act1').on('click', function(){
	 $('.img1').attr('src','images/ryu_hadoken_pose.png');
	 $(".main").append("<img id='theImg' src='images/hadouken.gif'/>");
	 var amount = 250
	 $("#theImg").animate({left: "+=250"}, 1000);
    	$("#theImg").animate({left: "-=700"}, 1500);
	 });
$('#act2').on('click', function(){
	 $('.main').attr('src','images/mirror.png');
	 $(".main").append("<img id='mirror' src='images/mirror.png'/>");

	 });
$('#act3').on('click', function(){
	 $('.img1').attr('src','images/explose.png');
	 $('#theImg').attr('src','images/explose.png');
	 $("#theImg").remove();
	 });
$('#act4').on('click', function(){
	 $("#theImg").attr('src','images/gameover.gif');
	 $(".img1").remove();
	 $(".img2").remove();
	 $("#mirror").remove();
	 $(".button").remove();
	 $(".main").append("<img id='gameover' src='images/gameover.gif'/>");
	 });


	
setTimeout(function(){
	$(".img3").attr('src','images/fight.png');
    
    // setTimeout(function() {console.log('5 seconds later')}, 5000)
  
	 }, 5000);
setTimeout(function(){
	$(".img3").remove();;
    
    // setTimeout(function() {console.log('5 seconds later')}, 5000)
  
	 }, 6000);


// $("#act6").click(function(){
	
//     $(".img3").remove();


// });

// 	$(document).ready(function() {
//     	$("#theImg").animate({left: "+=500"}, 2000);
//     	$("#theImg").animate({left: "-=300"}, 1000);
// });

// $('.img1').on('click', function(){
// 	 $('.img1').attr('src','explose.png');
