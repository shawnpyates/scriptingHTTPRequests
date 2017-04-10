const getHTML = require('../http-functions');

let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printHTML(html) {
  let reverseString = "";
  let htmlArray = html.split(" ");
  console.log(htmlArray);
    for (let i = htmlArray.length - 1; i >= 0; i--) {
    let reverseWord = "";
    for (let j = htmlArray[i].length - 1; j >= 0; j--) {
      reverseWord += htmlArray[i][j];
    }
    reverseString += reverseWord + " ";
  }
  console.log(reverseString);
}

getHTML(requestOptions, printHTML);

