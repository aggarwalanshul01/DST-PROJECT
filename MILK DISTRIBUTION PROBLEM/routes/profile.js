const route = require('express').Router();
const { db, users } = require('../db/loginTable');

route.get('/', async(req, res) => {

    if (!(req.session.userId)) {
        res.redirect('components/login.html');
    }

    let user = await users.findByPk(req.session.userId);

    res.redirect('/components/profile.html');
})
route.get('/data', async(req, res) => {



    let user = await users.findByPk(req.session.userId);

    res.send(user);
})


module.exports = {
    route
}