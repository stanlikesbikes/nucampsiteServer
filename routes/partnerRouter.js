const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all partners to you');
})
.put((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description ${req.body.description}`);
})
.post((req, res) => {
    res.end('PUT operation not supporte on /partners');
})
.delete((req, res) => {
    res.end('Deleting all partners');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all partners ${req.params.partnerId} to you from :partnerId`);
})
.put((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description ${req.body.description} from :partnerId`);
})
.post((req, res) => {
    res.end('PUT operation not supporte on /partners from :partnerId');
})
.delete((req, res) => {
    res.end('Deleting all partners from :partnerId');
});

module.exports = partnerRouter;