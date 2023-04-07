import express from 'express'
import {createSession, getPlayer, getMatchHistory, getMatchDetails, getPlayerStatus, getGodRank, getPlayerID, getMatchPlayerDetails} from './utils/paladinsApiFetcher.js'

const app = express()  
const sessionId =  await createSession()

setInterval(async ()=>{sessionId =  await createSession()
},900000)

app.get('/player/:name', async (req, res)=>{
    console.log(req.params)

    const playerInfo = await getPlayer(sessionId, req.params)   
    const godRank = await getGodRank(sessionId, req.params) 

    res.json([playerInfo[0], godRank])
})
app.get('/currentmatch/:id', async (req, res) => {
    console.log(req.params)
    const playerStatus = await getPlayerStatus(sessionId, req.params)
    const matchId = playerStatus[0].match_queue_id
    const liveMatchDetails = await getMatchPlayerDetails(sessionId, matchId)
    res.json(liveMatchDetails)
})
app.get('/match/:name', async (req, res)=>{
    const playerInfo = await getMatchHistory(sessionId, req.params)    
    const matchInfo = await getMatchDetails(sessionId, playerInfo[0].Match)
    res.json(matchInfo)
})


app.listen(3000)
