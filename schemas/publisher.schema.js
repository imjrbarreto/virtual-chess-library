const Joi = require('joi')

const id = Joi.string().uuid();
const name = Joi.string().min(5).max(50);
const description = Joi.string().min(15).max(255);

const createPublisherSchema = Joi.object({
  name: name.required(),
  description: description.optional(),
});

const updatePublisherSchema = Joi.object({
  name: name, 
  description: description,
})

const getPublisherSchema = Joi.object({
  id: id.required()
});


module.exports = {
  getPublisherSchema,
  createPublisherSchema,
  updatePublisherSchema
}