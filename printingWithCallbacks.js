const https = require('https');
let arg = process.argv[2];

function getHTML(options, callback) {
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
}

function printHTML(html) {
  console.log(html);
}

let splitOptions = arg.split("/");
let joinPath = splitOptions.slice(1).join("/");

let requestOptions = {
  host: `${splitOptions[0]}`,
  path: `/${joinPath}`
};

getHTML(requestOptions, printHTML);

