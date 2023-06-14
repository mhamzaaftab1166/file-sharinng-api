import express from "express";
import file from "../routes/file.js";
import cors from "cors";
export default function routes(app) {
  app.use(express.json());
  app.use(cors());
  app.use("/", file);
}
