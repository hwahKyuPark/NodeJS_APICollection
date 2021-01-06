//test 

const mongo = require('mongoose');
mongo.connect('mongodb://admin:1234@localhost:27017/DOSERATE', {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
    if(err)
    {
        console.log("데이터베이스 연결 오류");
        return;
    }
    console.log("Wow!!!");
});

var db = mongo.connection;

exports.Insert = function(data)
{
    db.collection('sample').insertOne(data[0]);
    console.log(data[0]);
}