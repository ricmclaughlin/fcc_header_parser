var reqHeaderController = function (reqHeader) {
  var get = function (req, res) {
    if (req.params.date) {
      res.status(201);
      res.send(processReqHeader(req));
    } else {
      res.render('../index.html');
    }

    processReqHeader(req);
  };

  function processReqHeader(req) {
    reqHeader.ipaddress = req.ip;
    reqHeader.language = processLanguage(req);
    reqHeader.software = processSoftware(req);
    // return '{"ipaddress":"23.252.51.236","language":"en-US","software":"Macintosh; Intel Mac OS X 10_11_4"}';
    //return JSON.stringify(req.headers);
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
