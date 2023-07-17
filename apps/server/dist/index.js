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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const databaseConnection_1 = require("./utills/databaseConnection");
const auth_middleware_1 = require("./middleware/auth.middleware");
const todo_router_1 = __importDefault(require("./routes/todo.router"));
const auth_router_1 = __importDefault(require("./routes/auth.router"));
const user_router_1 = __importDefault(require("./routes/user.router"));
const app = (0, express_1.default)();
const port = process.env.PORT || 8080;
dotenv_1.default.config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
(0, databaseConnection_1.startServer)();
// Middleware to apply globally, excluding the authentication route
app.use((req, res, next) => {
    if (req.path === '/auth/register' || req.path === '/auth/login') {
        // Skip authentication middleware for the /auth route
        next();
    }
    else {
        (0, auth_middleware_1.authenticateJWT)(req, res, next);
    }
});
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json('WELCOME TO EMACH SERVER');
    }
    catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
}));
app.use('/auth', auth_router_1.default);
app.use('/user', user_router_1.default);
app.use('/todo', todo_router_1.default);
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map