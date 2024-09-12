import { User, PrismaClient } from "@prisma/client";
import { LoginDTO, RegisterDTO } from "../dto/auth.dto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { CustomError, CustomErrorCode } from "../types/error";

const prisma = new PrismaClient();

class AuthService {
  async register(data: RegisterDTO): Promise<User | null> {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(data.password, salt);

    return await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
  }

  async login(
    data: LoginDTO
  ): Promise<{ user: Omit<User, "password">; token: string }> {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (!user) {
      throw {
        code: CustomErrorCode.USER_NOT_EXISTS,
        message: "Email / password is wrong!",
        status: 404,
      } as CustomError;
    }

    const isValidPassword = await bcrypt.compare(data.password, user.password);

    if (!isValidPassword) {
      throw {
        code: CustomErrorCode.USER_NOT_EXISTS,
        message: "Email / password is wrong!",
        status: 404,
      } as CustomError;
    }

    const { password, ...userToSign } = user;

    const secretKey = process.env.JWT_SECRET as string;

    const token = jwt.sign(userToSign, secretKey);

    return {
      user: userToSign,
      token: token,
    };
  }
}

export default new AuthService();
