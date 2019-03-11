const Config = {
  locationOptions: {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 30000
  },
  locationiq: {
    key: 'pk.023d5db425d8a45a42cd83361e29037d',
    format: 'json',
    endpoints: {
      reverse: 'https://us1.locationiq.org/v1/reverse.php' // ?key=YOUR_PRIVATE_TOKEN&lat=LATITUDE&lon=LONGITUDE&format=json
    }
  }
};

export default Config;
