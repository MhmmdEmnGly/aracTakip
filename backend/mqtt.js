import mqtt from 'mqtt'

var mqttData = []
var client = mqtt.connect('mqtt://37.148.212.112')

client.on('connect', function () {
    client.subscribe("megTest/carTest2")
    console.log("Connection successful")

});

client.on('message', function (topic, message) {
    var date = new Date()
    var datetime = date.toLocaleString('tr-TR', {
        timeZone: 'Europe/Istanbul'
    })
    const inComingData = JSON.parse(message.toString())
    inComingData.datetime = datetime
    mqttData.push(inComingData);
    console.log(inComingData)
});

// client.on('message', function (topic, message) {
//     var date = new Date()
//     var datetime = date.toLocaleString('tr-TR', {
//         timeZone: 'Europe/Istanbul'
//     })
//     const inComingData = {}
//     //const inComingData = JSON.parse(message.toString())
//     try {
//         console.log(message.toString())
//         var infos = message.toString().split('~')
//         var gpsDegree = convertCoordinates(infos[0].split(': ')[1])
//         inComingData.gps = gpsDegree
//         inComingData.csq = infos[1].split(': ')[1]
//         inComingData.cpsi = infos[2].split(': ')[1]
//         //inComingData.data = message.toString()
//         inComingData.datetime = datetime
//         mqttData.push(inComingData);
//     } catch(err) {
//         console.log(err)
//     }
//     console.log(convertCoordinates(inComingData.gps))

//     function convertCoordinates(coordinate) {
//         var latitudePart = coordinate.split(',N')[0];
//         var longitudePart = coordinate.split('N,')[1].split(',E')[0];
        
//         var latitudeDegrees = parseInt(latitudePart.substring(0, 2));
//         var latitudeMinutes = parseFloat(latitudePart.substring(2));
//         var latitudeDecimal = latitudeDegrees + (latitudeMinutes / 60);
        
//         var longitudeDegrees = parseInt(longitudePart.substring(0, 3));
//         var longitudeMinutes = parseFloat(longitudePart.substring(3));
//         var longitudeDecimal = longitudeDegrees + (longitudeMinutes / 60);
        
//         return [parseFloat(longitudeDecimal.toFixed(6)),parseFloat(latitudeDecimal.toFixed(6))];
//     }
    
//     console.log(inComingData)
// });

export default mqttData;