'use strict';

if (!process.env.GOOGLE_API_KEY) {
  throw new Error('Missing environment variable GOOGLE_API_KEY');
}

const memoize = require('memoizee');
const geocoder = require('node-geocoder')('google', 'https', {
    apiKey: process.env.GOOGLE_API_KEY,
    // formatter: null         // 'gpx', 'string', ...
});

module.exports = memoize(function locate(address, callback) {
  geocoder.geocode(address, callback);
}, { async: true });
