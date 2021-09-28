// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-71.093729, 42.359244],
  [-71.094915, 42.360175],
  [-71.0958, 42.360698],
  [-71.099558, 42.362953],
  [-71.103476, 42.365248],
  [-71.106067, 42.366806],
  [-71.108717, 42.368355],
  [-71.110799, 42.369192],
  [-71.113095, 42.370218],
  [-71.115476, 42.372085],
  [-71.117585, 42.373016],
  [-71.118625, 42.374863],
];

// Add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWVsYXp6aW5pcGFibG8iLCJhIjoiY2t0a3FxbDhxMW9qYzJvcDhydjQ2bHIxbiJ9.V9fzNdcyEQBXdnyGWfnLBg';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 14,
});

// A marker to the map at the first coordinates in the array busStops. 
var marker = new mapboxgl.Marker()
   .setLngLat([-71.092761, 42.365554])
   .addTo(map);

// counter here represents the index of the current bus stop
var counter = 0;
function move() {
  setTimeout(() =>{
    if(counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 1000);
};
