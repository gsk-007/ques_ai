import Joi from "joi";

export const createPodcastSchema = Joi.object({
  name: Joi.string().required(),
  transcript: Joi.string().required(),
  projectId: Joi.string().required(),
});
