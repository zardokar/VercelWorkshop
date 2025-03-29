const http   = require('http')
// const https  = require('https')
// -----------------------------------------------
const PORT   = 9799
// -----------------------------------------------
function onClientReq(req, resp)
{
    resp.writeHead( 200 )

    resp.write( 'Hello World : XXXX' )

    resp.end()
}
// -----------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server is running at '+PORT)
server.listen( PORT )