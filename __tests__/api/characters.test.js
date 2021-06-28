const request = require('supertest')

const axios = require('axios')
const app = require('../../app')

jest.mock('ioredis', () => require('ioredis-mock/jest'))

describe("API Marvel characters", () => {
  it("should return list of ids marvel characters", async () => {
    const mockedResponse = {
      "data": {
        "results": [
          { id: 1009368, "name": "Iron Man" },
          { id: 1017105, "name": "Captain America/Steve Rogers (MAA)" },
          { id: 1017295, "name": "Captain America (LEGO Marvel Super Heroes)" }
        ]
      }
    }
    const resp = { data: mockedResponse }

    axios.get.mockImplementationOnce(() => Promise.resolve(resp))

    try {
      const res = await request(app).get('/characters')
      const characters = resp.data.data.results
      const response = characters.map(char => char.id)

      expect(res.body).toEqual(response)
    } catch (error) {
      console.log(error);
    }
  })


  it("should return single character", async () => {
    let mockedResponse = {
      data: {
        results: [
          {
            id: 1009220,
            name: "Captain America",
            description: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty."
          }
        ]
      }
    }

    const resp = { data: mockedResponse }

    axios.get.mockImplementationOnce(() => Promise.resolve(resp))

    try {
      const res = await request(app).get('/characters/1009220')
      expect(res.body).toHaveProperty('Id', 'Name', 'Description')
      expect(res.body.Id).toEqual(character.Id)
      expect(res.body.Name).toEqual(character.Name)
      expect(res.body.Description).toEqual(character.Description)
    } catch (error) {
      console.log(error);
    }

  })

})