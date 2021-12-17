const jsonServer = require('json-server');
const server = jsonServer.create();
const jsonData = require('./db.json');

const data = jsonData.data.map((item) => {
    return item;
}).sort((a, b) => {
    return a.id - b.id;
});

jsonData.data = data;

const router = jsonServer.router(jsonData);

const port = process.env.PORT || 3000;

server.use(router);

server.listen(port, () => {
    console.log(`App running at http://localhost:${port}/data`);
});