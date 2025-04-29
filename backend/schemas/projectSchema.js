import Joi from "joi";

export const createProjectSchema = Joi.object({
  name: Joi.string().required(),
});
