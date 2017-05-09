// connect to a webservice and generate the QR code bar based on the code sent
const superagent = require('superagent');

function getQRCode(stringToEncode) {
  return new Promise((resolve, reject) => {
    const WIDTH = 100;
    const HEIGTH = 100;
    const URL = `http://api.qrserver.com/v1/create-qr-code/?data=${stringToEncode}size=${WIDTH}x${HEIGTH}`;
    superagent
    .get(URL)
    .then((response) => {
      resolve(response.body);
    })
    .catch((err) => {
      console.log('an error occured !');
      reject(`Error occured !${err.message}`);
    });
  });
}


module.exports = {
  getQRCode,
};
