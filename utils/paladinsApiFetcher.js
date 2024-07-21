import fetch from "node-fetch";
import createSignature from "./createSignature.js";
import moment from "moment";
import "dotenv/config";

const createSession = async () => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/createSessionJson/${
      process.env.devId
    }/${createSignature("createsession")}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}`
  );
  const data = await response.json().then();
  return data.session_id;
};

const getPlayer = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayerjson/${
      process.env.devId
    }/${createSignature("getplayer")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${playerName.name}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};
const getGodRank = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getgodranksjson/${
      process.env.devId
    }/${createSignature("getgodranks")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${playerName.name}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};

const getPlayerID = async (sessionId, playerName) => {
  console.log(playerName);
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayeridbynamejson/${
      process.env.devId
    }/${createSignature("getplayeridbyname")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${playerName.name}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};

const getMatchDetails = async (sessionId, matchId) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getmatchdetailsjson/${
      process.env.devId
    }/${createSignature("getmatchdetails")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${matchId}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};
const getPlayerStatus = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getplayerstatusjson/${
      process.env.devId
    }/${createSignature("getplayerstatus")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${playerName.name}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};
const getMatchHistory = async (sessionId, playerName) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getmatchhistoryjson/${
      process.env.devId
    }/${createSignature("getmatchhistory")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${playerName.name}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};
const getMatchPlayerDetails = async (sessionId, matchId) => {
  const response = await fetch(
    `https://api.paladins.com/paladinsapi.svc/getmatchplayerdetailsjson/${
      process.env.devId
    }/${createSignature("getmatchhistory")}/${sessionId}/${moment()
      .utc()
      .format("YYYYMMDDHHmmss")}/${matchId}`
  );
  const data = await response.json().then();
  console.log(data);
  return data;
};

export {
  createSession,
  getPlayer,
  getMatchHistory,
  getMatchDetails,
  getPlayerStatus,
  getPlayerID,
  getGodRank,
  getMatchPlayerDetails,
};
