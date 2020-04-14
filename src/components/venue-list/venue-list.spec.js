import React from "react";
import ReactDOM from "react-dom";

import ConnectedComponent from "./venue-list";

const VenueList = ConnectedComponent.WrappedComponent;

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<VenueList venues={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should display loading message when isFetching and venues.length is 0", () => {
  const venues = [];
  const wrapper = shallow(<VenueList isFetching={true} venues={venues} />);
  const message = wrapper.find(".c-venue-list__message");

  expect(message.length).toBe(1);
  expect(message.text()).toContain("Loading...");
});

it("should display dropdown when isFetching is false", () => {
  const venues = [];
  const wrapper = shallow(<VenueList isFetching={false} venues={venues} />);
  const dropdown = wrapper.find(".c-venue-list__dropdown");

  expect(dropdown.length).toBe(1);
});

it("should display dropdown with results when isFetching is false and venues.length is more than 0", () => {
  const venues = [
    {
      name: "test name",
      address: "test address",
    },
  ];

  const wrapper = shallow(<VenueList isFetching={false} venues={venues} />);
  const dropdown = wrapper.find(".c-venue-list__dropdown");
  const results = wrapper.find(".c-venue-list__ul");

  expect(dropdown.length).toBe(1);
  expect(results.length).toBe(1);
});

it("should display dropdown with no results message when isFetching is false and venues.length is 0", () => {
  const venues = [];
  const wrapper = shallow(<VenueList isFetching={false} venues={venues} />);
  const dropdown = wrapper.find(".c-venue-list__dropdown");
  const message = wrapper.find(".c-venue-list__message");

  expect(dropdown.length).toBe(1);

  expect(message.length).toBe(1);
  expect(message.text()).toContain("No venues found");
});
