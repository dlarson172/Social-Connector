const express = require(express);
const router = express.Router();

Router.get('/test', (req, res) => res.json({msg: 
    'Profile works'}));
    module.exports = Router; 