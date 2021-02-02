const express = require('express');
const promotionRouter = express.Router();

promotionRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the promotions to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.end('PUT operation not supported on /promotions');
})
.delete((req, res) => {
    res.end('Deleting all promotions');
});

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send all the promotions ${req.params.promotionId} to you from :promotionId`);
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description} from :promotionId`);
})
.put((req, res) => {
    res.end('PUT operation not supported on /promotions from :promotionId');
})
.delete((req, res) => {
    res.end('Deleting all promotions from :promotionId');
});

module.exports = promotionRouter;