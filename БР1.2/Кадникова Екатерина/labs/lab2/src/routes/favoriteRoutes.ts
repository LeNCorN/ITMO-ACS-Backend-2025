import { Router } from "express";
import {
    getAllFavorites,
    getFavoriteById,
    addFavorite,
    updateFavorite,
    removeFavorite,
    getUserFavorites
} from "../controllers/favoriteController";
import { authenticateToken } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authenticateToken, getAllFavorites);
router.get("/:id", authenticateToken, getFavoriteById);
router.post("/", authenticateToken, addFavorite);
router.put("/:id", authenticateToken, updateFavorite);
router.delete("/:id", authenticateToken, removeFavorite);
router.get("/my-favorites", authenticateToken, getUserFavorites);

export default router;