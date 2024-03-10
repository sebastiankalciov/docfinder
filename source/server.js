const express = require('express');
const axios = require('axios')
const app = express();

const port = 3000;

const bodyParser = require('body-parser')
app.use(bodyParser.json());


app.use(express.static('public'));

app.post('/', async function(request, response) {

    try {

        const credentials = require('./public/meta/credentials.json')
        let apiUrl = "https://maps.googleapis.com/maps/api/place/nearbysearch/json";
        let apiKey = credentials.API_KEY;
        let baseCoordinates = "45.756607139715584,21.224140385585834";

        let speciality = request.body.speciality;

        const rawData = await axios.get(apiUrl + "?keyword=" + speciality + "&location=" + baseCoordinates + "&radius=" + "1500" + "&type=" + "clinica" + "&key=" + apiKey)


        response.send(rawData.data.results)

    } catch (error){
        console.log("Error while retrieving data " + error)
    }

});

app.listen(port, function() {

    console.log('Server listening on http://localhost:' + port);
});