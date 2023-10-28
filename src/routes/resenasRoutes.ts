import express, { Router } from 'express';

import resenasController from '../controllers/resenasController';

class ResenasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/:id', resenasController.list);
        this.router.get('/one/:id', resenasController.getOne);
        this.router.post('/', resenasController.create);
        this.router.put('/:id', resenasController.update);
        this.router.delete('/:id', resenasController.delete);
    }

}

export default new ResenasRoutes().router;

