const express = require('express')
require("dotenv").config();
const app = express()
const port = process.env.port


app.use(express.json(), express.urlencoded({ extended: true }))


  require("./config/mongoose.config");
  require("./routes/joke.routes")(app);


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })