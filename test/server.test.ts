import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../server-ts/App';

chai.use(chaiHttp);
const expect = chai.expect;

describe('baseRoute', () => {

  it('should be json', () => {
    return chai.request(app).get('/')
    .then(res => {
      expect(res.type).to.eql('application/json');
    });
  });

  it('should have a message prop', () => {
    return chai.request(app).get('/')
    .then(res => {
      expect(res.body.message).to.eql('Hello World!');
    });
  });



  it('responds with JSON array', () => {
    return chai.request(app).get('/check')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        // expect(res.body).to.be.an('json');
        expect(res.body.names).to.have.length(2);
      });
  });

  it('should include venkatesh', () => {
    return chai.request(app).get('/check')
      .then(res => {
        let Venkatesh = res.body.users.find(user => user.name === 'venkatesh');
        expect(Venkatesh).to.exist;
        expect(Venkatesh).to.have.all.keys([
          'id',
          'name',
          'address'
        ]);
      });
  });  



});
