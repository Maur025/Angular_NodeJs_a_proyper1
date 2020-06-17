"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animeController_1 = require("../controllers/animeController");
class AnimeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', animeController_1.animeController.index);
    }
}
const animeRoutes = new AnimeRoutes();
exports.default = animeRoutes.router;
