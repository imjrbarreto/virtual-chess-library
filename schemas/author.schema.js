const Joi = require('joi')

const id = Joi.string().uuid();
const name = Joi.string().min(5).max(50);
const image = Joi.string().uri();
const description = Joi.string().min(15).max(255);
const country = Joi.string().min(4).max(50);

const createAuthorSchema = Joi.object({
  name: name.required(),
  image: image.optional(),
  description: description.optional(),
  country: country.required()
});

const updateAuthorSchema = Joi.object({
  name: name, 
  image: image,
  description: description,
  country: country
})

const getAuthorSchema = Joi.object({
  id: id.required()
});


module.exports = {
  getAuthorSchema,
  createAuthorSchema,
  updateAuthorSchema
}