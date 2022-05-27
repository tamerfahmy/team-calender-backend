const supertest = require('supertest');
const express = require('express');
const dateTimeRouter = require('../../src/routes/datetime.route');

const app = new express();
app.use('/date-time', dateTimeRouter);

describe('/date-time route', () => {
  describe('get', () => {
    it('Should return 200 with body array with 3 local datetime', async () => {
        const res = await supertest(app).get('/date-time');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveLength(3);
    });
  });
});