import { Request, Response } from "express";
import {
  getAllUsers,
  getUserByEmail,
  getUserById,
} from "../services/user.service";

class UserController {
  async find(req: Request, res: Response) {
    const users = await getAllUsers();
    res.json(users);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;

    const users = await getUserById(Number(id));
    res.json(users);
  }

  async findByEmail(req: Request, res: Response) {
    const { email } = req.params;

    const users = await getUserByEmail(email);
    res.json(users);
  }
}

export default new UserController();
