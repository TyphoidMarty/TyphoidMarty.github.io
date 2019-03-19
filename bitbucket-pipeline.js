var http = require("https");

var options = {
    "method": "POST",
    "hostname": "api.observepoint.com",
    "port": null,
    "path": "/v2/web-journeys/<<journey id>>/runs",
    "headers": {
        "authorization": "api_key <<api key>>"
    }
};

var req = http.request(options, function (res) {
    var chunks = [];

    res.on("data", function (chunk) {
        chunks.push(chunk);
    });

    res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.write("{}");
req.end();