var reqHeaderController = function (reqHeader) {
  var get = function (req, res) {
    res.status(201);
    res.send(processReqHeader(req));
  };

  function processReqHeader(req) {
    reqHeader.ipaddress = req.ip;
    reqHeader.language = processLanguage(req);
    reqHeader.software = processSoftware(req);
    return reqHeader;
  }

  function processSoftware(req) {
    var regExp = /\(([^)]+)\)/;
    return regExp.exec(req.headers['user-agent'])[1];
  }

  function processLanguage(req) {
    return req.headers['accept-language'].substring(0, 5);
  }

  return {
    get: get
  };

};

module.exports = reqHeaderController;
