// Settings for the map goes inside this file
import mapStyles from './mapStyles';

export const containerStyle = {
  width: '100%',
  height: '100vh'
};

// Center on UTS
export const center = {
  lat: -33.8837,
  lng: 151.2007
};

// Add custom UI with required options
export const options = {
  styles: mapStyles,
  zoomControl: false,
  streetViewControl: false,
  clickableIcons: false,
  mapTypeControl: false,
  fullscreenControl: false,
  gestureHandling: "none",
};
