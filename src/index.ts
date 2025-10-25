import express from "express";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute.ts";

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/Ecommerce")
  .then(() => console.log("mongo connected!"))
  .catch((err) => console.log("failed to connect ", err));

  app.use('/user', userRoute);

  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
