import mongoose from "mongoose";

const VisualDataSchema = mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insights: String,
  url: String,
  region: String,
  start_year: Number,
  impact: Number,
  added: Date,
  published: Date,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});

export default mongoose.model("VisualData", VisualDataSchema);
