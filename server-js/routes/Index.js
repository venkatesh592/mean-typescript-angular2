"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    // public index(req: Request, res: Response, next: NextFunction) {
    //   res.send({message : "Checking wheather success or not",names :["venkatesh","venky"],"users" : users });
    // }
    /**
     * GET all Heroes.
     */
    getAll(req, res, next) {
        let users = [
            {
                name: "venkatesh",
                id: "1",
                address: "vemulawada"
            },
            {
                name: "Rajesham",
                id: "2",
                address: "vemulawada"
            }
        ];
        res.send({ message: "Checking wheather success or not", names: ["venkatesh", "venky"], "users": users });
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get('/', this.getAll);
    }
}
exports.IndexRouter = IndexRouter;
const indexRoutes = new IndexRouter();
indexRoutes.init();
exports.default = indexRoutes.router;
