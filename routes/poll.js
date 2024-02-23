import express from "express";
const router = express.Router();

let counter = 0;

// Handle GET request for polling example
router.get("/", (req, res) => {
  counter++;

  const data = { value: counter };

  res.json(data);
});

export default router;
