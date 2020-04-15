import React from "react";
import ReactDOM from "react-dom";

import ConnectedComponent from "./map-container";

const MapContainer = ConnectedComponent.WrappedComponent;

const coords = { lat: "51.507351", lng: "-0.127758" };

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <MapContainer venueLocation={coords} usersLocation={coords} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
