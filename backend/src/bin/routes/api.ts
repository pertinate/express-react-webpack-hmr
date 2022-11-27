import express from "express";
import { scriptsToReload } from "../util/parcel";

const api = express.Router();

if (process.env.NODE_ENV === "dev") {
  api.get("/hmr", (req, res) => {
    res.send({
      scripts: Array.from(scriptsToReload.scripts),
      ts: scriptsToReload.ts,
    });
  });
}

export default api;
