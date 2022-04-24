const { urlencoded } = require("express");
const express = require("express");
const app = express();
const port = 5000;

// Body Parser
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on localhost:${port}`);
});
