const db = require('../config')

exports.getHero = (response) => {
  // query data
  const sql = "SELECT * FROM `hero`"
  // execute data
  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    // response data
    const heroes = {
      title: "list hero mobile legend",
      data: JSON.parse(JSON.stringify(result))
    }
    response.render('index', { heroes })
    response.end()
  })
}

exports.getHeroById = (id, res) => {
  const sql = `SELECT * FROM hero WHERE id = '${id}'`
  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    const hero = {
      title: "data hero by id",
      data: JSON.parse(JSON.stringify(result))
    }
    res.render('heroDetail', { hero })
    res.end()
  })
}

exports.updateHeroById = (data, response) => {
  const id = data.id
  const name = data.name
  const role = data.role

  const sql = `UPDATE hero SET name = '${name}', role = '${role}' WHERE id = '${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect('/hero')
    response.end()
  })
}

exports.addHero = (data, response) => {
  const name = data.name
  const role = data.role
  const sql = `INSERT INTO hero (name, role) VALUES ('${name}', '${role}')`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect('/hero')
    response.end()
  })
}

exports.removeHero = (id, response) => {
  const sql = `DELETE FROM hero WHERE hero.id = '${id}'`

  db.query(sql, (error, result) => {
    if (error) return console.log("error: ", error)
    response.redirect('/hero')
    response.end()
  })
}