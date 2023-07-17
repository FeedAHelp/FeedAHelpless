"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const loginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        // Check if required data is present
        if (!email || !password) {
            return res.status(400).json({ message: 'Required data not found' });
        }
        // Check if email exists
        const existingUser = yield prisma.register.findUnique({ where: { email } });
        if (!existingUser) {
            return res.status(401).json({ message: 'User is not found' });
        }
        // Compare passwords
        const passwordMatch = yield bcrypt_1.default.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Password is not match' });
        }
        // Retrieve user data
        const user = yield prisma.user.findUnique({
            where: { registerId: existingUser.id }
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ email: existingUser.email, userId: user.id }, process.env.JWT_SECRETE, { expiresIn: '1h' } // Token expiry time
        );
        // Save the token in the access_token field of the Register model
        yield prisma.register.update({
            where: { id: existingUser.id },
            data: { accessToken: token }
        });
        return res.status(200).json(Object.assign(Object.assign(Object.assign({ message: 'Login successful' }, existingUser), user), { accessToken: token }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Login failed' });
    }
});
exports.loginController = loginController;
exports.default = exports.loginController;
//# sourceMappingURL=login.controller.js.map