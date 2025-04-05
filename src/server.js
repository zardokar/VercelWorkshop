const http   = require('http')
// const https  = require('https')

const get    = require('./api/get')
const post   = require('./api/post')
const utils  = require('./libs/utils')
// -----------------------------------------------
const PORT   = process.env.PORT || 9799
// -----------------------------------------------
async function onClientReq(req, resp)
{
    const method = req.method

    const header = {
                      "Content-Type" : "application/json"
                    }

    resp.writeHead( 200 , header)

    if( method === 'GET'){
        resp.write( get(req) )
    }else if( method === 'POST' ){
        
        result = await post(req)
        resp.write( result )
    }

    resp.end()
}
// -----------------------------------------------
const server = http.createServer( onClientReq )
console.log('Server is running at '+PORT)
server.listen( PORT )