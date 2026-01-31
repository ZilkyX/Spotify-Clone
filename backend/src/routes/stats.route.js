import { Router } from "express";
import { getAllStats } from "../controllers/stats.controller";

const router = Router();

router.get("/", getAllStats);
