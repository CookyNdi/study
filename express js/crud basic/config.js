const mysql = require("mysql")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mobile_legend"
})
// 
connection.connect((error) => {
  if (error) throw error
  console.log("database conek")
})

module.exports = connection