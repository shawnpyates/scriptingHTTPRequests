const https = require('https');
let arg = process.argv[2];

function getAndPrintHTML(options) {
  let optionsSplit = options.split("/");
  let joinPath = optionsSplit.slice(1).join("/");
  let requestOptions = {
  host: `${optionsSplit[0]}`,
  path: `/${joinPath}`
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

getAndPrintHTML(arg);

