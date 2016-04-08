
// Using leaflet.js to pan and zoom a big image.
// See also: http://kempe.net/blog/2014/06/14/leaflet-pan-zoom-image.html

// create the slippy map
var map = L.map('map', {
  minZoom: 1,
  maxZoom: 4,
  center: [0, 0],
  zoom: 3,
  crs: L.CRS.Simple
});

// dimensions of the image
var w = 1240,
    h = 800,
    url = 'bilder/bakgrunn/bergenhus.jpg';

// calculate the edges of the image, in coordinate space
var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

// add the image overlay,
// so that it covers the entire map
L.imageOverlay(url, bounds).addTo(map);

L.marker(map.unproject([680, 230])).addTo(map)

// tell leaflet that the map is exactly as big as the image
map.setMaxBounds(bounds);
map.dragging.disable();
map.dragging.disable();
map.touchZoom.disable();
map.doubleClickZoom.disable();
map.scrollWheelZoom.disable();
map.keyboard.disable();
