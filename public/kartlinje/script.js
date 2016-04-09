var episoder = [];
var currentEpisode = 0;
var forrige = "sletta";

//legge til episoder
episoder.push(["sletta.html"]);
episoder.push(["bergen.html"]);
episoder.push(["baaten.html"]);
episoder.push(["havet.html"]);
//iterere over episoder
episoder.forEach(function (item, index, array) {
  console.log(item);
  $("body").append("<article id='"+ getItemID(item) +"'></article>");
  $("#"+getItemID(item)).load("./episoder/"+item.toString());
});
$("article").hide();
$("#bgvideo").hide();
$("#map_lastFrame").hide();
$("article#sletta").show();
function episodeHopper(id){
  currentEpisode = parseInt(id);
  var itemID = getItemID(episoder[currentEpisode]);
  console.log(forrige);
  //her er det plass til å legge inn animasjoner av diverse slag
  if(itemID == "baaten"){
    baaten(itemID);
  }
  else if(itemID == "bergen")
    bergen(itemID);
  else if(itemID == "havet"){
      $("body").css("background-color", "black");
      $("article#"+ forrige).hide();
      $("article#"+ itemID).show();
    }
  else if(itemID =="sletta")
    sletta(itemID);
  else{
    $("article").hide();
    $("#bgvid").hide();
    $("article#"+ itemID).show();
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
    $("article#"+ forrige).fadeOut(1000);
    $("nav").fadeOut();
    $("#bgvid").show();
    $("#bgvid").get(0).playbackRate = 2;
    $("#bgvid").get(0).play();
    $("#yakety").get(0).play();
    $("article#"+ itemID).delay(5000).fadeIn(1000);
    $("#map_lastFrame").delay(8000).fadeIn(1000);
    $("nav").delay(5000).fadeIn();
  }
  if(forrige == "baaten"){
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).show();
    $("#map_lastFrame").fadeIn(1000);
    $("#map_lastFrame").animate({width: "100%", height: "100%"}, 1000);

  }
}
function sletta(itemID){
  if(forrige == "bergen"){
    $("#bgvid").show();
    $("#bgvid").get(0).currentTime = 0;
    $("#bgvid").get(0).pause();
    $("article#"+ forrige).hide();
    $("article#"+ itemID).show();
    $("#map_lastFrame").hide();
  }
  else{
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).show();
    $("#map_lastFrame").hide();
  }
}
function baaten(itemID){
  if(forrige == "bergen"){
    $("article#"+ forrige).fadeOut(1000);
    $("#map_lastFrame").animate({width: "200%", height: "200%"}, 1000);
    $("#map_lastFrame").fadeOut(1000);
    $("article#"+ itemID).fadeIn(2000);
    $("#bgvid").hide();
    $("#yakety").get(0).pause();
  }
  else {
    $("article#"+ forrige).fadeOut(1000);
    $("article#"+ itemID).fadeIn(1000);
  }
}

$(document).ready(function() {
  $('.fancybox').fancybox();
});
