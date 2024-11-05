import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

//CARREGAR AS VARIAVEIS DE AMBIENTE

dotenv.config();

const pool = mysql.createPool({ 
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: 3302,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
 });

export { pool };

