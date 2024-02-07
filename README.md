
  # Website Design

  Note: Please ensure you have installed <code><a href="https://nodejs.org/en/download/">nodejs</a></code>

  To preview and run the project on your device:
  1) Open project folder in <a href="https://code.visualstudio.com/download">Visual Studio Code</a>
  2) In the terminal, run `npm install`
  3) Changes for each test location:
     
- Add the GeoJSON file corresponding to your camera locations to the “public” folder
  
- Add the path to your GeoJSON within the “loadGeoJson” function  in each map component file*
  
- Add your Google Maps API key to the “googleMapsApiKey” constant in each map component file*
  
- In “settings.ts” change the “centre” constant to match the latitude and longitude coordinates of your site
  
*Map component files: Map.tsx, Map_level1.tsx, Map_level2.tsx, Map_level3.tsx, Map_dash.tsx

  4) Run `npm start` to view project in browser
  
