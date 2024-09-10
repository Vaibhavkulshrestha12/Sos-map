LPU Campus Map
Overview
The LPU Campus Map application provides an interactive map of the LPU campus, visualizing key locations and incidents to enhance campus security awareness. This React application integrates with Google Maps to display various types of markers and polygons, including police stations, red zones, and recent crime locations.

Features
Interactive Map: Centralized map view of LPU campus with zoom and pan capabilities.
Police Stations: Custom markers indicate the locations of police stations across the campus.
Red Zones: Highlighted polygons represent high-risk areas or red zones.
Crime Incidents: Markers display recent crime incidents with details.
Info Windows: Clickable markers reveal detailed information about each location or incident.
Technologies Used
React: Frontend framework for building the user interface.
Google Maps API: Provides map functionalities and geospatial data.
@react-google-maps/api: Library for integrating Google Maps with React applications.
CSS: Custom styles for a polished and user-friendly interface.
Getting Started
Clone the Repository:
bash
Copy code
git clone https://github.com/yourusername/lpu-campus-map.git
Navigate to the Project Directory:
bash
Copy code
cd lpu-campus-map
Install Dependencies:
bash
Copy code
npm install
Set Up Google Maps API Key:
Create a .env file in the root directory and add your API key:
makefile
Copy code
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
Start the Development Server:
bash
Copy code
npm start
Folder Structure
bash
Copy code
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
Contributing
Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
