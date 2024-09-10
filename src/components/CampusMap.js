import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow, Polygon } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
};


const center = {
  lat: 31.2560,
  lng: 75.7051,
};


const policeIcon = {
  url: '/custom-icons/police-icon.png',
  scaledSize: { width: 40, height: 40 },
};


const policeStations = [
  { id: 1, lat: 31.2570, lng: 75.7060, name: 'Police Station 1', type: 'Police Station', details: 'Main police station of the LPU campus.' },
  { id: 2, lat: 31.2555, lng: 75.7040, name: 'Police Station 2', type: 'Police Station', details: 'Handles the west side of the campus.' },
  { id: 3, lat: 31.2565, lng: 75.7055, name: 'Police Station 3', type: 'Police Station', details: 'Oversees the central area.' },
  { id: 4, lat: 31.2540, lng: 75.7035, name: 'Police Station 4', type: 'Police Station', details: 'East campus coverage.' },
  { id: 5, lat: 31.2568, lng: 75.7070, name: 'Police Station 5', type: 'Police Station', details: 'Near main gate.' },
];


const redZones = [
  [
    { lat: 31.2572, lng: 75.7065 },
    { lat: 31.2578, lng: 75.7070 },
    { lat: 31.2569, lng: 75.7075 },
    { lat: 31.2563, lng: 75.7070 },
  ],
  [
    { lat: 31.2550, lng: 75.7030 },
    { lat: 31.2557, lng: 75.7038 },
    { lat: 31.2548, lng: 75.7042 },
    { lat: 31.2542, lng: 75.7033 },
  ],

  [
    { lat: 31.2560, lng: 75.7030 },
    { lat: 31.2567, lng: 75.7038 },
    { lat: 31.2568, lng: 75.7042 },
  ],
];


const crimes = [
  { id: 1, lat: 31.2565, lng: 75.7045, type: 'Molestation', details: 'Reported molestation on 12th Sept.' },
  { id: 2, lat: 31.2560, lng: 75.7051, type: 'Assault', details: 'Reported assault on 10th Sept.' },
  { id: 3, lat: 31.2570, lng: 75.7052, type: 'Assault', details: 'Reported assault on 11th Sept.' },
];

const CampusMap = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
      >
        {/* Police Stations Markers */}
        {policeStations.map((station) => (
          <Marker
            key={station.id}
            position={{ lat: station.lat, lng: station.lng }}
            title={station.name}
            icon={policeIcon}
            onClick={() => setSelectedMarker(station)}
          />
        ))}

        {/* Crime Markers */}
        {crimes.map((crime) => (
          <Marker
            key={crime.id}
            position={{ lat: crime.lat, lng: crime.lng }}
            title={crime.type}
            icon='http://maps.google.com/mapfiles/ms/icons/red-dot.png'
            onClick={() => setSelectedMarker(crime)}
          />
        ))}

        {/* Red Zones Polygons */}
        {redZones.map((zone, index) => (
          <Polygon
            key={`redzone-${index}`}
            paths={zone}
            options={{
              fillColor: 'rgba(255, 0, 0, 0.3)',
              strokeColor: 'rgba(255, 0, 0, 0.6)',
              strokeWeight: 2,
              clickable: false,
            }}
          />
        ))}

        {/* InfoWindow for selected marker */}
        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div className="info-window">
              {selectedMarker.name && <h3>{selectedMarker.name}</h3>}
              {selectedMarker.type && <h3>{selectedMarker.type}</h3>}
              {selectedMarker.details && <p>{selectedMarker.details}</p>}
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default CampusMap;
