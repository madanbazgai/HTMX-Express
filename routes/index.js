import express from "express";
import convert from "./convert.js";
import email from "./email.js";
import polling from "./poll.js";
import profile from "./profile.js";
import search from "./search.js";
import temperature from "./temperature.js";
import users from "./user.js";

import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

router.use("/convert", convert);
router.use("/contact/email", email);
router.use("/polling", polling);
router.use("/profile/:id/edit", profile);
router.use("/search/api", search);
router.use("/get-temperature", temperature);
router.use("/users", users);

export default router;
