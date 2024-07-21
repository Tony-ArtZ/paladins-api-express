import md5 from "md5";
import "dotenv/config";
import moment from "moment/moment.js";

const createSignature = (methodName) => {
  const signatureBase =
    process.env.devId +
    methodName +
    process.env.authKey +
    moment().utc().format("YYYYMMDDHHmmss");
  const signature = md5(signatureBase);
  return signature;
};

export default createSignature;
