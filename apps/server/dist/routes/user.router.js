"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getAllusers_controller_1 = require("../controllers/user/getAllusers.controller");
const userRouter = (0, express_1.Router)();
userRouter.get('/getAllUsers', getAllusers_controller_1.getAllUsersController);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map