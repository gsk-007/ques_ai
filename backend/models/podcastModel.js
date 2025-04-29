import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    transcript: { type: String },
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Podcast = mongoose.model("Podcast", podcastSchema);

export default Podcast;
