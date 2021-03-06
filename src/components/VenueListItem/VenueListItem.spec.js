import React from "react";
import ReactDOM from "react-dom";
import { VenueListItem, styles } from "./";

describe("VenueListItem", () => {
  const venue = {
    name: "test name",
    location: {
      formattedAddress: ["test address", "test"],
    },
  };

  it("renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(<VenueListItem venue={venue} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should display name and address", () => {
    const wrapper = shallow(<VenueListItem venue={venue} />);
    const name = wrapper.find(`.${styles.name}`);
    const address = wrapper.find(`.${styles.address}`);

    expect(name.length).toBe(1);
    expect(name.text()).toBe("test name");

    expect(address.length).toBe(1);
    expect(address.text()).toBe("test address, test");
  });
});
