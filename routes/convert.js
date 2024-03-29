import express from "express";
const router = express.Router();

// Handle POST request for temp conversion
router.post("/", (req, res) => {
  setTimeout(() => {
    const fahrenheit = parseFloat(req.body.fahrenheit);
    const celsius = (fahrenheit - 32) * (5 / 9);

    res.send(`
        <p>
          ${fahrenheit} degrees Farenheit is equal to ${celsius} degrees Celsius
        </p>
      `);
  }, 2000);
});

export default router;
