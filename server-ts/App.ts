import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

import IndexRouter from "./routes/Index"

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));

    this.express.set('port', (process.env.PORT || 5000));
    this.express.use(express.static(path.join(__dirname,"../dist")));
    this.express.set('views', __dirname + '/../dist');
    this.express.engine('html', require('ejs').renderFile);
    this.express.set('view engine', 'html');


    this.express.use('/images',express.static(path.join(__dirname, './../src/images')));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
     * working so far. This function will change when we start to add more
     * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get('/', (req, res, next) => {
      res.json({
        message: 'Hello World!'
      });
    });
    router.get('/hello', (req, res, next) => {
      res.render("index");
    });    
    this.express.use('/', router);
    this.express.use('/check', IndexRouter);
  }

}

export default new App().express;
