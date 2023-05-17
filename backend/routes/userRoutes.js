import express from "express";

import {
	deleteUser,
	getUserById,
	getUserProfile,
	getUsers,
	registerUser,
	updateUser,
	updateUserProfile,
	userAuth,
} from "../controllers/userController.js";
import { admin, protect } from "../middlewares/authMddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protect, admin, getUsers);
router.post("/login", userAuth);
router
	.route("/profile")
	.get(protect, getUserProfile)
	.put(protect, updateUserProfile);
router
	.route("/:id")
	.delete(protect, admin, deleteUser)
	.get(protect, admin, getUserById)
	.put(protect, admin, updateUser);

export default router;
