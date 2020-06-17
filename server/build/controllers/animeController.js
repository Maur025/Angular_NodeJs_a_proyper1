"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animeController = void 0;
const database_1 = require("../database");
class AnimeController {
    index(req, res) {
        const db = database_1.connect();
        db.query("");
        res.json('games');
    }
}
exports.animeController = new AnimeController();
