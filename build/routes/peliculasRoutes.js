"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const peliculasController_1 = __importDefault(require("../controllers/peliculasController "));
class PeliculasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', peliculasController_1.default.list);
        this.router.get('/:id', peliculasController_1.default.getOne);
        this.router.post('/', peliculasController_1.default.create);
        this.router.put('/:id', peliculasController_1.default.update);
        this.router.delete('/:id', peliculasController_1.default.delete);
    }
}
exports.default = new PeliculasRoutes().router;
