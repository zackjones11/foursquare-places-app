import React from "react";
import ReactDOM from "react-dom";
import ConnectedComponent from "./SearchBar";

const SearchBar = ConnectedComponent.WrappedComponent;

it("renders without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(
    <SearchBar fetchVenues={() => {}} hasUsersLocation={false} />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("should display fetching location message when hasUsersLocation is false", () => {
  const wrapper = shallow(
    <SearchBar fetchVenues={() => {}} hasUsersLocation={false} />
  );
  expect(wrapper.find("input").props().placeholder).toContain("Getting location...");
});

it("should search venues message when hasUsersLocation is true", () => {
  const wrapper = shallow(
    <SearchBar fetchVenues={() => {}} hasUsersLocation={true} />
  );
  expect(wrapper.find("input").props().placeholder).toContain("What kind of venue?");
});

it("should not have a submit button when hasUsersLocation is false", () => {
  const wrapper = shallow(
    <SearchBar fetchVenues={() => {}} hasUsersLocation={false} />
  );
  expect(wrapper.find(`button[type="submit"]`)).toHaveLength(0);
});

it("should have a submit button when hasUsersLocation is true", () => {
  const wrapper = shallow(
    <SearchBar fetchVenues={() => {}} hasUsersLocation={true} />
  );
  expect(wrapper.find(`button[type="submit"]`)).toHaveLength(1);
});
