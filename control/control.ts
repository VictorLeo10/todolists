import todoModel from "../model/model";
import { Request, Response } from "express";

const todo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { task, description, status } = req.body;
    const newList = await todoModel.create({ task, description, status });
    return res.status(200).json({
      message: `created new list`,
      data: newList,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong: ${error}`,
    });
  }
};

const getall = async (req: Request, res: Response): Promise<Response> => {
  try {
    const allTasks = await todoModel.find();
    return res.status(200).json({
      message: `got all tasks`,
      data: allTasks,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong: ${error}`,
    });
  }
};

const getOne = async (req: Request, res: Response): Promise<Response> => {
  try {
    const oneTask = await todoModel.findById(req.params.id);
    return res.status(200).json({
      message: `got task`,
      data: oneTask,
    });
  } catch (error) {
    return res.status(400).json({
      message: `something went wrong: ${error}`,
    });
  }
};

export { todo, getall, getOne };
