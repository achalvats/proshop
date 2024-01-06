import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUserByID,
    updateUserByID
} from '../controllers/userControllers.js'


const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUserByID).get(protect, admin, getUserByID).put(protect, admin, updateUserByID)

export default router