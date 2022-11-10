const mysql = require('mysql2');


const dbConnection = async() =>{
    const connection= mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'test'
      });

      
     await connection.connect(function(err) {
        if (err) {
          console.error('error connecting: ' + err.stack);
          return;
        }
      
        console.log('connected as id ' + connection.threadId);
      });
}


module.exports = {
    dbConnection
}
  