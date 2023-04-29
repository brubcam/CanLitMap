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
            var popupContent = "<img src='"+feature.properties.AuthorImage+"'style='width: 250px; height: auto;'>"+'<br>'+'<boldund>'+feature.properties.WorkAuthor+'</boldund>'+'<br>'+'<bold>Birthplace: </bold>'+feature.properties.AuthorBirthplace+'<br>'+'<bold>Bio: </bold>'+feature.properties.AuthorBiography
            for (let i = 0; i < feature.properties.NumberofWorks; i++) {
                var works = 'WorkTitle'+i
                var year = 'Year'+i
                var pages = 'Pages'+i
                var publisher = 'WorkPublisher'+i
                var city = 'PublisherCity'+i
                var notes = 'Notes'+i
                popupContent += '<br>'+'<br>'+'<und>'+feature.properties[works]+'</und>'+'<br>'+'<bold>Year: </bold>'+feature.properties[year]+'<br>'+'<bold>Pages: </bold>'+feature.properties[pages]+'<br>'+'<bold>Publisher: </bold>'+feature.properties[publisher]+'<br>'+'<bold>Publishing City: </bold>'+feature.properties[city]
                if (feature.properties[notes] !== null) {
                    popupContent += '<br>'+'<bold>Notes: </bold>'+feature.properties[notes]
                }
            }
            layer.bindPopup(popupContent);
        };
    };

    //call the function to create leaflet map
	loadMap();
};

window.onload = initialize();