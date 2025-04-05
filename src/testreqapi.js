const https      = require('https')
const utils      = require('./libs/utils')
// --------------------------------------------------------------
const URL = "https://opend.data.go.th/govspending/cgdcontract?api-key=TbZpnC94HiMYuiLzU7NWkiaq8rPrPPY9&year=2566"
// --------------------------------------------------------------
// http = 80 , https = 443
const options    = {
            host: 'opend.data.go.th',
            port: 443,
            method: "GET",
            path: "/govspending/cgdcontract?api-key=TbZpnC94HiMYuiLzU7NWkiaq8rPrPPY9&year=2566"
}

const reqeust_api = https.request( options , async (api_response) => {
    const result = await utils.collectBodyData( api_response )

    console.log( result )
}) 

reqeust_api.end()