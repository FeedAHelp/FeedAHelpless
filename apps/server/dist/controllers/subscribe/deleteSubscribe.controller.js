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
exports.deleteSubscribeController = void 0;
const prismaInstance_1 = require("../../utills/prismaInstance");
const deleteSubscribeController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prismaInstance_1.prisma.feedahelpNewsletter.delete({
            where: {
                id: id
            }
        });
        return res.status(200).json({ status: 'success' });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Failed to fetch user data' });
    }
});
exports.deleteSubscribeController = deleteSubscribeController;
//# sourceMappingURL=deleteSubscribe.controller.js.map