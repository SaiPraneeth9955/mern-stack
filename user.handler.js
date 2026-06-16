const userService = require('../services/user.service');
const createUser = async (req, res) => {
    try {
        const result = await userService.createUser(req.body);
        res.status(201).json({
           success: true,
           data: result,
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getAllUsers = async (req, res) => {
    try {
        const result = await userService.getAllUsers();
        res.status(200).json({
           success: true,
           data: result,
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getUserById = async (req, res) => {
    try {
        const result = await userService.getUserById(req.params.id);
        res.status(200).json({
           success: true,
           data: result,
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const updateUser = async (req, res) => {
    try {
        const result = await userService.updateUser(req.params.id, req.body);
        res.status(200).json({
           success: true,
           data: result,
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const deleteUser = async (req, res) => {
    try {        const result = await userService.deleteUser(req.params.id);
        res.status(200).json({
           success: true,
           data: result,
        });
    } catch(error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};

    
