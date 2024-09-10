import { NextFunction, Request, Response } from "express";

export function authentication(req: Request, res: Response, next: NextFunction) {
  // proses mengamankan user
  

  next();
}
