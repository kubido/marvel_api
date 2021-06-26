const request = require('supertest')
const app = require('../../app');

let api;

beforeAll(() => {
  api = request(app)
})

describe("API Marvel characters", () => {
  it("should return list of ids marvel characters", () => {
    api
      .get('/characters')
      .end((err, res) => {
        expect(res.body).toHaveProperty('ids')
        expect(res.body.ids).toEqual(expect.any(Array))
      })
  })

  it("should return single character", () => {
    let character = {
      Id: 1009220,
      Name: "Captain America",
      Description: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty."
    }
    api
      .get('/characters/1009220')
      .end((err, res) => {
        expect(res.body).toHaveProperty('Id', 'Name', 'Description')
        expect(res.body.Id).toEqual(character.Id)
        expect(res.body.Name).toEqual(character.Name)
        expect(res.body.Description).toEqual(character.Description)
      })
  })
})