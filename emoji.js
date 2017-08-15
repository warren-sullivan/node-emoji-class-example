const emoji = require('node-emoji');
const https = require('https');
const http = require('http');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

let data;
let array = [];

const server = http.createServer((req, res) => {
	res.write(array[getRandomInt(0, array.length)]);
	res.end();
});

const options = {
  host: 'raw.githubusercontent.com',
  port: 443,
  path: '/omnidan/node-emoji/master/lib/emoji.json',
  method: 'GET'
};

let req = https.request(options, (res) => {
	res.setEncoding('utf8');
	res.on('data', (chunk) => {
		if(!data) {data = chunk}
		else {data += chunk}
	});
	res.on('end', () => {
		data = JSON.parse(data);
		for(i in data) {
			array.push(data[i]);
		}

		// for(i in array) {
		// 	console.log(array[i]);
		// }

		server.listen(8001);
	});
});

req.end();
