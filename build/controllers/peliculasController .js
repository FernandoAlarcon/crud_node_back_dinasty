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
class PeliculasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const peliculas = yield database_1.default.query(` SELECT * ,
                                                    (SELECT COUNT(*) FROM resenas R WHERE R.pelicula_id = P.id ) as resenas,
                                                    (SELECT SUM(R.calificacion)/COUNT(*) FROM resenas R WHERE R.pelicula_id = P.id ) as porcentaje
                                                FROM peliculas P`);
                let dataReturn;
                if (peliculas) {
                    dataReturn = {
                        status: true,
                        data: peliculas
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
                res.json(error);
            }
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const peliculas = yield database_1.default.query('SELECT * FROM peliculas WHERE id = ?', [id]);
                console.log(peliculas.length);
                if (peliculas.length > 0) {
                    return res.json({
                        status: true,
                        data: peliculas[0]
                    });
                }
                res.status(404).json({ text: "The movie doesn't exits" });
            }
            catch (error) {
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield database_1.default.query('INSERT INTO peliculas set ?', [req.body]);
                let dataReturn;
                if (result) {
                    dataReturn = {
                        status: true,
                        message: 'Movie Saved'
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
                res.json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const peliculas = yield database_1.default.query('UPDATE peliculas set ? WHERE id = ?', [req.body, id]);
                console.log(peliculas);
                if (peliculas) {
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
                res.json({
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
                let data = yield database_1.default.query('DELETE FROM peliculas WHERE id = ?', [id]);
                if (data) {
                    let rest = {
                        status: true,
                        message: " the moovie was delete"
                    };
                    res.json(rest);
                }
                else {
                    let rest = {
                        status: false,
                        message: " something happened"
                    };
                    res.json(rest);
                }
            }
            catch (error) {
                let rest = {
                    status: false,
                    message: error
                };
                res.json(rest);
            }
        });
    }
}
const peliculasController = new PeliculasController;
exports.default = peliculasController;
