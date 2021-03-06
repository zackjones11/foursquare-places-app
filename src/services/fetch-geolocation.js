export const fetchGeoLocation = async () => {
  if (navigator.geolocation) {
    const {
      coords: { latitude, longitude },
    } = await getCurrentPosition({
      maximumAge: Infinity,
      timeout: 60000,
      enableHighAccuracy: true,
    });
    return { data: { lat: latitude, lng: longitude } };
  } else {
    const error = "We cannot get your current location.";
    console.log(error);
    return { error };
  }
};

function getCurrentPosition(options = {}) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
