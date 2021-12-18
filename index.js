const jsonServer = require('json-server');
const server = jsonServer.create();
const jsonData = require('./db.json');

jsonData.data = jsonData.data.sort((a, b) => {
    return a.id - b.id;
});;

const router = jsonServer.router(jsonData);

const port = process.env.PORT || 3000;

const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}

server.use(cors(corsOptions));

server.use(router);

server.listen(port, () => {
    console.log(`App running at http://localhost:${port}/data`);
});