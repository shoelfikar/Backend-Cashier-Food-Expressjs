const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     :process.env.HOST,
  user     :process.env.USER,
  password :process.env.PASSWORD,
  database :process.env.DATABASE,
});
 
connection.connect((err)=> {
  
  if(err) console.log(`Error database : ${err}`);
});

module.exports = connection;