const { columns } = require('mssql')
const config = require('./dbConfig')
sql = require('mssql')


//First version to test, nom API call:
const getNoms = async () => {
    try {
        let getNoms = await sql.connect(config);
        let noms = await getNoms.request().query("SELECT * from ENT_PT_BALANCE")
        return noms;
    }
    catch (error) {
        console.log(error);
    }
}


module.exports = {
    getNoms,
}