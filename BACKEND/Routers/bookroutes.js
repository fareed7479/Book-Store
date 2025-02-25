let express = require('express');
let bookcontroller = require('../Controllers/bookcontroller');


let router = express.Router();

router.route('/home').get(bookcontroller.getbooks)
router.route('/home/book').post(bookcontroller.createbook)

router.route('/home/:id')
        .patch(bookcontroller.updatebook)
        .delete(bookcontroller.deletebook)

module.exports = router;