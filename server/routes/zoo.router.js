const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
  // return all categories
  const queryText = `
    SELECT species_name, class_name
    FROM species
    JOIN class ON species.class_id = class.id
    ORDER BY species_name ASC;`;
  pool.query(queryText)
      .then( (result) => {
          res.send(result.rows);
      })
      .catch( (error) => {
          console.log(`***Error on query`,error);
          res.sendStatus(500);
      });
});

module.exports = router;