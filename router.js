var express = require('express');
var router = express.Router();

router.get(
    '/Naim',
    (req, res) => res.send('I am Naïm Khames, engineer student.I love internet and forests.Good day everybody.')
)
router.get(
  '/hello/:name',
  (req, res) => res.send("Hello " + req.params.name)
)
router.get(
  '/',
  (req, res) => res.send('<body>On http://localhost:8080/Naim there a presentation on Naim<br><br>If you use http://localhost:8080/hello/jean you will have the message hello jean <br>This will work with every other names.<br><br>Else you will have an error 404 page<br></body>')
)
router.get(
  '*',
  (req, res) => res.status(404).send('Not found')
)
module.exports = router;