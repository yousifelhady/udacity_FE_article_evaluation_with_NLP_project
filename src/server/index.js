const dotenv = require('dotenv');
dotenv.config();

var path = require('path')

const mockAPIResponse = require('./mockAPI.js')

const PORT = 5000

const meaningCloudAPIKey = process.env.MEANING_CLOUD_API_KEY

const BASE_API_URL = 'https://api.meaningcloud.com/sentiment-2.1'

const express = require('express')
const cors = require('cors')
const fetch = require('node-fetch')
const app = express()
app.use(express.static('dist'))
app.use(cors())
app.use(express.json())

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile('src/client/views/index.html')
})

// INFO: a route that handling post request for new URL that coming from the frontend
app.post('/add-url', async (req, res) => {
    try {
        var submittedUrl = req.body.url
        var builtUrl = `${BASE_API_URL}?key=${meaningCloudAPIKey}&url=${submittedUrl}&lang=en`
        console.log(builtUrl)
        var apiResponse = await fetch(builtUrl)
        var apiResponseData = await apiResponse.json()
        
        var responseObject = {
            text: apiResponseData.sentence_list[0].text,
            score_tag : apiResponseData.score_tag,
            agreement : apiResponseData.agreement,
            subjectivity : apiResponseData.subjectivity,
            confidence : apiResponseData.confidence,
            irony : apiResponseData.irony
        }
        console.log(responseObject)
        res.send(responseObject)
    } catch (error) {
        console.log("error:" + error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

// TODO: export app to use it in the unit testing
