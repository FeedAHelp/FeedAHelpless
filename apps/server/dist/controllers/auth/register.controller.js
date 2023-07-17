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
exports.registerController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const registerController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, password, image } = req.body;
        // Check if required data is present
        if (!email || !password) {
            return res.status(400).json({ message: 'Required data not found' });
        }
        // Check if email already exists
        const existingUser = yield prisma.register.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already exists' });
        }
        // Hash the password
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        // Create the register record
        const register = yield prisma.register.create({
            data: {
                email,
                phone: '',
                password: hashedPassword,
                role: 'customer',
                accessToken: '' // Add the access_token property here
            }
        });
        // Create the user record
        const user = yield prisma.user.create({
            data: {
                name: name || 'Not found',
                image: image || 'Not found',
                registerId: register.id
            }
        });
        // Generate JWT token
        const token = jsonwebtoken_1.default.sign({ email: register.email, userId: user.id }, process.env.JWT_SECRETE, { expiresIn: '1h' } // Token expiry time
        );
        // Save the token in the access_token field of the Register model
        yield prisma.register.update({
            where: { id: register.id },
            data: { accessToken: token }
        });
        return res.status(201).json(Object.assign(Object.assign(Object.assign({ message: 'Registration successful' }, register), user), { accessToken: token }));
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Registration failed' });
    }
});
exports.registerController = registerController;
exports.default = exports.registerController;
//# sourceMappingURL=register.controller.js.map