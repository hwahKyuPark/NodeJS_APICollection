
const moment = require("moment");
const convertFunc = require("./ConvertFunc.js");

module.exports.InsertData = function(type, data)
{
    var result ="";

    if(type == "KINS")
        result = convertFunc.KinsToInsertDataFunc(data);

    return result;
}