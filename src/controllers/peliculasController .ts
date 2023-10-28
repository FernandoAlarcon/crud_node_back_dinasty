import { Request, Response } from 'express';
import pool from '../database';

class PeliculasController  {

    public async list(req: Request, res: Response): Promise<void> {
        try {
            const peliculas = await pool.query(` SELECT * ,
                                                    (SELECT COUNT(*) FROM resenas R WHERE R.pelicula_id = P.id ) as resenas,
                                                    (SELECT SUM(R.calificacion)/COUNT(*) FROM resenas R WHERE R.pelicula_id = P.id ) as porcentaje
                                                FROM peliculas P`);
        
            let dataReturn;
            if(peliculas){
                dataReturn = {
                    status: true,
                    data : peliculas
                }
            }else{
                dataReturn = {
                    status: false,
                    data : [] 
                }
            }

            res.json(dataReturn);

        } catch (error) {
            res.json(error);            
        }
    }

    public async getOne(req: Request, res: Response): Promise<any> {
       try {

        const { id } = req.params;
        const peliculas = await pool.query('SELECT * FROM peliculas WHERE id = ?', [id]);
        console.log(peliculas.length);
        if (peliculas.length > 0) {
            return res.json({
                status : true,
                data: peliculas[0]
            });
        }
        res.status(404).json({ text: "The movie doesn't exits" });


       } catch (error) {
        
       }
    }

    public async create(req: Request, res: Response): Promise<void> {
        try {
            
            const result = await pool.query('INSERT INTO peliculas set ?', [req.body]);
            let dataReturn;

            if(result){
                dataReturn = {
                    status: true, 
                    message: 'Movie Saved'
                }
            }else{
                dataReturn = {
                    status: false,
                    data : []
                }
            }

            res.json(dataReturn); 

        } catch (error) {
            res.json(error);            
        }
    }

    public async update(req: Request, res: Response): Promise<void> {  
            try {
                const { id } = req.params;
                const peliculas = await pool.query('UPDATE peliculas set ? WHERE id = ?', [req.body, id]);

                console.log(peliculas)

                if(peliculas){
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
                res.json({
                    status:false,
                    text: error
                })
            }
        
    }

    public async delete(req: Request, res: Response): Promise<void> {
       try {
        const { id } = req.params;
        let data =  await pool.query('DELETE FROM peliculas WHERE id = ?', [id]);
        
        if (data){
           let rest = {
              status : true,
              message : " the moovie was delete"
           } 
           res.json(rest)
        }else{
            let rest = {
                status : false,
                message : " something happened"
             } 
             res.json(rest)
        }

       } catch (error) {
        let rest = {
            status : false,
            message : error
         } 
         res.json(rest)
       }
    }
}

const peliculasController  = new PeliculasController ;
export default peliculasController;