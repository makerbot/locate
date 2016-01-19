### Status
##### Latest Build
[![Circle CI](https://circleci.com/gh/makerbot/locate.svg?style=svg&circle-token=0cc22730c167baa8a46ea462e47f783b582b9e1c)](https://circleci.com/gh/makerbot/locate)
##### Master Build
[![Circle CI](https://circleci.com/gh/makerbot/locate/tree/master.svg?style=svg&circle-token=0cc22730c167baa8a46ea462e47f783b582b9e1c)](https://circleci.com/gh/makerbot/locate/tree/master)

### Use
*Note: This is a very thin wrapper over https://github.com/nchaulet/node-geocoder*
```js
var locate = require('makerbot-locate');
locate('11201', function(err, result) {
  if (err) console.error(err);
  console.log(result);
  /* [{
    formattedAddress: 'Brooklyn, NY 11201, USA',
    latitude: 40.6986772,
    longitude: -73.9859414,
    extra:
     { googlePlaceId: 'ChIJ10KLdUlawokRxmIQu1GuCHk',
       confidence: 0.5,
       premise: null,
       subpremise: null,
       neighborhood: null,
       establishment: null },
    administrativeLevels: { level1long: 'New York', level1short: 'NY' },
    zipcode: '11201',
    city: 'New York',
    country: 'United States',
    countryCode: 'US'
  }] */
});
```
Results are memoized so subsequent calls with the same address string should return almost instantly.
