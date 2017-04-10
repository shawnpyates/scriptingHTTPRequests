const https = require('https');

function getAndPrintHTML() {

  const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
  }

  https.get(requestOptions, (response) => {
    response.setEncoding('utf8');
    let responseString = "";
    response.on('data', (data) => {
      responseString += data;
    });
    response.on('end', () => {
      console.log(responseString);
    });
  });
}

getAndPrintHTML();