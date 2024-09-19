import express from "express";
import authController from "../controllers/auth.controller";
import userController from "../controllers/user.controller";
import { authentication } from "../middlewares/authentication";
import { authorize } from "../middlewares/authorization";

export const routerV1 = express.Router();

routerV1.get("/users", userController.find);
routerV1.get("/users/:id", userController.findById);
routerV1.get("/users/email/:email", userController.findByEmail);
routerV1.post("/users", userController.create);
routerV1.patch("/users", userController.update);
routerV1.delete("/users/:id", userController.delete);

routerV1.post("/auth/login", authController.login);
routerV1.post("/auth/register", authController.register);
routerV1.get("/auth/check", authentication, authController.check);

routerV1.get("/dashboard", authentication, authorize("ADMIN"), (req, res) => {
  res.json({ message: "Hello from dashboard!" });
});

routerV1.get("/google", authController.googleOAuth);
routerV1.get("/google/callback", authController.googleOAuthCallback);
