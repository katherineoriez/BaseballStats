var playerData;

$(document).ready(function() {
    getdata();
});

function getdata () {
  $.getJSON("js/JayBruceStats.json", function(data, error) {
  	playerData=data;
  	drawStuff();
  });
 }
 
function drawStuff(){
	$(".chart").html(playerData.name);
	
	$.each(playerData.stats, function(i, item) {
		$(".chart").append("<p>"+item.AVG+"</p>");
	});
	
}
