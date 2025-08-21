import express from 'express';
import { getPost, getUserPosts, getPosts, likePost, createPost, deletePost } from '../controllers/post.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';
import upload from '../middleware/upload.middleware.js';

const router = express.Router();

// Rotas Publicas
router.get("/", getPosts);
router.get("/:postId", getPost);
router.get("/user/:username", getUserPosts);

// Rotas de Proteção 
router.post("/", protectRoute, upload.single("image"), createPost);
router.post("/:postId/like", protectRoute, likePost);
router.post("/:postId", protectRoute, deletePost);

export default router;