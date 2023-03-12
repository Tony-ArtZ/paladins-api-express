import express from 'express'
import {createSession, getPlayer} from './utils/paladinsApiFetcher.js'

const sessionId =  await createSession()
const playerInfo = await getPlayer(sessionId, 'TonyArtZ')

console.log(playerInfo)
const app = express()

app.listen(3000)
