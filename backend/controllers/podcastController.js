import asyncHandler from "express-async-handler";
import { createPodcastSchema } from "../schemas/podcastSchema.js";
import Podcast from "../models/podcastModel.js";

// @description Create New Podcast
// @route POST /api/podcasts
// @access Private
export const createPodcast = asyncHandler(async (req, res) => {
  const value = await createPodcastSchema.validateAsync(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });

  const { name, transcript, projectId } = value;

  const newPodcast = await Podcast.create({
    name,
    transcript,
    projectId,
    userId: req.user._id,
  });

  res.status(201).json({
    success: true,
    podcast: {
      _id: newPodcast._id,
      name: newPodcast.name,
      createdAt: newPodcast.createdAt,
      updatedAt: newPodcast.updatedAt,
    },
  });
});

// @description Get All Podcast for the current project
// @route GET /api/podcasts/project/:projectId
// @access Private
export const getAllPodcasts = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const podcasts = await Podcast.find({
    projectId,
    userId: req.user._id,
  }).select(["_id", "name", "createdAt", "updatedAt", "projectId"]);

  res.json({
    success: true,
    podcasts,
  });
});

// @description Get Podcast By Id
// @route GET /api/podcasts/:podcastId
// @access Private
export const getPodcastById = asyncHandler(async (req, res) => {
  const { podcastId } = req.params;
  const podcast = await Podcast.findById(podcastId);

  if (!podcast || !podcast.userId.equals(req.user._id)) {
    res.status(400);
    throw new Error("Podcast Not Found");
  }

  res.json({
    success: true,
    podcast: {
      _id: podcast._id,
      name: podcast.name,
      transcript: podcast.transcript,
      createdAt: podcast.createdAt,
      updatedAt: podcast.updatedAt,
    },
  });
});

// @description Update a Podcat By Id
// @route PUT /api/podcasts/:podcastId
// @access Private
export const updatePodcastById = asyncHandler(async (req, res) => {
  const { podcastId } = req.params;
  const { name, transcript } = req.body;

  const podcast = await Podcast.findById(podcastId);

  if (!podcast || !podcast.userId.equals(req.user._id)) {
    res.status(400);
    throw new Error("Podcast Not Found");
  }

  podcast.name = name || podcast.name;
  podcast.transcript = transcript || podcast.transcript;

  await podcast.save();

  res.status(200).json({ success: true, podcast });
});

// @description Delete Podcast by Id
// @route DELETE /api/podcasts/:podcastId
// @access Private
export const deletePodcastById = asyncHandler(async (req, res) => {
  const { podcastId } = req.params;
  const podcast = await Podcast.findById(podcastId);

  if (!podcast || !podcast.userId.equals(req.user._id)) {
    res.status(400);
    throw new Error("Invalid Podcast Id");
  }

  await Podcast.findByIdAndDelete(podcast._id);

  res.status(204).json({
    success: true,
    message: "Podcast Removed Successfully",
  });
});
