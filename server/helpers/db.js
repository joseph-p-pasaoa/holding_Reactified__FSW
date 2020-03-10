/*
Database Connection Helper | HOLDING: Reactified Web App
GROUP 3: Douglas MacKrell, Briahana Maugé, Joseph P. Pasaoa, Kathy Puma
*/


const pgp = require('pg-promise')();
    const connectString = 'postgres://localhost:5432/holding_reactified_db';
    const db = pgp(connectString);


module.exports = db;
