import express, { Application, Response, Request } from "express";
import router from "../route/route";
const port: number | string = process.env.port || 2041;
import cors from "cors";
const app: Application = express();
app.use(express.json());
require("../config/db");
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: `server running`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Something went wrong ${error}`,
    });
  }
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`port ${port} is running`);
});
