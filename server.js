import express from "express";
import xss from "xss";
import routes from "./routes/index.js";

const app = express();

// Set static folder
app.use(express.static("public"));
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Handle GET request for root
app.use("/", routes);

// Start the server
app.listen(3333, () => {
  console.log("Server listening on port 3000");
});
