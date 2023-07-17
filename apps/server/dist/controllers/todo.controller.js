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
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getTodoById = exports.getAllTodos = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield prisma.todo.findMany();
        res.status(200).json({ data: allTodos });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getAllTodos = getAllTodos;
const getTodoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const todo = yield prisma.todo.findUnique({ where: { id: todoId } });
        if (todo) {
            res.status(200).json({ data: todo });
        }
        else {
            res.status(404).json({ error: 'Todo not found' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.getTodoById = getTodoById;
const createTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoData = req.body;
        const createdTodo = yield prisma.todo.create({ data: Object.assign({}, todoData) });
        res.status(201).json({ data: createdTodo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.createTodo = createTodo;
const updateTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const todoData = req.body;
        const updatedTodo = yield prisma.todo.update({ where: { id: todoId }, data: Object.assign({}, todoData) });
        res.status(200).json({ data: updatedTodo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todoId = req.params.id;
        const deletedTodo = yield prisma.todo.delete({ where: { id: todoId } });
        res.status(200).json({ message: 'Successfully deleted', data: deletedTodo });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
exports.deleteTodo = deleteTodo;
//# sourceMappingURL=todo.controller.js.map