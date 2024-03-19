const express = require('express');
const PublisherService = require('../services/publisher.service');
const { getPublisherSchema, createPublisherSchema, updatePublisherSchema } = require("../schemas/publisher.schema")
const validatorHandler = require('../middleware/validator.handler');

const router = express.Router();

const publisherService = new PublisherService();

router.get('/',
  async (req, res) => {
    const publishers = await publisherService.find();
    res.json(publishers);
  }
);

router.get('/:id', 
  validatorHandler(getPublisherSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const publisher = await publisherService.findOne(id);
      res.send(publisher);
    } catch (err) {
      next(err)
    }
  }
);

router.post('/', 
  validatorHandler(createPublisherSchema, 'body'),
  async (req, res) => {
    const publisherRequest = req.body;
    const newPublisher = await publisherService.create(publisherRequest);
    res.status(201).json(newPublisher);
  }
);

router.patch('/:id',
  validatorHandler(getPublisherSchema, 'params'),
  validatorHandler(updatePublisherSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      const publisher = await publisherService.update(id, updatedData);
      res.json(publisher);
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', 
  validatorHandler(getPublisherSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedPublisherId = await publisherService.delete(id);
      res.json(deletedPublisherId)
    } catch (error) {
      next(error)
    }
  }
);

module.exports = router;