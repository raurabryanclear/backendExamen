import pg from 'pg';

export const pool = new pg.Pool({
    user: 'postgres',
    host: '192.168.68.117',
    database: 'tiendatecnologica',
    password: 'postgres',
    port: 5432
})

console.log("database connected")