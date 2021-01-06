var url = 'https://iernet.kins.re.kr/IERNet.asmx/xmlData?UID=Busan&AKEY=6Ue3FxPi1KxjDEvEwm1Gf4wQWQrD91z1MpxP7Xn3uA7Co2CV9a';
var convert = require('xml-js');
var request = require('request');

module.exports.Run = function(callbackProcess)
{
    request.get(url, (err, res, body)=>{
        if(err)
        {
            console.log('err=>${err}')        
        }else{
            if(res.statusCode == 200)
            {
                var result = body;  
                var xmlToJson = convert.xml2json(result,{compact:true, spaces:4});
                var data = JSON.parse(xmlToJson).DataTable["diffgr:diffgram"].DocumentElement.DataTable

                // 데이터 전달
                callbackProcess.Process("KINS",data);
            }        
        }
    });    
}


