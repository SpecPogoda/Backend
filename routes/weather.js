import express from 'express'
const router = express.Router()
import mysql from "mysql";

const db = mysql.createConnection({
  host: 'ssh.kubaczak.com',
  user: 'pythondb',
  password: 'pythondb_pass',
  database: 'pythondb'
})
/*
db.connect((err) => {
  if (!!err){
    console.log('err')
  } else{
    console.log('DBconnected')
  }
})
*/
router.get('/list', (req, res) => {
  let sql = "SELECT * FROM pythondb.weather";
  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      data
    })
  })
});

export default router