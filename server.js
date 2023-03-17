import express from 'express'
import {createSession, getPlayer, getMatchHistory, getMatchDetails, getPlayerStatus, getGodRank, getPlayerID} from './utils/paladinsApiFetcher.js'

const app = express()  

app.get('/player/:name', async (req, res)=>{
    const sessionId =  await createSession()
    const playerInfo = await getPlayer(sessionId, req.params)   
    const godRank = await getGodRank(sessionId, req.params) 

    res.json([playerInfo[0], godRank])
})
app.get('/match/:name', async (req, res)=>{
    const sessionId =  await createSession()
    const playerInfo = await getMatchHistory(sessionId, req.params)    
    const matchInfo = await getMatchDetails(sessionId, playerInfo[0].Match)
    res.json(matchInfo)
})

app.listen(3000)
