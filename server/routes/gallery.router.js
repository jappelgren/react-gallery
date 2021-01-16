const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/:id', (req, res) => {
    const id = req.params.id

    const queryText = `  
        UPDATE "pics"
        SET "likes" = "likes" + 1
        WHERE "id" = $1
   `
    pool.query(queryText, [id]).then((result) => {
        res.sendStatus(200)
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "pics" ORDER BY "id"`
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((err) => {
        console.log(err)
    })

}); // END GET Route

module.exports = router;