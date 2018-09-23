var express = require('express')
var url = require('url')
var kafka = require('kafka-node')
var kafkaConsumer = kafka.Consumer
var kafkaClient = kafka.Client('ip-10-194-91-83.csn.internal:9092/')
var consumer = new kafkaConsumer(kafkaClient, [], {fromOffset: true})
var mongo = require('mongodb').MongoClient
var app = express()

const mongoUri = `mongodb://team2:P%40%24%24w0rd@10.194.91.117:27017`

consumer.on('message', m => {

    console.log(m);
})

app.get('/', (req,res) => {
    res.sendFile(`${__dirname}/public/views/index.html`)
})

app.get('/get/flight', (req,res) => {
    var val = getLastFlight()
    console.log('---')
    console.log(val)
    console.log('---')
    res.send(val)
})

function getLastFlight() {
    mongo.connect(mongoUri, (e,db) => {
        if (e) {
            console.log(e)
        } else {
            console.log('connected')
        }
        var o = db.db('team2')
        o.collection('flight_data').find(.sort({ stm: -1}).limit(1).toArray((e,r) => {
            if (e) {
                console.log(e)
           
            } else {
                console.log('k')
            }
            return r
        })
    })
}
app.listen(process.env.PORT || 8080)