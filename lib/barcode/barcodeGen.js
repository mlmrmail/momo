// connect to a webservice and generate the QR code bar based on the code sent
const superagent = require('superagent');

function getQRCode(stringToEncode) {
  const WIDTH = 100;
  const HEIGTH = 100;
  const URL = `http://api.qrserver.com/v1/create-qr-code/?data=${stringToEncode}size=${WIDTH}x${HEIGTH}`;

  superagent
  .get(URL)
  .then((response) => {
    console.log(response.body);
    return response.body;
  });
}


module.exports = {
  getQRCode,
};
