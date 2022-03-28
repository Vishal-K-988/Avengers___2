
var markers = [
  { name: "Egypt", coords: [26.8206, 30.8025] },
  { name: "Russia", coords: [61.524, 105.3188] },
  { name: "Canada", coords: [56.1304, -106.3468] },
  { name: "Greenland", coords: [71.7069, -42.6043] },
  { name: "Brazil", coords: [-14.235, -51.9253] }
];

var jvm = new jsVectorMap({
  map: "world_merc",
  selector: "#map",
  // zoomButtons: true,
  
  regionStyle: {
     initial: { fill: '#d1d4db' }
  },

  labels: {
    markers: {
      render: (marker) => marker.name
    }
  },

  markersSelectable: true,
  selectedMarkers: markers.map((marker, index) => {
    var name = marker.name;

    if (name === "Russia" || name === "Brazil") {
      return index;
    }
  }),
  markers: markers,
  markerStyle: {
    initial: { fill: "#5c5cff" },
    selected: { fill: "#ff5050" }
  },
  markerLabelStyle: {
    initial: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 13
    }
  }
});

window.addEventListener('resize', () => {
  jvm.updateSize()
})