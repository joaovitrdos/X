import { getUserProfile, 
    updateProfile, 
    syncUser, 
    getCurrentUser, 
    followUser 
} from "../controllers/user.controller.js";
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Navegação Publica
router.get("/profile/:username", getUserProfile);

// Navegação Protegida
router.post("/sync", protectRoute, syncUser);
router.post("/me", protectRoute, getCurrentUser);
router.put("/profile", protectRoute, updateProfile);
router.put("/follow/:targetUserId", protectRoute, followUser);

export default router;
