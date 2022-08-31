const api = require('./api.js');
let params = { date: '' };

/* A request to /api/:date? with a valid date should return a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
*/
params.date = '2022-02-01';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* A request to /api/:date? with a valid date should return a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT */
params.date = 'Thu, 01 Jan 1970 00:00:00 GMT';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* A request to /api/1451001600000 should return { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" } */
params.date = '1451001600000';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* Your project can handle dates that can be successfully parsed by new Date(date_string) */
params.date = 'October 10, 2022';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* If the input date string is invalid, the api returns an object having the structure { error : "Invalid Date" } */
params.date = 'asdasdcccc';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* An empty date parameter should return the current time in a JSON object with a unix key */
params.date = '';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))

/* An empty date parameter should return the current time in a JSON object with a utc key */
params.date = '';
console.log('Params:', params, 'Timestamp:', api.getTimestamp(params.date))