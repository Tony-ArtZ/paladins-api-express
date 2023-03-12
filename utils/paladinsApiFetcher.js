import fetch from "node-fetch";
import config from "../config.js";
import createSignature from "./createSignature.js";
import moment from "moment"

const createSession = async () => {
    const response = await fetch(`https://api.paladins.com/paladinsapi.svc/createSessionJson/${config.devId}/${createSignature('createsession')}/${moment().utc().format("YYYYMMDDHHmmss")}`);
    const data = await response.json().then()
    console.log(data)
    return (data.session_id);
}

const getPlayer = async (sessionId, playerName) => {
    const response = await fetch(`https://api.paladins.com/paladinsapi.svc/getplayerjson/${config.devId}/${createSignature('getplayer')}/${sessionId}/${moment().utc().format("YYYYMMDDHHmmss")}/${playerName}`);
    const data = await response.json().then()
    console.log(data)
}

export {createSession, getPlayer}
