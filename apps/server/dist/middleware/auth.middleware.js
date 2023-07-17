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
exports.authenticateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const authenticateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        // Fetch user data from Prisma based on the decoded user ID or any other information you stored in the token
        try {
            const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRETE);
            if (!decoded) {
                return res.status(403).json({ message: 'Invalid token' });
            }
            const user = yield prisma.user.findUnique({
                where: {
                    id: decoded.userId
                }
            });
            if (!user) {
                return res.status(403).json({ message: 'User not found' });
            }
            next();
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    else {
        return res.status(401).json({ message: 'No token provided' });
    }
});
exports.authenticateJWT = authenticateJWT;
//# sourceMappingURL=auth.middleware.js.map