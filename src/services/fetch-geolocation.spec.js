import { fetchGeoLocation } from "./fetch-geolocation";

describe("fetch geolocation service", () => {
  it("Fetches location via navigator.geolocation", async () => {
    const spy = jest.spyOn(window.navigator.geolocation, "getCurrentPosition");
    const location = await fetchGeoLocation();

    expect(location).toEqual({
      data: {
        latitude: "111",
        longitude: "222",
      },
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
