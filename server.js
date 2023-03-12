import express from 'express'
import createSession from './utils/paladinsApiFetcher.js'

const sessionId = createSession()
console.log(sessionId)

const app = express()

app.listen(3000)
