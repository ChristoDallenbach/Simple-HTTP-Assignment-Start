const fs = require('fs');

const img = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPNG = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png', 'Access-Control-Allow-Origin': '*' });
  response.write(img);
  response.end();
};

module.exports.getPNG = getPNG;
