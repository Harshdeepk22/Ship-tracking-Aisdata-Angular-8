
const aivdmDecode = require('./aisdecode').aivdmDecode;
var net = require('net');
const express = require('express')
const app = express();
const path = require('path')
const buffer = require('buffer')
const mongoose = require('mongoose')
const cors = require('cors')
var HOST = '153.44.253.27';
var PORT = 5631;
const db = require('./dbConfig')
const modal = require('./modal')


app.use(cors())

 app.post('/postdata', function (req, res, next) {
    // Tcp Connection
    var client = new net.Socket();
    var aisDecoder = new aivdmDecode({ returnJson: false, aivdmPassthrough: true });

    // Tcp Connected
    client.connect(PORT, HOST, function () {
        client.write('Hello World!');
    });

    // Get data through Tcp
    client.on('data', function (data) {
        ais = data.toString();
        var decoded = aisDecoder.decode(ais);
        //console.log(decoded.aivdm)
        //console.log(typeof(decoded))
        //console.log('aisdata==>>>>', decoded)
        insertData(decoded);
        //Getdata();
    });
    client.on('close', function () {
        console.log('Client closed');
    });
    client.on('error', function (err) {
        console.error(err);
    });


    // Insert , Update And Find Data 
    function insertData(data, callback) {
        
        if (data) {
            db.collection('data').find({ "mmsi": data.mmsi }).toArray(function (err, docs) {
                if (err) throw err;
                //console.log(docs)
                if (docs.length) {
                    // console.log(data.lat,"latitude")
                    // console.log(data.lon,"====")
                    // Update Query
                     db.collection('data').update({ "mmsi": data.mmsi }, { $set: {"lat":data.lat,"lon":data.lon,"status":data.status,"speed":data.speed,"second":data.second} }, function (err, result) {
                         if (err)
                             throw err;
                        console.log('updated=====>>>')
                })
                }
                else {
                    db.collection('data').insertOne(data, function (err, result) {
                        if (err)
                            throw err;
                        console.log('insert')
                    })
                }
            })
        }
    }
       return res.json({"message": "successfully"})
  })
// function Getdata() {
// app.get('/getdata',function(req,res,next){
    
//     db.collection('data').find().toArray(function (err, result) {  
//         if (err)
//         throw err;
    //      return res.json({"aisData":result})
    //  })
// })
// }
// function Getdata() {
//     db.collection('data').find().toArray(function (err, result) {
//         //console.log(result)
//     })
// }

app.get('/getdata',function(req,res,next){
    db.collection('data').find().toArray(function (err, result) {
    if (err)
    throw err;
   return res.json([{"data":result}])
    })
    
})



app.listen(3001,()=>{
    console.log("server invoked")
})