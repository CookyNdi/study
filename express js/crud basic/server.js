const port = 9001
const express = require("express")
const server = express()
const bodyParser = require('body-parser')
const heroController = require("./controller/hero.controller")


server.use(bodyParser.urlencoded({ extended: false }))
server.set("view engine", "ejs")
server.set("views", "view")

server.use("/hero", heroController)

server.use("/", (request, response) => {
  response.send("main server ok!")
})

server.listen(port, () => {
  console.log("server running test" + port)
})
