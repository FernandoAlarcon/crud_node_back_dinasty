"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const resenasController_1 = __importDefault(require("../controllers/resenasController"));
class ResenasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', resenasController_1.default.list);
        this.router.get('/one/:id', resenasController_1.default.getOne);
        this.router.post('/', resenasController_1.default.create);
        this.router.put('/:id', resenasController_1.default.update);
        this.router.delete('/:id', resenasController_1.default.delete);
    }
}
exports.default = new ResenasRoutes().router;
