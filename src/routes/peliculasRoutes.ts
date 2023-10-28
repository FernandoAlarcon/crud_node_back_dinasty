import express, { Router } from 'express';

import peliculasController from '../controllers/peliculasController ';

class PeliculasRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', peliculasController.list);
        this.router.get('/:id', peliculasController.getOne);
        this.router.post('/', peliculasController.create);
        this.router.put('/:id', peliculasController.update);
        this.router.delete('/:id', peliculasController.delete);
    }

}

export default new PeliculasRoutes().router;

