# Foursquare Places App

### Setting up API keys

1) Regiser for a free account at [Foursquare API](https://developer.foursquare.com/)

3) Regiser for a free account at [Google Maps API](https://developers.google.com/maps/documentation/)

4) Add .env file by duplicating .env.example

5) Add your Foursquare API keys to REACT_APP_FOURSQUARE_CLIENT_ID and REACT_APP_FOURSQUARE_CLIENT_SECRET
```
REACT_APP_FOURSQUARE_CLIENT_ID=XXXXX
REACT_APP_FOURSQUARE_CLIENT_SECRET=XXXXX
```

6) Add your Google Maps API key to REACT_APP_GOOGLE_MAPS_KEY
```
REACT_APP_GOOGLE_MAPS_KEY=XXXXX
```

### Starting development server

1) Install npm dependencies
```
npm install
```

2) Start server
```
npm start
```

### Run unit tests

```
npm test
```

```
npm run test:watch
```

### Run linter

```
npm run lint
```

```
npm run lint:fix
```