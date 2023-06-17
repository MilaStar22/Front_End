const cors = require('cors');
const express = require("express");

const app = express();

const res = {
  name: "Misha",
  age: 25
}
const corsOptions = {
  origin: 'http://localhost:3000',
  credential: true,
  optionSeccessStatus: 200
}

app.use(cors(corsOptions))
app.get('/', (req, resp) =>{
  resp.send("Hello");
})
app.get('/api', (request, response)=>{
  response.json(res)
})
const PORT = 3001
app.listen(PORT, ()=>{
  const url = `http://localhost:${PORT}`;
  console.log( `listening on ${url}`);
})