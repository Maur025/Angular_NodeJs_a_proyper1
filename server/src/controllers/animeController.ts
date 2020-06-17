import {Request , Response} from 'express';

import {connect} from '../database';

class AnimeController {
    index (req:Request,res:Response) {
        const db = connect();
        db.query("");
        res.json('games');
    }
}

export const animeController = new AnimeController();