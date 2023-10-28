import { Request, Response } from 'express';


import pool from '../database';

class ResenasController {

    public async list(req: Request, res: Response): Promise<void> {
        try {
            
            const { id } = req.params;
            const resenas = await pool.query('SELECT * FROM resenas WHERE pelicula_id = ? ORDER BY id DESC',[id]);

            if (resenas.length > 0) {
                res.json({
                    status: true,
                    data: resenas
                });
            }else{
                res.json({
                    status: true,
                    data: []
                });
            }
            
            
        } catch (error) {
            res.json({
                status: false,
                text: error,
                error:error
            }); 
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const resenas = await pool.query('SELECT * FROM resenas WHERE id = ?', [id]);
        console.log(resenas.length);
        if (resenas.length > 0) {
            return res.json(resenas[0]);
        }
        res.status(404).json({ text: "The resena doesn't exits" });
    }

    public async create(req: Request, res: Response): Promise<void> {
       try {
        const result = await pool.query('INSERT INTO resenas set ?', [req.body]);
         
            let dataReturn;

            if(result){
                dataReturn = {
                    status: true, 
                    text: 'Reseña Guardada'
                }
            }else{
                dataReturn = {
                    status: false,
                    data : []
                }
            }

            res.json(dataReturn); 

       } catch (error) {
        
            res.status(404).json({ status: false, error});            

       }
    }

    public async update(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const resena = await pool.query('UPDATE resenas set ? WHERE id = ?', [req.body, id]);

            if(resena){
                res.json({
                    status:true,
                    text: "El archivo fue actualizado"
                })
            }else{
                res.json({
                    status:false,
                    text: "Algo paso"
                })
            }
             
        } catch (error) {
            res.status(400).json({
                status:false,
                text: error
            })
        }
    }

    public async delete(req: Request, res: Response): Promise<void> {
        try {

            const { id } = req.params;
            let deteleData = await pool.query('DELETE FROM resenas WHERE id = ?', [id]);
            
            if(deteleData){

                res.json({ 
                    status: true,
                    text: "Reseña eliminada" });
            }


        } catch (error) {
            res.json({ 
                status: false,
                text: error });
        }
    }
}

const resenasController = new ResenasController;
export default resenasController;