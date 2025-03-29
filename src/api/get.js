const data_shop   = require('../data/shop.json')
const weapon_stat = require('../data/weapon_stat.json')
// ------------------------------------------------------------
function get(req)
{
    let result = JSON.stringify( { message: "API not found" } )
    // api/consume_stat
    // 
    if(req.url === '/api/weapon_stat'){
        result = JSON.stringify( weapon_stat )
    }

    if(req.url === '/api/shop'){
        result = JSON.stringify( data_shop )
    }
        
    return result
}
// ------------------------------------------------------------
module.exports = get