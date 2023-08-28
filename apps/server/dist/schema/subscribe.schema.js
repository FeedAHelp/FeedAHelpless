"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeSchema = void 0;
const zod_1 = require("zod");
exports.subscribeSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(5)
});
//# sourceMappingURL=subscribe.schema.js.map