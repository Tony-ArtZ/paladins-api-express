import fetch from 'node-fetch'
import createSignature from './utils/createSignature.js'
import express from 'express'
import config from './config.js'
import moment from 'moment/moment.js'
const respone = await fetch(`https://api.paladins.com/paladinsapi.svc/createSessionJson/${config.devId}/${createSignature('createsession')}/${moment.utc().format("yyyyMMddHHmmss")}`);
const data = await respone.json()

console.log(data)

const app = express()

app.listen(3000)
