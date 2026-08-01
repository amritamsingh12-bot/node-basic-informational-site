const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    console.log("Request Received");

    if (req.url === "/") {

        fs.readFile("index.html", (err, data) => {
            res.end(data);
        });

    }

    else if (req.url === "/about") {

        fs.readFile("about.html", (err, data) => {
            res.end(data);
        });

    }

    else if (req.url === "/contact-me") {

        fs.readFile("contact-me.html", (err, data) => {
            res.end(data);
        });

    }

    else {

        fs.readFile("404.html", (err, data) => {
            res.end(data);
        });

    }

});

const PORT = 9000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});