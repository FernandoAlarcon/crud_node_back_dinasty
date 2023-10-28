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
const database_1 = __importDefault(require("../database"));
class ResenasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const resenas = yield database_1.default.query('SELECT * FROM resenas WHERE pelicula_id = ? ORDER BY id DESC', [id]);
                if (resenas.length > 0) {
                    res.json({
                        status: true,
                        data: resenas
                    });
                }
                else {
                    res.json({
                        status: true,
                        data: []
                    });
                }
            }
            catch (error) {
                res.json({
                    status: false,
                    text: error,
                    error: error
                });
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const resenas = yield database_1.default.query('SELECT * FROM resenas WHERE id = ?', [id]);
            console.log(resenas.length);
            if (resenas.length > 0) {
                return res.json(resenas[0]);
            }
            res.status(404).json({ text: "The resena doesn't exits" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO resenas set ?', [req.body]);
                let dataReturn;
                if (result) {
                    dataReturn = {
                        status: true,
                        text: 'Reseña Guardada'
                    };
                }
                else {
                    dataReturn = {
                        status: false,
                        data: []
                    };
                }
                res.json(dataReturn);
            }
            catch (error) {
                res.status(404).json({ status: false, error });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const resena = yield database_1.default.query('UPDATE resenas set ? WHERE id = ?', [req.body, id]);
                if (resena) {
                    res.json({
                        status: true,
                        text: "El archivo fue actualizado"
                    });
                }
                else {
                    res.json({
                        status: false,
                        text: "Algo paso"
                    });
                }
            }
            catch (error) {
                res.status(400).json({
                    status: false,
                    text: error
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                let deteleData = yield database_1.default.query('DELETE FROM resenas WHERE id = ?', [id]);
                if (deteleData) {
                    res.json({
                        status: true,
                        text: "Reseña eliminada"
                    });
                }
            }
            catch (error) {
                res.json({
                    status: false,
                    text: error
                });
            }
        });
    }
}
const resenasController = new ResenasController;
exports.default = resenasController;
