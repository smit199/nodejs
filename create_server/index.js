const http = require("http");
const server = http.createServer((request, response) => {
    console.log(request.headers);
    response.end("Hello World!!!!!")
});
server.listen(5000);