import {Router, Request, Response, NextFunction} from 'express';

export class IndexRouter {
  router: Router;


  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  // public index(req: Request, res: Response, next: NextFunction) {
  //   res.send({message : "Checking wheather success or not",names :["venkatesh","venky"],"users" : users });
  // }
  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    let users = [
    {
      name :"venkatesh",
      id : "1",
      address : "vemulawada"
    },
    {
      name :"Rajesham",
      id : "2",
      address : "vemulawada"
    }    
  ];
    res.send({message : "Checking wheather success or not",names :["venkatesh","venky"],"users" : users });
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

const indexRoutes = new IndexRouter();
indexRoutes.init();

export default indexRoutes.router;

