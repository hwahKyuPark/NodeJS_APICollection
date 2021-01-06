const moment = require("moment");

function ConvertFunc()
{

}

ConvertFunc.prototype.ConverDataFunc = function(key, name, doserate, time)
{
    var dataInfo = 
    {
        apiKey : "",
        apiName : "",
        doserate : "",
        time : "",
        updateTime:""
    };

    dataInfo.apiKey = key;
    dataInfo.apiName = name;
    dataInfo.doserate = doserate;
    dataInfo.time = time;
    dataInfo.updateTime = moment().format("yyyy-MM-DD HH:MM:ss");

    return dataInfo;
}

ConvertFunc.prototype.KinsToInsertDataFunc = function(data)
{
    var resultList = [];

    // name, erm, unit, time
    for(var i in data)
    {
        var apiKey = "KINS_"+data[i].name._text;
        var apiName = data[i].name._text;
        var doserate = data[i].erm._text+ " " + data[i].unit._text;
        var time = data[i].time._text;
        
        // api 정보
        var apiInfo = this.ConverDataFunc(apiKey, apiName, doserate, time);

        resultList.push(apiInfo);
    }
    
    return resultList;
}


ConvertFunc.prototype.KHNPToInsertDataFunc = function(data)
{

}

module.exports = new ConvertFunc();