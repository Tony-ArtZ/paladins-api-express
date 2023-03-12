import express from 'express'
import {createSession, getPlayer} from './utils/paladinsApiFetcher.js'

const app = express()

app.get('/player/:name', async (req, res)=>{
    const sessionId =  await createSession()
    const playerInfo = await getPlayer(sessionId, req.params)    

    res.json(playerInfo[0])
})

app.listen(3000)
