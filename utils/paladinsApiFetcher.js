import fetch from 'node-fetch'
import config from '../config.js'
import createSignature from './createSignature.js'
import moment from 'moment'

const createSession = async () => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/createSessionJson/${
      config.devId
    }/${createSignature('createsession')}/${moment()
      .utc()
      .format('YYYYMMDDHHmmss')}`,
  )
  const data = await response.json().then()
  return data.session_id
}

const getPlayer = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayerjson/${
      config.devId
    }/${createSignature('getplayer')}/${sessionId}/${moment()
      .utc()
      .format('YYYYMMDDHHmmss')}/${playerName.name}`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}
const getGodRank = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getgodranksjson/${
      config.devId
    }/${createSignature('getgodranks')}/${sessionId}/${moment()
      .utc()
      .format('YYYYMMDDHHmmss')}/${playerName.name}`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}

const getPlayerID = async (sessionId, playerName) => {
    console.log(playerName)
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayeridbynamejson/${
      config.devId
    }/${createSignature('getplayeridbyname')}/${sessionId}/${moment()
      .utc()
      .format('YYYYMMDDHHmmss')}/${playerName.name}`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}

const getMatchDetails = async (sessionId, matchId) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getmatchdetailsjson/${
      config.devId
    }/${createSignature(
      'getmatchdetails',
    )}/${sessionId}/${moment().utc().format('YYYYMMDDHHmmss')}/${matchId}`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}
const getPlayerStatus = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayerstatusjson/${
      config.devId
    }/${createSignature(
      'getplayerstatus',
    )}/${sessionId}/${moment().utc().format('YYYYMMDDHHmmss')}/${playerName.name}`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}
const getMatchHistory = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getmatchhistoryjson/${
      config.devId
    }/${createSignature(
      'getmatchhistory',
    )}/${sessionId}/${moment().utc().format('YYYYMMDDHHmmss')}/${
      playerName.name
    }`,
  )
  const data = await response.json().then()
  console.log(data)
  return data
}

export { createSession, getPlayer, getMatchHistory, getMatchDetails, getPlayerStatus, getPlayerID, getGodRank}
