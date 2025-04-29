import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createPodcast,
  deletePodcastById,
  getAllPodcasts,
  getPodcastById,
  updatePodcastById,
} from "../controllers/podcastController.js";

const router = express.Router();

router.use(protect);

router.post("/", createPodcast);

router
  .route("/:podcastId")
  .get(getPodcastById)
  .put(updatePodcastById)
  .delete(deletePodcastById);

router.get("/project/:projectId", getAllPodcasts);

export { router as podcastRoutes };
