// api 
const apiKins = require('../API/ApiKins.js');

// module
const converModule = require('../Convert/ConvertModule.js');
const dbModule = require('../DB/DBModule.js');

module.exports.Start = function()
{
    // 데이터 수집 시작
    apiKins.Run(this);
}

module.exports.Process = function(type, data)
{
    var result = "";
    // 데이터 파서
    if(type == "KINS")
        result = converModule.InsertData(type, data);

    // 데이터 DB 저장
    dbModule.Insert(result);
}