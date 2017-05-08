"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config/config");
var express_1 = require("./config/express");
var express = require("express");
express_1.default.use(express.static(__dirname + '/public'));
// App.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
//    var reqType = req.headers["x-forwarded-proto"];
//    reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
// });
// App.get('/*', (req: express.Request, res: express.Response) => {
//    res.sendFile(path.join(__dirname + '/public/index.html'));
// });
express_1.default.listen(config_1.Config.PORT, function (err) {
    err ?
        console.error("Server error: " + err) :
        console.log("Server listening on port " + config_1.Config.PORT);
});
