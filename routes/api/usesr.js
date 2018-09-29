const express = require(express);
const router = express.Router();

Router.get('/test', (req, res) => res.json({msg: 
    'Users works'}));
    module.exports = Router; 