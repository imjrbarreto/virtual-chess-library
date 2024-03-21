const Joi = require('joi');

const id = Joi.string().uuid();
const title = Joi.string().min(5).max(20);
const description = Joi.string().min(15).max(200);
const image = Joi.string().uri();
const year = Joi.number().integer();

const createBookSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  image: image.required(),
  year: year.required()
});

const updateBookSchema = Joi.object({
  title: title,
  description: description,
  image: image,
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
