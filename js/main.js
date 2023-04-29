// Created by Cameron Brubacher, 2023, for Term Project in GEOG 464
function initialize() {
	//function to load leaflet map
    function loadMap(){
        //create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/
        var CartoDB_Voyager = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
	        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	        subdomains: 'abcd',
	        maxZoom: 20
        });
        
        //add basemap styles to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
        var baseLayers = {
            "Base Map": CartoDB_Voyager
        };

        // create the map
        var mymap = L.map('mapdiv', {
            center: [55, -95]
            ,zoom: 4
            ,maxZoom: 15
            ,minZoom: 2
            ,layers: CartoDB_Voyager
        });

        // parse json object (var geojsonData) and turn into loadable layer
        geojsonLayer = L.geoJSON(geojsonData, {
            onEachFeature: onEachFeature
        });
        
        //declare basemap selector widget
        var lcontrol = L.control.layers(baseLayers);

        //add it to the map
        lcontrol.addTo(mymap);

        //declare marker cluster
        var markers = L.markerClusterGroup();
        markers.addLayer(geojsonLayer);
        mymap.addLayer(markers);
        mymap.fitBounds(markers.getBounds());

        //add geojsonData to map
        //geojsonLayer.addTo(mymap);// add json element to map

        //create function to display pop-up information, and only show notes and bio if present
        function onEachFeature(feature, layer) {
            if (feature.properties.Notes !== null && feature.properties.AuthorBiography !== null) {
                layer.bindPopup('<bold>Author: </bold>'+feature.properties.WorkAuthor+'<br>'+'<bold>Title: </bold>'+feature.properties.WorkTitle+'<br>'+'<bold>Year: </bold>'+feature.properties.Year+'<br>'+'<bold>Pages: </bold>'+feature.properties.Pages+'<br>'+'<bold>Publisher: </bold>'+feature.properties.WorkPublisher+'<br>'+'<bold>Publishing City: </bold>'+feature.properties.PublisherCity+'<br>'+'<bold>Notes: </bold>'+feature.properties.Notes+'<br>'+'<bold>Bio: </bold>'+feature.properties.AuthorBiography+'<br>'+'<bold>Birthplace: </bold>'+feature.properties.AuthorBirthplace);
            } else if (feature.properties.Notes !== null && feature.properties.AuthorBiography === null) {
                layer.bindPopup('<bold>Author: </bold>'+feature.properties.WorkAuthor+'<br>'+'<bold>Title: </bold>'+feature.properties.WorkTitle+'<br>'+'<bold>Year: </bold>'+feature.properties.Year+'<br>'+'<bold>Pages: </bold>'+feature.properties.Pages+'<br>'+'<bold>Publisher: </bold>'+feature.properties.WorkPublisher+'<br>'+'<bold>Publishing City: </bold>'+feature.properties.PublisherCity+'<br>'+'<bold>Notes: </bold>'+feature.properties.Notes+'<br>'+'<bold>Birthplace: </bold>'+feature.properties.AuthorBirthplace);
            } else if (feature.properties.Notes === null && feature.properties.AuthorBiography !== null) {
                layer.bindPopup('<bold>Author: </bold>'+feature.properties.WorkAuthor+'<br>'+'<bold>Title: </bold>'+feature.properties.WorkTitle+'<br>'+'<bold>Year: </bold>'+feature.properties.Year+'<br>'+'<bold>Pages: </bold>'+feature.properties.Pages+'<br>'+'<bold>Publisher: </bold>'+feature.properties.WorkPublisher+'<br>'+'<bold>Publishing City: </bold>'+feature.properties.PublisherCity+'<br>'+'<bold>Bio: </bold>'+feature.properties.AuthorBiography+'<br>'+'<bold>Birthplace: </bold>'+feature.properties.AuthorBirthplace);
            } else {
                layer.bindPopup('<bold>Author: </bold>'+feature.properties.WorkAuthor+'<br>'+'<bold>Title: </bold>'+feature.properties.WorkTitle+'<br>'+'<bold>Year: </bold>'+feature.properties.Year+'<br>'+'<bold>Pages: </bold>'+feature.properties.Pages+'<br>'+'<bold>Publisher: </bold>'+feature.properties.WorkPublisher+'<br>'+'<bold>Publishing City: </bold>'+feature.properties.PublisherCity+'<br>'+'<bold>Birthplace: </bold>'+feature.properties.AuthorBirthplace);
            }
        };
    };

    //call the function to create leaflet map
	loadMap();
}

window.onload = initialize();