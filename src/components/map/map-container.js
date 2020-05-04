import React from "react";
import { connect } from "react-redux";
import { Spinner } from "../spinner";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { GOOGLE_MAPS_API_KEY } from "../../constants/google-maps-api";

const MapContainer = ({ usersLocation, venueLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (loadError) {
    alert("Maps cannot be loaded right now.");
    return null;
  }

  const location = venueLocation.lat ? venueLocation : usersLocation;

  return (
    <>
      {isLoaded ? (
        <GoogleMap
          zoom={venueLocation.lat ? 16 : 14}
          mapContainerStyle={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          initialCenter={location}
          center={location}
          options={{ mapTypeControl: false, fullscreenControl: false }}
        >
          <Marker position={location} />
        </GoogleMap>
      ) : (
        <Spinner absolutePosition />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  usersLocation: state.geolocation.usersLocation,
  venueLocation: state.venues.selectedVenue.location,
});

export default connect(mapStateToProps)(MapContainer);
