const { Router } = require('express')
const mysql = require('mysql2');

const conn = mysql.createConnection({

})

const router = Router()

// Mock Users
// const users = [
//   { name: 'Alexandre' },
//   { name: 'Pooya' },
//   { name: 'Sébastien' }
// ]
let users = [];

/* GET users listing. */
router.get('/users', function (req, res, next) {
  conn.query('SELECT * FROM users', function(err, data) {
    if (err) {
      res.writeHead(500);
      res.end(err);
    } else {
      users = data;
      res.json(data);
      // res.end(JSON.stringify(data));
    }
  })
  // res.json(users)
})

/* GET user by ID. */
router.get('/users/:id', function (req, res, next) {
  res.json(users)
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
