////////// //////////////////////////HTTP BASICS///////////////////// ///////////////

// const http = require('http');
// const { readFileSync } = require('fs');

// const completeHtml = readFileSync('./navbar-app/index.html');
// const completeCss = readFileSync('./navbar-app/styles.css');
// const completeJs = readFileSync('./navbar-app/browser-app.js');
// const logo = readFileSync('./navbar-app/logo.svg');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   const method = req.method;
//   console.log(url);

//   //home page
//   if (url === '/') {
//     console.log(method);

//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Home Page</h1>');
//     res.end();
//   }

//   //private page
//   else if (url === '/private') {
//     res.end('bro code is here nothing to fear');
//   }

//   //complete html
//   else if (url === '/complete') {
//     res.writeHead(200, { 'content-type': 'text/html' });
//     res.write(completeHtml);
//     res.end();
//   } else if (url === '/styles.css') {
//     res.writeHead(200, { 'content-type': 'text/css' });
//     res.write(completeCss);
//     res.end();
//   } else if (url === '/browser-app.js') {
//     res.writeHead(200, { 'content-type': 'text/js' });
//     res.write(completeJs);
//     res.end();
//   } else if (url === '/logo.svg') {
//     res.writeHead(200, { 'content-type': 'image/svg+xml' });
//     res.write(logo);
//     res.end();
//   } else {
//     console.log(method);
//     res.writeHead(404, { 'Content-Type': 'text/html' });
//     res.write('<h1>Page not Found !</h1>');
//     res.end();
//   }
// });

// server.listen(5000);

///////////////////////////////EXPRESS BASICS ///////////////////////////////////////////
// also
// const app = require('express')();

// const express = require('express');
// const app = express();
// const PORT = 5000;

// app.get('/', (req, res) => {
//   res.status(200).send('new Home Page');
// });

// app.get('/about', (req, res) => {
//   res.status(200).send('new About Page');
// });

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>Resource not found !</h1>');
// });

// app.listen(5000, () => {
//   console.log(`server is listening on port : ${PORT} `);
// });

// //http verbs //just represents what the user is trying to do
// //app.get // read
// //app.post //insert
// //app.put //update
// //app.delete //delete

// // below all
// //app.all //works with all of them -- means with all verbs

// //app.use // if you can't find a resource on server and abduct , then app.use is responsible for middleware
// //app.listen

///////////////////////////////EXPRESS STATIC ///////////////////////////////////////////
// const express = require('express');
// const path = require('path');

// const app = express();

// //setup static and middleware
// app.use(express.static('./public'));

// //without doing this below thing of sending html file , we can also add html directly to static folder(assets)--method1
// // app.get('/', (req, res) => {
// //   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
// // });
// // second method (server side rendering)(SSR)(will use template engine for that)

// app.all('*', (req, res) => {
//   res.status(404).send('PAGE NOT FOUND');
// });

// app.listen(5000, () => {
//   console.log(`Server is running on port 5000`);
// });

///////////////////////////EXPRESS PARAMS AND QUERY STRING /////////////////////////////////////////////
// const express = require('express');
// const app = express();

// const { products } = require('./data');

// // app.get('/', (req, res) => {
// //   res.json([{ name: 'raghav' }, { name: 'guddan' }]);
// // });

// // app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('<h1>home page</h1><a href="/api/products">products</a>');
// });

// app.get('/api/products', (req, res) => {
//   const newProducts = products.map((product) => {
//     const { id, name, image } = product;
//     return { id, name, image };
//   });
//   res.json(newProducts);
// });

// app.get('/api/products/:id', (req, res) => {
//   const singleProduct = products.find(
//     (product) => product.id === +req.params.id
//   );
//   // console.log(req.params);
//   if (!singleProduct) return res.status(404).send(`product doesn't exist`);

//   return res.json(singleProduct);
// });

// //route parameters
// app.get('/api/products/:id/reviews/:reviewId', (req, res) => {
//   console.log(req.params);
//   res.send('hello world');
// });

// //url parameters (query string parameters)
// app.get('/api/v1/query', (req, res) => {
//   console.log(req.query);
//   const { search, limit } = req.query;
//   let sortedProducts = [...products];

//   if (search) {
//     sortedProducts = sortedProducts.filter((product) =>
//       product.name.startsWith(search)
//     );
//   }
//   if (limit) {
//     sortedProducts = sortedProducts.slice(0, +limit);
//   }
//   if (sortedProducts.length < 1) {
//     // res.status(200).send('no products matched your search');
//     return res.status(200).json({ success: true, data: [] });
//   }
//   res.status(200).send(sortedProducts);
// });

// app.all('*', (req, res) => {
//   res.send('<h1>Page not Found </h1>');
// });

// app.listen(5000, (req, res) => {
//   console.log('server is listening at port 5000');
// });

/////////////////////////////////// MIDDLEWARE OPTIONS /////////////////////////////////////////
// const express = require('express');
// const app = express();
// const morgan = require('morgan');
// const logger = require('./logger');
// const authorize = require('./authorize');
// //req => middleware => res

// // app.use([authorize, logger]);
// //app.use(express.static('./public'))

// app.use(morgan('tiny'));
// app.get('/', (req, res) => {
//   res.send('home');
//   console.log(`I am the 2 one`);
// });

// app.get('/about', (req, res) => {
//   console.log(`I am the 2 one`);
//   res.send('about');
// });

// app.get('/api/products', (req, res) => {
//   console.log(`I am the 2 one`);
//   res.send('products');
// });

// app.get('/api/items/category', [logger, authorize], (req, res) => {
//   console.log(`I am the 2 one`);
//   res.send('Items');
// });

// app.listen(5000, (req, res) => {
//   console.log(`server is running at port 5000`);
// });

//////////////////////////////////////////////////////////////////////////////////////
