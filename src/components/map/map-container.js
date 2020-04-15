import React from "react";
import { connect } from "react-redux";
import Spinner from "../spinner/spinner";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GOOGLE_MAPS_API_KEY } from "../../constants/google-maps-api";

const MapContainer = ({ google, usersLocation, venueLocation }) => {
  const location = venueLocation.lat ? venueLocation : usersLocation;
  return (
    <Map
      google={google}
      zoom={venueLocation.lat ? 16 : 14}
      mapTypeControl={false}
      fullscreenControl={false}
      style={{
        width: "100%",
        height: "100%",
      }}
      initialCenter={location}
      center={location}
    >
      <Marker position={location} />
    </Map>
  );
};

const LoadingContainer = () => (
  <Spinner
    style={{
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto",
    }}
  />
);

const mapStateToProps = (state) => ({
  usersLocation: state.geolocation.usersLocation,
  venueLocation: state.venues.selectedVenue.location,
});

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_API_KEY,
    LoadingContainer,
  })(MapContainer)
);
