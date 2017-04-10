const https = require('https');

module.exports = function getHTML(options, callback) {

  let passedOptions = {
  host: options.host,
  path: options.path
  }
  https.get(passedOptions, (response) => {
    response.setEncoding('utf8');
    let responseString = "";
    response.on('data', (data) => {
      responseString += data;
    });
    response.on('end', () => {
      callback(responseString);
    });
  });
};
