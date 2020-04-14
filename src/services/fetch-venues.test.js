import * as axios from "axios";
import { fetchVenues } from "./fetch-venues";

jest.mock("axios");

const listOfVenues = [
  {
    venue: {
      id: "4f741e647716f0913c2e63d4",
      location: {
        formattedAddress: [
          "48-80 Greenwich High Road",
          "Greenwich",
          "Greater London",
          "SE10 8JL",
          "United Kingdom",
        ],
      },
      name: "PureGym",
    },
  },

  {
    venue: {
      id: "4f741e647716f0913c2e63d4",
      location: {
        formattedAddress: [
          "48-80 Greenwich High Road",
          "Greenwich",
          "Greater London",
          "SE10 8JL",
          "United Kingdom",
        ],
      },
      name: "PureGym 2",
    },
  },

  {
    venue: {
      id: "4f741e647716f0913c2e63d4",
      location: {
        formattedAddress: [
          "48-80 Greenwich High Road",
          "Greenwich",
          "Greater London",
          "SE10 8JL",
          "United Kingdom",
        ],
      },
      name: "PureGym 3",
    },
  },
];

describe("explore venues foursquare api service", () => {
  it("Fetches venues from Foursquare API", async () => {
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          response: {
            groups: [
              {
                type: "Recommended Places",
                name: "recommended",
                items: listOfVenues,
              },
            ],
          },
        },
      })
    );

    const lat = "51.507877";
    const long = "-0.087732";

    const venues = await fetchVenues({ lat, long });

    expect(venues).toEqual({
      data: {
        response: {
          groups: [
            {
              type: "Recommended Places",
              name: "recommended",
              items: listOfVenues,
            },
          ],
        },
      },
    });

    expect(axios.get).toHaveBeenCalledTimes(1);
  });
});
