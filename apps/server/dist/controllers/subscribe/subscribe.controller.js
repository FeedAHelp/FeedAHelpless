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
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeController = void 0;
const prismaInstance_1 = require("../../utills/prismaInstance");
const subscribe_schema_1 = require("../../schema/subscribe.schema");
const subscribeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.body;
        subscribe_schema_1.subscribeSchema.parse(req.body);
        yield prismaInstance_1.prisma.feedahelpNewsletter.create({
            data: {
                email: email
            }
        });
        return res.status(200).json({ status: 'success' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.subscribeController = subscribeController;
//# sourceMappingURL=subscribe.controller.js.map