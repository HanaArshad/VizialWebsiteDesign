import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { containerStyle, center, options } from './settings';


interface MapComponentProps {
  aiOutput: Array<{ index: number; level: number}>;
}

export const MapComponent: React.FC<MapComponentProps> = ({ aiOutput }) => {
  console.log('MapComponent rendered!');
  console.log('ai data loaded', aiOutput);

  const mapRef = React.useRef<google.maps.Map | null>(null);

  const onLoad = async (map: google.maps.Map): Promise<void> => {
    console.log('Map Loaded!');
    mapRef.current = map;
  
    // Load GeoJSON data
    await loadGeoJson();
  
    // Update the map style after loading GeoJSON 
    updateMapStyle();
  };
  
  const loadGeoJson = async (): Promise<void> => {
    try {
      //CHANGE FILE PATH TO YOUR GEOJSON FILE
      const response = await fetch("./map.geojson");
      const geoJsonData = await response.json();
  
      const updatedGeoJsonData = {
        ...geoJsonData,
        features: geoJsonData.features.map((feature: any) => {
          const index = feature.properties.index;
          const aiInfo = aiOutput.find((info) => info.index === index);
  
          return {
            ...feature,
            properties: {
              ...feature.properties,
              aiInfo: aiInfo || null,
            },
          };
        }),
      };
      
      // Clear existing features and add the updated features to the map
      mapRef.current?.data.forEach((feature: google.maps.Data.Feature) => {
      mapRef.current?.data.remove(feature);
      });

      mapRef.current?.data.addGeoJson(updatedGeoJsonData);
      console.log('GeoJSON Loaded!', updatedGeoJsonData);
      console.log('Calling updateMapStyle from loadGeoJson');
      updateMapStyle();
    } catch (error) {
    console.error('Error loading GeoJSON:', error);
  }};

  const onUnmount = (): void => {
    mapRef.current = null;
  };

  const updateMapStyle = (): void => {
    console.log('Updating map style...');

    mapRef.current?.data.forEach((feature: google.maps.Data.Feature) => {
      const index = feature.getProperty('index');
      
      // Finds the last entry in aiOutput with the same index
      const latestAiInfo = [...aiOutput].reverse().find(info => info.index === index);
  
      let color = 'black'; // Default color
      if (latestAiInfo) {
        const level = latestAiInfo.level;
  
        if (level === 0) {
          color = 'grey';
        } else if (level === 1) {
          color = 'green';
        } else if (level === 2) {
          color = 'yellow';
        } else if (level === 3) {
          color = 'red';
        } else
        color = 'black';
      }
      

  
      mapRef.current?.data.overrideStyle(feature, {
        fillColor: color,
        strokeColor: color,
        strokeWeight: 1,
        fillOpacity: 0.8,
      });
      
      const filteredFeatures: google.maps.Data.Feature[] = [];

      // Collect features of certain colors to be used for filtering
      if (color !== 'red') {
        filteredFeatures.push(feature);
      }

      // Remove features of a certain color from the map
      filteredFeatures.forEach((feature) => {
        mapRef.current?.data.remove(feature);
      });

      console.log('Map style updated.');
    });
  };
  
  useEffect(() => {
    // Initial load or when aiOutput changes, update the map style
    console.log('useEffect triggered on aiOutput change');
    loadGeoJson();
  }, [aiOutput]);

  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    //ADD API KEY BELOW WITHIN QUOTATION MARKS
    googleMapsApiKey: "AIzaSyBTiTnwUxT-vPWNZqsCYk82ayJyrxygAn0",
  });

  if (loadError) {
    console.error('Google Maps API load error:', loadError);
    return <div>Error loading Google Maps API</div>;
  }

  if (!isLoaded) {
    console.log('Google Maps API is still loading...');
    return <div>Map Loading ...</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        options={options as google.maps.MapOptions}
        center={center}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
      />
      </div>
  );    
};
