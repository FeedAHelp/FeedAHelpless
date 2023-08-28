"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const subscribe_controller_1 = require("../controllers/subscribe/subscribe.controller");
const getSubscriber_controller_1 = require("../controllers/subscribe/getSubscriber.controller");
const deleteSubscribe_controller_1 = require("../controllers/subscribe/deleteSubscribe.controller");
const subscribeRouter = (0, express_1.Router)();
subscribeRouter.get('/subscribe', getSubscriber_controller_1.getSubscriberController);
subscribeRouter.post('/subscribe', subscribe_controller_1.subscribeController);
subscribeRouter.delete('/subscribe/:id', deleteSubscribe_controller_1.deleteSubscribeController);
exports.default = subscribeRouter;
//# sourceMappingURL=subscribe.route.js.map