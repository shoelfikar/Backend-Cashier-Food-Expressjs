const redis = require('../config/redis').client
const helpers = require('../helpers/helpers')

const getCache = (req, res, next)=> {
  redis.get('allMenu', (err, result)=> {
    if (err) {
      throw err
    }
    if (result !== null) {
      console.log('Get data from Redis')
      const data = JSON.parse(result)
      return helpers.response(res, data, 200, 'success', null)
    }else {
      next()
    }
  })
}


const delCache = (req, res, next)=> {
  redis.del('allMenu', (err)=> {
    if(err) {
      throw err
    }else{
      next()
    }
  })
}




module.exports = {
  getCache,
  delCache
}