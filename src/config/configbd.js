
const oracledb = require('oracledb');

cns = {
    user: "USUARIO",
    password: "1234",
    connectString: "34.72.68.120/ORCL18"
}

try{
    oracledb.initOracleClient({libDir:''})
}catch (err){

}

async function Open(sql, binds, autoCommit) {
    let cnn = await oracledb.getConnection(cns);
    let result = await cnn.execute(sql, binds, { autoCommit });
    cnn.release();
    return result;
}

exports.Open = Open;