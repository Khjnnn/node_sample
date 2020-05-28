const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : '115.71.233.22',
  user     : 'testuser',
  password : 'testuser!@#',
  database : 'testdb'
});
 
connection.connect();
 
connection.query('select * from User', function (error, results, fields) {
  if (error) throw error;
  console.log('The First User is: ', results[0]);
});
 
connection.end();
