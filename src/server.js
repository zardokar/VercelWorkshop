const http   = require('http')
// const https  = require('https')
const get    = require('./api/get')
// -----------------------------------------------
const PORT   = 9799
// -----------------------------------------------
function onClientReq(req, resp)
{
    resp.writeHead( 200 )

    resp.write( get(req) )

    resp.end()
}
// -----------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server is running at '+PORT)
server.listen( PORT )