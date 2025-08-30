import { Request, Response, NextFunction } from "express";

type CORS = (req: Request, res: Response, next: NextFunction) => void;

let allowedOrigins = [
  "https://vkaswin.github.io",
  "http://localhost:3000",
  "https://verbose-happiness-4jj4wpxg5579fqjvx-3002.app.github.dev",
  "https://verbose-happiness-4jj4wpxg5579fqjvx-5000.app.github.dev"
];

let allowedHeaders = ["Authorization", "Content-Type"];

const cors: CORS = (req, res, next) => {
  let origin = req.headers.origin;
  let method = req.method;

  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    res.setHeader("Access-Control-Allow-Headers", allowedHeaders.join(", "));
    res.setHeader("Access-Control-Allow-Credentials", "true");
  }

  method === "OPTIONS" ? res.status(200).end() : next();
};

export default cors;
