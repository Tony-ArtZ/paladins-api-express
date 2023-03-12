import md5 from 'md5'
import config from '../config.js'
import moment from 'moment/moment.js'

const createSignature = (methodName)=>{
    const signatureBase = config.devId + methodName + config.authKey + moment.utc().format("yyyyMMddHHmmss")
    console.log(moment.utc().format("yyyyMMddHHmmss"))
    const signature = md5(signatureBase)
    return signature
}

export default createSignature
