const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const SpotifyWebApi = require('spotify-web-api-node')

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.post('/login', (req, res) => {
    const code = req.body.code
    console.log("CODE="+code)
    console.log("ATTEMPT_TO_CREATE_SPOTIFY_API")
    const spotifyApi = new SpotifyWebApi({
        redirectUri:'http://localhost:3000',
        clientId:'4b37dc474d8d49f49cbb4c2579ecb285',
        clientSecret:'727ec1d270694ca49a02252e2f9ff358'

    })
    console.log("SPOTIFY_API_CRETED")

    spotifyApi.authorizationCodeGrant(code).then(data=> {
        console.log("SENDING_RESPONSE_TO_SPOTIFY_API")
        res.json({
            accessToken: data.body.access_token,
            refreshToken: data.body.refresh_token,
            expiresIn: data.body.expires_in,
        })
        console.log("RESPONSE_SENT_TO_SPOTIFY_API")
    }).catch((err)=>{
        console.log(err)
        res.sendStatus(400)
    })
    
})

app.listen(3003)