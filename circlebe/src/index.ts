import dotenv from "dotenv";
import express, { Express } from "express";
import { HelloController } from "./controllers/hello.controller";
import { uploadFile } from "./middlewares/upload-file";
import userController from "./controllers/user.controller";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", uploadFile, HelloController);

app.get("/users", userController.find);
app.get("/users/:id", userController.findById);
app.get("/users/email/:email", userController.findByEmail);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
