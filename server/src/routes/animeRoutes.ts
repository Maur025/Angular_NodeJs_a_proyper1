import { Router } from 'express';

import { animeController } from '../controllers/animeController';


class AnimeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', animeController.index);
    }
}

const animeRoutes = new AnimeRoutes();
export default animeRoutes.router;