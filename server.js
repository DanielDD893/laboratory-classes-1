const http = require('http');
const { PORT } = require('./config');
const requestRouting = require('./routing/routing.js');

const requestListener = (request, response) => {
    requestRouting(request, response);
};

const server = http.createServer(requestListener);

server.listen(PORT, () => {
    console.log(`Server dziala na porcie ${PORT}`);
});