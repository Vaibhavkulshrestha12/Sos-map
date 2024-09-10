
### LPU Campus Map

The LPU Campus Map application provides an interactive map of the LPU campus, visualizing key locations and incidents to enhance campus security awareness. This React application integrates with Google Maps to display various types of markers and polygons, including police stations, red zones, and recent crime locations.

### Features
- Interactive Map: Centralized map view of LPU campus with zoom and pan capabilities.
- Police Stations: Custom markers indicate the locations of police stations across the campus.
- Red Zones: Highlighted polygons represent high-risk areas or red zones.
- Crime Incidents: Markers display recent crime incidents with details.
- Info Windows: Clickable markers reveal detailed information about each location or incident.

### Technologies Used
- React: Frontend framework for building the user interface.
- Google Maps API: Provides map functionalities and geospatial data.
- @react-google-maps/api: Library for integrating Google Maps with React applications.
- CSS: Custom styles for a polished and user-friendly interface.


## Installation

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js 16.x or higher
- npm (Node package manager)

### Installation Steps
**Clone the repository**

```bash

git clone https://github.com/Vaibhavkulshrestha12/Sos-map.git
cd sos-map
```
**Install dependencies**

```bash
npm install
```
**Set Up Environment Variables**

Create a .env file in the root directory and add your Google Maps API key:

```.env
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
```
**Start the Development Server**

```bash
npm start
```

### Folder Structure
```bash
/lpu-campus-map
│
├── /public
│   ├── index.html
│   └── /custom-icons
│       └── police-icon.png
│
├── /src
│   ├── /components
│   │   └── CampusMap.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
│
├── .gitignore
├── package.json
└── README.md
```

### What to expect

Once the development server is running, open your browser and navigate to http://localhost:3000 to view the map. The map will display:

- Police Stations: Markers indicating the locations of police stations.
- Red Zones: Highlighted areas on the map to represent high-risk zones.
- Crime Incidents: Markers showing recent crime incidents with details.

### API Endpoints

This project is a frontend application and does not expose any backend API endpoints. The map data is dynamically loaded and managed within the frontend.

### Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request. Ensure your changes adhere to the project's code style and include tests where applicable.

### License
This project is licensed under the MIT License. See the LICENSE file for details.

