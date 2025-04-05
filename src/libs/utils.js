function collectBodyData(req)
{   
    let body = ""

    return new Promise( (resolve) => {
        req.on("data", (chunk) => {
            body = body + chunk.toString()
        })

        req.on("end", () => {
            try {
              const data = JSON.parse(body)
              resolve(data)
            }catch(excp){
                console.log('Error !!!!!\n')
                console.log(excp)
                console.log("-----------------------------------")
                console.log(body)
                resolve({})
            }
        })
    })
}

// -------------------------------------------
module.exports = {
                    collectBodyData
}