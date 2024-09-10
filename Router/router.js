// 1) import express
const express = require("express");

// 2) router library is inside express, so import that
const router = new express.Router()

const userController = require('../controllers/userController')


// 3) different paths for resolving requests
router.post("/user/register", userController.register);
router.get('/user/getUserDetails',userController.getUserDetails)

// 4) export router
module.exports = router;
