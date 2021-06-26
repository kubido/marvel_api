const axios = require('axios')
const crypto = require('crypto');
const { MARVEL_PRIVATE_KEY, MARVEL_PUBLIC_KEY } = process.env


const timestamp = (new Date()).getTime()
const strKey = timestamp + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY
const hash = crypto.createHash('md5').update(strKey).digest("hex");

const marvelAPI = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
  params: {
    hash,
    ts: timestamp,
    apikey: MARVEL_PUBLIC_KEY,
  }
})


module.exports = {
  marvelAPI
}