import express from "express";
import cors from "cors";
import api from "../routes/api";

const server = express();

const port = process.env.port ?? 8080;
server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use("/public", express.static("./dist"));
server.use("/public", express.static("./public"));

server.use("/api", api);

server.listen(port, () => {
  console.log(`Server started on: ${port}`);
});
