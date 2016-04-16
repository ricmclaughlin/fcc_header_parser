var express = require('express');
var routes = function (reqHeader) {
  var reqHeaderRouter = express.Router();
  var reqHeaderController = require('../controllers/reqHeaderController')(reqHeader);

  reqHeaderRouter.route('/api')
    .get(reqHeaderController.get);

  return reqHeaderRouter;
};

module.exports = routes;
