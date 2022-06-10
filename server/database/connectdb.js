const mysql = require('mysql');
const dbDetails = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rahim12345",
    database: "influencer"

});
dbDetails.connect((error) =>
{
    if (error) {

        console.log(error);
    } else {

        console.log("DB Connection Successful");
    }
})

module.exports = dbDetails;