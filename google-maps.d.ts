declare global {
    interface Window {
      google: {
        maps: {
          Geocoder: typeof google.maps.Geocoder;
        };
      };
    }
  }