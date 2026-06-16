const { ObjectId } = require("mongodb");
const { getDB } = require("../config/db");

const userCollection = () => {
    return getDB().collection("users");
};
const createUser = async (userData) => {
    return await userCollection().insertOne(userData);
};

const getAllUsers = async () => {
    return await userCollection().find().toArray();
};

const getUserById = async (id) => {
    return await userCollection().findOne({ _id: new ObjectId(id) });
};

const updateUser = async (id, data) => {
    return await userCollections().updateOne({ _id: new ObjectId(id) }, { $set: data });
};

const deleteUser = async (id) => {
    return await userCollections().deleteOne({ _id: new ObjectId(id) });
};

module.exports = {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
};



