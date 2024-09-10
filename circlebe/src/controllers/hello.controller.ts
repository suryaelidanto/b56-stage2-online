import { Request, Response } from "express";
import { sayHello, sayHelloV2 } from "../services/hello.service";

export function HelloController(req: Request, res: Response) {
  const hello = sayHello();
  const helloV2 = sayHelloV2();
  res.send(`${hello}${helloV2}`);
}
