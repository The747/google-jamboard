import express from "express";
import dotenv from "dotenv";
import cors from "./src/middlewares/cors";
import connect from "./src/database/config";
import router from "./src/routes";

dotenv.config();

const port = Number(process.env.PORT) || 5000;
const app = express();

app
  .use(cors)
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(router);

connect()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`⚡️[server]: Server is running at http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.log("🚀 ~ file: index.ts:29 ~ error:", error);
    process.exit();
  });
