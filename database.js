const {createPool} = require('mysql')
require("dotenv").config();

// Tried with postgressSQL
// const pool = new Client({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "1234",
//   database: "garage-system",
// });

// pool.connect();
// pool.query(`SELECT * FROM users`, (err, res) => {
//   if (!err) {
//     console.log("result is here", res.rows);
//   } else {
//     console.log("Some error")
//   }
//   pool.end;
// });



// const pool = createPool({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,
//     password:process.env.DB_PASSWORD,
//     database:process.env.MYSQL_DB,
//     connectionsLimit:10
// });

const pool = createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"garageSystem",
    connectionsLimit:10,

})

pool.query(`select * from users`,(err,result,fields)=>{
    if(err){
        return console.log(err)
    }
    return console.log(result)
})

module.exports = pool;
