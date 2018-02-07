import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello');
});

const instance = server.listen(8000, () => {
    const address = instance.address().address;
    const port = instance.address().port;

    console.log(`\x1b[34mServer listening on ${address}${port}\x1b[0m`);
});
