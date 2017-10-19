var db = require('./public/database.json')

console.log(
    JSON.stringify(
        db.reduce(
            (result, next) => ({ ...result, [next.id]: next }) ,
            {}
        )
    )
)

// To run this script and get JSON file with db use:
//
// $ node prepareData.js > out.json
