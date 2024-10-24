import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  email: { type: String },
  time: { type: Date },
  eventName: { type: String },
  description: { type: String },
});

export const Event = mongoose.model("Event", schema);
