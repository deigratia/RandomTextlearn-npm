const _= require("lodash");

let randomText = "ThIs iS A RAndom TExt";

randomText = _.toLower(randomText);
console.log(`using toLower :${randomText}`);
//
randomText = _.startCase(randomText);
console.log(`using starCase :${randomText}`);

randomText = _.toUpper(randomText);
console.log(`using toUpper :${randomText}`);

//---------------------------------------------------------------------------

const http = require("http")

const HOST = "localhost"
const PORT = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end(`Hello Server !!!!, ${randomText}`)
}

const server = http.createServer(requestHandler)

server.listen(PORT, HOST, err => {
  if (err) {
    return console.log("Something bad happened", err)
  }

  console.log(`Server is listening on ${HOST}:${PORT}`)
})
