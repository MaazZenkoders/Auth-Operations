const express = require("express");
const dotenv = require("dotenv")
dotenv.config()
const authRouter = require("./src/routes/auth.router");

const app = express();
const port = 3000;
app.use(express.json());

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
