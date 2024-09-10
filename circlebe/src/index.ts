import dotenv from "dotenv";
import express, { Express } from "express";
import { HelloController } from "./controllers/hello.controller";
import { uploadFile } from "./middlewares/upload-file";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", uploadFile, HelloController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
