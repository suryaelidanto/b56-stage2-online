import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { routerV1 } from "./routes/v1";
import { routerV2 } from "./routes/v2";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const { accessToken } = req.query;

  res.json({
    accessToken,
  });
});

app.use("/api/v1", routerV1);
app.use("/api/v2", routerV2);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
