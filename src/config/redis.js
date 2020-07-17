const redis = require('redis')
const client = redis.createClient({
  host: process.env.REDISHOST,
  port: process.env.REDISPORT,
  password: process.env.REDISPASS
})

const redisCheck = ()=> {
  return new Promise((resolve, reject)=> {
    client.get("testKey", (err, result)=> {
      if (err) {
        reject(new Error(err))
      }else{
        resolve("Connection to Redis successfully")
      }
    })
  })
}


module.exports = {
  redisCheck,
  client
}