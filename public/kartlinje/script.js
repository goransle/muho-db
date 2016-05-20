var episoder = [];
var currentEpisode = 0;
var forrige = "sletta";

//legge til episoder
episoder.push(["sletta.html"]);
episoder.push(["bergen.html"]);
episoder.push(["bryggen.html"]);
episoder.push(["havet.html"]);
episoder.push(["storm.html"]);
episoder.push(["ankomst.html"]);
episoder.push(["ellisisland.html"]);
episoder.push(["dakota.html"]);
episoder.push(["theend.html"]);
//iterere over episoder
episoder.forEach(function (item, index, array) {
  console.log(item);
  $("body").append("<article id='"+ getItemID(item) +"'></article>");
  //$("#pop-up ul").append("<li>" + getItemID(item) +"</li>");
  $("#"+getItemID(item)).load("./episoder/"+item.toString());
});
$("article").hide();
$("#map_lastFrame").hide();
$("article#sletta").show();

$("#miniLogo").click(function(){
    $("#pop-up").toggle();
});
$("#pop-up li").click(function(){
    window.location.href = "https://db-muho.rhcloud.com/";
});

function episodeHopper(id){
  currentEpisode = parseInt(id);
  var itemID = getItemID(episoder[currentEpisode]);
  console.log(forrige);
  //her er det plass til å legge inn animasjoner av diverse slag
  if(itemID == "bryggen"){
    baaten(itemID);
  }
  else if(itemID == "bergen")
    bergen(itemID);
  else if(itemID == "havet"){
      havet(itemID);
    }
  else if(itemID == "storm"){
      storm(itemID);
    }
  else if(itemID == "ankomst"){
      ankomst(itemID);
    }
  else if(itemID == "ellisisland"){
      ellisisland(itemID);
    }
  else if(itemID == "dakota"){
      dakota(itemID);
    }
  else if(itemID =="sletta")
    sletta(itemID);
  else{
    $("article").hide();
    $(".bgvid").hide();
    $("article#"+ itemID).show();
    if(itemID="theend"){
      $("button#neste").hide();
    }
  }
}

$("#neste").click(function() {
  if(currentEpisode !=episoder.length-1){
    episodeHopper(currentEpisode+1);
    forrige = getItemID(episoder[currentEpisode]);
  }
});
$("#forrige").click(function() {
  if(currentEpisode != 0){
    episodeHopper(currentEpisode-1);
    forrige = getItemID(episoder[currentEpisode]);
  }
});

function getItemID(item){
  return(item.toString().split(".")[0]);
}

function bergen(itemID){
  if(forrige == "sletta"){
    $("button#forrige").show();
    $("article#"+ forrige).fadeOut(1000);
    $("#navContainer").fadeOut();
    $("#hordaland").show();
    $("#hordaland").get(0).playbackRate = 2;
    $("#hordaland").get(0).play();
    $("article#"+ itemID).delay(5000).fadeIn(1000);
    $("#map_lastFrame").delay(8000).fadeIn(1000);
    $("#navContainer").delay(5000).fadeIn();
  }
  if(forrige == "bryggen"){
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).show();
    $("#map_lastFrame").fadeIn(1000);
    $("#map_lastFrame").animate({width: "100%", height: "100%"}, 1000);
  }
}
function sletta(itemID){
  if(forrige == "bergen"){
    $("#hordaland").show();
    $("#hordaland").get(0).currentTime = 0;
    $("#hordaland").get(0).pause();
    $("article#"+ forrige).hide();
    $("article#"+ itemID).show();
    $("#map_lastFrame").hide();
    $("button#forrige").hide();
  }
  else{
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).show();
    $("#map_lastFrame").hide();
    $("button#forrige").hide();
  }
}
function baaten(itemID){
  if(forrige == "bergen"){
    $("article#"+ forrige).fadeOut(500);
    $("#map_lastFrame").animate({width: "200%", height: "200%"}, 1000);
    //$("#map_lastFrame").fadeOut(1000);
    $("article#"+ itemID).delay(500).fadeIn(500);
    //$("#bgvid").hide();
    //$("#yakety").get(0).pause();
  }
  else {
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).fadeIn(1000);
    $("#map_lastFrame").attr("src", "./episoder/media/bakgrunn/hordaland_lastframe.png");
    $("#map_lastFrame").show();
  }
}
function havet(itemID){
    if(forrige == "bryggen"){
      $("article#"+ forrige).hide();
      $("article#"+ itemID).delay(2000).fadeIn(1000);
      $("#map_lastFrame").hide();
      $("#hordaland").hide();
      $("#atlantic1").show();
      $("#atlantic1").get(0).play();
      $("#atlantic1").get(0).playbackRate = 2;
    }
    else{
      $("article#"+ forrige).hide();
      $("article#"+ itemID).show();
      $("article#"+ forrige + " audio").get(0).pause();
    }
}
function storm(itemID){
  $("article#"+ forrige).fadeOut(1000);
  $("article#"+ itemID).fadeIn(1000);
  $("article#"+ itemID + " audio").get(0).play();
  $("article#"+ itemID + " video").show();
}
function ellisisland(itemID){
  if(forrige == "dakota"){
    $("#map_lastFrame").animate({width: "-100%", height: "-100%"}, 0);
    $("#map_lastFrame").show();
    $("#usa").hide();
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).fadeIn(1000);
    $("button#neste").show();
  }
  else{
    $("#map_lastFrame").attr("src", "./episoder/media/bakgrunn/atlantic2_lastframe.png");
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).fadeIn(1000);
  }
}
function ankomst(itemID){
    if(forrige == "storm"){
      $("article#"+ forrige).fadeOut();
      $("article#"+ forrige + " audio").get(0).pause();
      $("article#"+ itemID).delay(4000).fadeIn(1000);
      $("#map_lastFrame").hide();
      $("#atlantic1").hide();
      $("#atlantic2").show();
      $("#atlantic2").get(0).play();
      $("#atlantic2").get(0).playbackRate = 2;    }
    else{
      $("article#"+ forrige).hide();
      $("article#"+ itemID).show();
    }
}
function dakota(itemID){
    if(forrige == "ellisisland"){
      $("article#"+ forrige).fadeOut();
      $("article#"+ itemID).delay(2000).fadeIn(1000);
      $("#map_lastFrame").hide();
      $("#usa").show();
      $("#usa").get(0).play();
      $("#usa").get(0).playbackRate = 2;
    }
    else{
      $("article#"+ forrige).hide();
      $("article#"+ itemID).show();
      $("#usa").show();
      $("button#neste").fadeIn();
    }
}
$(document).ready(function() {
  $('.fancybox').fancybox();
  $(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			title	: {
				type: 'outside'
			},
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});
