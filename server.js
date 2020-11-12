const express = require("express");
const path = require("path");
const app = express();

// set a templating engine
app.set("view engine", "pug");

app.set("views", path.resolve("./src/views"));

// requesting parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// creating express router
const router = express.Router();
app.use(router);

const rootPath = path.resolve("./dist");
app.use(express.static(rootPath));

// DB connection
require("./src/database/connection");
require("./src/bootstrap")();

router.use((err, req, res, next) => {
  if (err) {
    // handle file type and max size of image
    return res.send(err.message);
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server is running on ${PORT}...`));
