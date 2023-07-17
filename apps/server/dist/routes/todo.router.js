"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = require("../controllers/todo.controller");
const todoRouter = (0, express_1.Router)();
todoRouter.get('/', todo_controller_1.getAllTodos);
todoRouter.get('/:id', todo_controller_1.getTodoById);
todoRouter.post('/', todo_controller_1.createTodo);
todoRouter.put('/:id', todo_controller_1.updateTodo);
todoRouter.delete('/:id', todo_controller_1.deleteTodo);
exports.default = todoRouter;
//# sourceMappingURL=todo.router.js.map