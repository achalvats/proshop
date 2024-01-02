import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


// @desc Auth users and get products
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    res.send('auth user')
});

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.send('register user')
});

// @desc logout user and clear cookie
// @route POST /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user')
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('get user profile')
});

// @desc Update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile')
});

// @desc Get users (ADMIN)
// @route GET /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users')
});

// @desc Get user by id (ADMIN)
// @route GET /api/users/:id
// @access Private/Admin
const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id')
});

// @desc Delete user (ADMIN)
// @route DELETE /api/users/:id
// @access Private/Admin
const deleteUserByID = asyncHandler(async (req, res) => {
    res.send('delete user')
});

// @desc Update user (ADMIN)
// @route PUT /api/users/:id
// @access Private/Admin
const updateUserByID = asyncHandler(async (req, res) => {
    res.send('update user')
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    getUserByID,
    deleteUserByID,
    updateUserByID
}