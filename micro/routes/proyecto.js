const { Router } = require('express');
const {
    createProyecto,
} = require('../controllers/proyecto');

const router = Router();

router.post('/', createProyecto);

module.exports = router;
