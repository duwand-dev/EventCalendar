import { Request, Response } from "express";
import { Event } from "../models/Event";
import mongoose from "mongoose";

export const AddEvent = async (req: Request, res: Response) => {
  const { email, time, eventName, description } = req.body;

  try {
    const result = await new Event({
      email,
      time,
      eventName,
      description,
    }).save();
    res.send({ res: "Success", data: result });
  } catch (err) {
    console.log(err);
  }
};
