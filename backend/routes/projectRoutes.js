import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createProject,
  deleteProjectById,
  getAllProjects,
  getProjectById,
  updateProjectById,
} from "../controllers/projectController.js";

const router = express.Router();

router.use(protect);

router.post("/", createProject);
router.get("/", getAllProjects);

router.get("/:projectId", getProjectById);
router.put("/:projectId", updateProjectById);
router.delete("/:projectId", deleteProjectById);

export { router as projectRoutes };
