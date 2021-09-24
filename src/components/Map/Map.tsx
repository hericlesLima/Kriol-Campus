import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';


function Map() {


  return (

    <MapContainer className="mymap" style={{ width: '100%', position: 'static', borderRadius: '20px' }}
      center={[14.913722, -23.526897]} zoom={16} maxZoom={19}  scrollWheelZoom={true}
      
    >
       <TileLayer
          maxZoom={20}
            attribution='Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
            url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
          />
      <Marker position={[14.913722, -23.526897]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
      </Marker>
    </MapContainer>
  )
}
export default Map;