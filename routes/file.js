import express from "express";
import upload from "../middlewares/upload.js";
import File from "../models/file.js";
const router = express.Router();

router.get("/file/:id", async (req, res) => {
  try {
    const file = await File.findById(req.params.id);
    if (!file)
      return res.status(404).send("The file with the given ID was not found.");

    file.downloadCount++;
    await file.save();
    res.download(file.path, file.name);
  } catch (e) {
    res.status(500).send("Something failed.");
  }
});

router.post("/upload", upload.single("file"), async (req, res) => {
  const file = new File({
    path: req.file.path,
    name: req.file.originalname,
  });
  try {
    await file.save();
    res.send({ path: `http://localhost:8000/api/file/${file._id}` });
  } catch (e) {
    res.status(500).send("somethinmg failed.");
  }
});

export default router;
