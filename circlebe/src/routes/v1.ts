import express from "express";
import { uploadFile } from "../middlewares/upload-file";
import { HelloController } from "../controllers/hello.controller";
import userController from "../controllers/user.controller";

export const routerV1 = express.Router();

routerV1.get("/", uploadFile, HelloController);
routerV1.get("/users", userController.find);
routerV1.get("/users/:id", userController.findById);
routerV1.get("/users/email/:email", userController.findByEmail);
routerV1.post("/users", userController.create);
routerV1.patch("/users", userController.update);
routerV1.delete("/users/:id", userController.delete);
