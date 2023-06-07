'use strict';
const server = require('../src/server');
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server ", () => {
    it("Testing Home Page /", async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual("This is Home Page");
    });
    it("handle 404 error as bad route", async () => {
        const response = await request.get('/jjjj');
        expect(response.status).toEqual(404);
    });
    it("handle 404 error as bad method", async () => {
        const response = await request.post('/info');
        expect(response.status).toEqual(404);
    });
    test("handle server error", async () => {
        const response = await request.get('/person');
        expect(response.status).toEqual(500);
    });
    it("testing /info", async () => {
        const response = await request.get('/info');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    })
    it("testing /person/fred", async () => {
        const response = await request.get('/person/:name');
        expect(response.status).toEqual(200);
        expect(typeof response.body).toEqual("object");
    })

});