import asyncHandler from "express-async-handler";
import { createProjectSchema } from "../schemas/projectSchema.js";
import Project from "../models/projectModel.js";

// @description Create New Project
// @route POST /api/projects/
// @access Private
export const createProject = asyncHandler(async (req, res) => {
  const value = await createProjectSchema.validateAsync(req.body, {
    errors: {
      wrap: {
        label: "",
      },
    },
  });

  const { name } = value;

  const newProject = await Project.create({ name, userId: req.user._id });

  res.status(201).json({
    success: true,
    project: newProject,
  });
});

// @description Get All Projects for the current user
// @route GET /api/projects/
// @access Private
export const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ userId: req.user._id });

  res.json({
    success: true,
    projects,
  });
});

// @description Get Project By Id
// @route GET /api/projects/:projectId
// @access Private
export const getProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  const project = await Project.findById(projectId);

  if (!project || project.userId !== req.user._id) {
    res.status(400);
    throw new Error("Invalid Project Id");
  }

  res.json({
    success: true,
    project,
  });
});

// @description Update a Project By Id
// @route PUT /api/projects/:projectId
// @access Private
export const updateProjectById = asyncHandler(async (req, res) => {
  res.send("Update Project");
});

// @description Delete Project by Id
// @route DELETE /api/projects/:projectId
// @access Private
export const deleteProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  const project = await Project.findById(projectId);

  if (!project || project.userId !== req.user._id) {
    res.status(400);
    throw new Error("Invalid Project Id");
  }

  await project.remove();

  res.status(204).json({
    success: true,
    message: "Project Removed Successfully",
  });
});
