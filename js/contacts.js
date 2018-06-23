(function () {
 //https://developer.mozilla.org/en-US/docs/Glossary/IIFE
    
    'use strict';
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

    window.ContactsSection = {

        Init: function (mapContainerId, GPS_COORDINATES, MARKER_POPUP_TEMPLATE) {

            if (GPS_COORDINATES && GPS_COORDINATES.LATITUDE && GPS_COORDINATES.LONGITUDE) {

                const map = new L.map(mapContainerId, { zoomControl: false });

                const freeCodeCampIcon = L.icon({
                    iconUrl: 'resources/img/marker.png',
                    iconAnchor:   [20, 7], 
                });

                const marker = L.marker([GPS_COORDINATES.LATITUDE, GPS_COORDINATES.LONGITUDE], { icon: freeCodeCampIcon }).addTo(map)

                if (MARKER_POPUP_TEMPLATE) {
                    marker.bindPopup(MARKER_POPUP_TEMPLATE);
                }

                marker.openPopup();

                // create the tile layer with correct attribution
                const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
                const osmAttrib = 'Map data © <a class="reset_default" href="https://openstreetmap.org">OpenStreetMap</a> contributors';
                var osm = new L.TileLayer(osmUrl, { minZoom: 8, maxZoom: 15, attribution: osmAttrib });

                // start the map in South-East England
                map
                    .setView(new L.LatLng(GPS_COORDINATES.LATITUDE, GPS_COORDINATES.LONGITUDE), 90)
                    .addLayer(osm);

            } else {
                console.error('Invalid or missing parametter: GPS_COORDINATES');
            }
        }
    }

})()