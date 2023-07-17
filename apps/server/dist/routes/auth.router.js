"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const register_controller_1 = require("../controllers/auth/register.controller");
const login_controller_1 = require("../controllers/auth/login.controller");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', register_controller_1.registerController);
authRouter.post('/login', login_controller_1.loginController);
exports.default = authRouter;
//# sourceMappingURL=auth.router.js.map