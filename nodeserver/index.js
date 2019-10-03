/*So here we are creating a simple server which is a part of core module*/

/*Now we are accessing http library*/
const http = require('http');

/*In the below code we are set the hosting and post to access on browser*/
const hostname = 'localhost';
const port = 4000;

/*Now we are using http module method createServer which create a server and it take
only two either respond or request*/
const server = http.createServer((req, res) =>{

/*The below property is use to get all the data of who gives us request*/
	console.log(req.headers);

	res.statusCode = 200; /*200 means connected it show connection status*/

/*In the below code we are going to set header usin setHeader function to let know 
the request sender that what type of file we respond with*/
	res.setHeader('Content-Type', 'text/html');
	res.end('<html> <body> <h1> Securely connected to server :) </body> </html>');

});

/*Now we see hoe to start server or call the server after creation*/

server.listen(port, hostname, ()=> {   /*here we are using call back function by fatarrow*/
	console.log(`The server is running at http://${hostname}:${port}`);
});