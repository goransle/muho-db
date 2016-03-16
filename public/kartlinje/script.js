var map = L.map('map').setView([51.505, -0.09], 13);
var osmUrl='http://www.openhistoricalmap.org/ohm_tiles/{z}/{x}/{y}.png';
var britishMap='http://nls-3.tileserver.com/nls/{z}/{x}/{y}.jpg';
var osmAttrib='Map data © <a href="https://openhistorcalmap.org">OpenHistoricalMap</a> contributors';
var osm = new L.TileLayer(osmUrl, {minZoom: 3, maxZoom: 12, attribution: osmAttrib, continuousWorld: 'false',
});
var britain = new L.TileLayer(britishMap, {minZoom: 3, maxZoom: 12, attribution: osmAttrib});

//kartoppsett
map.setView(new L.LatLng(60.683629, 5.030783),3);
map.addLayer(osm);
//test

var episoder = [];
var markers = [];
var currentEpisode = 0;

//legge til episoder
episoder.push(["Introduksjon", [60.397544, 5.321792], "intro.html",1]);
episoder.push(["2. mai", [60.397544, 5.321792], "baaten.html",1]);
episoder.push(["2. mai", [53.741275, -0.279313], "test.html"]);
episoder.push(["7. mai", [53.401308, -2.995094], "test.html"]);
episoder.push(["17. mai", [42.380246, -71.057279], "test.html"]);
episoder.push(["17. mai ++", [44.850110, -94.081004], "test.html"]);
//iterere over episoder
episoder.forEach(function (item, index, array) {
  console.log(item[1]);
  markers[index] = L.marker(item[1]).addTo(map);
  //$("nav").append("<button class='epButts' id='" + index + "'>" + item[0] + "</button>");
  $("article").append("<section id='"+ index +"'></section>");
  $("section#"+index).load("./episoder/"+item[2]);
  if(item[3] == 1){
    $("section#"+index).addClass("fullScreen");
  }
});

episodeHopper(currentEpisode);

//knappar
$(".epButts").click(function() {
  episodeHopper(this.id);
});
$(".lukk").click(function() {
  $("article").hide();
});
$("#neste").click(function() {
  if(currentEpisode !=markers.length-1){
    episodeHopper(currentEpisode+1);
  }
});
$("#forrige").click(function() {
  if(currentEpisode != 0){
    episodeHopper(currentEpisode-1);
  }
});
$(markers).click(function() {
    episodeHopper($(markers).index(this));
});
function episodeHopper(id){
  currentEpisode = parseInt(id);
  map.panTo(markers[currentEpisode].getLatLng());
  if(currentEpisode != 0){
    L.polygon([
      markers[id].getLatLng(), markers[id-1].getLatLng()
    ]).addTo(map);
    if (id == 2) {
      map.zoomIn(4);
      map.addLayer(britain);
    }
    if (id == 3) {
      map.zoomOut(3);
      map.removeLayer(britain);
    }
    if (id == 4) {
    }
    if (id == 5) {
      map.zoomOut(3);
    }
  }
  $("section").hide();
  $("article").show();
  $("section#"+id).show();
  if($("section#"+id).hasClass("fullScreen")){
    $("article").addClass("fullScreen");
  }
  else{
    $("article").removeClass("fullScreen");
  }

}
