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
exports.getSubscriberController = void 0;
const prismaInstance_1 = require("../../utills/prismaInstance");
const getSubscriberController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscriber = yield prismaInstance_1.prisma.feedahelpNewsletter.findMany({
            orderBy: {
                createAt: 'desc'
            }
        });
        return res.status(200).json(subscriber);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch user data' });
    }
});
exports.getSubscriberController = getSubscriberController;
//# sourceMappingURL=getSubscriber.controller.js.map