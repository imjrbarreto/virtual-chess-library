const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(5).max(20);
const image = Joi.string().uri();
const description = Joi.string().min(15).max(200);
const year = Joi.number().integer();

const createBookSchema = Joi.object({
  name: name.required(),
  image: image.required(),
  description: description.required(),
  year: year.required()
});

const updateBookSchema = Joi.object({
  name: name,
  image: image,
  description: description,
  year: year
});

const getBookSchema = Joi.object({
  id: id.required()
});

module.exports = {
  getBookSchema,
  createBookSchema,
  updateBookSchema
}
