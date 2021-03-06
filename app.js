// Setting up the local server with http module

const http = require('http'); // http module 
const fs = require('fs'); // file system module

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
	if(err) {
		throw err;
	}
	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log('Server Started on Port '+port+' OPEN THE BROWSER NOW!!'); // message in console
	});
});


