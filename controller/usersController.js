const { User } = require("../models");
const ApiError = require("../utils/apiError");

const findUser = async (req, res) => {
  try {
    const users = await User.findAll();

    res.status(200).json({
      status: "Success",
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err.message,
    });
  }
};

const createUser = async (req, res) => {
  const { name, age, address, role } = req.body;
  try {
    const users = await User.create({
      name,
      age,
      address,
      role,
    });
    res.status(200).json({
      status: "Success",
      data: {
        users,
      },
    });
  } catch (error) {
    next(new ApiError(error.message), 500);
  }
};

const findUserByid = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "suksess",
      data: {
        user,
      },
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

const updateUsers = async (req, res, next) => {
  try {
    const { name, age, address, role } = req.body;
    const user = await User.update(
      {
        name,
        age,
        address,
        role,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json({
      status: "Success",
      message: "sukses update users",
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "Success",
      message: "sukses Delete users",
    });
  } catch (error) {
    next(new ApiError(error.message, 400));
  }
};

module.exports = {
  findUser,
  createUser,
  findUserByid,
  updateUsers,
  deleteUsers,
};
