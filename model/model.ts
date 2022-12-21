import mongoose from "mongoose";

interface iTodo {
  task: string;
  description: string;
  status: boolean;
}

interface todoInterface extends iTodo, mongoose.Document {}

const todoSchema = new mongoose.Schema(
  {
    task: String,
    description: String,
    status: Boolean,
  },
  { timestamps: true }
);

const todoModel = mongoose.model<todoInterface>("todocollection", todoSchema);

export default todoModel;
