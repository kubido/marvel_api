## HOW TO RUN

### RUN SERVER

- run `npm install`
- rename `.env.example` to `.env` and change the value
- run `redis-server` in seperate terminal, if you don't have redis. you need to [install](https://redis.io/topics/quickstart) it first
- run `npm start`
- open `http://localhost:8080` in your browser

### RUN TEST

- go to root app folder
- run `npm install`
- run `npx jest`
