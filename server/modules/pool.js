const pg = require('pg')

const Pool = pg.Pool

const pool = new Pool({
    database: 'react_gallery',
    host: 'localhost',
    port: 5432
})

pool.on('connect', () => {
    console.log('connected to db')
})

pool.on('error', (err) => {
    console.log(err)
})

module.exports = pool;