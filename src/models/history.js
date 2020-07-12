const db = require('../config/db')



const getLastMonthHistory = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT created_at, SUM(total) total FROM transaksi WHERE MONTH(created_at) = MONTH(DATE_SUB(CURDATE(), INTERVAL 1 MONTH)) GROUP BY DATE(created_at)", (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}



const getCurrentMonthHistory = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT DATE_FORMAT(created_at, '%Y-%m-%d') tanggal, SUM(total) total FROM transaksi WHERE MONTH(created_at) = MONTH(CURDATE()) GROUP BY MONTH(created_at)", (err, result)=> {
      if(err){
        reject(err)
      }else{
        resolve(result)
      }
    })
  })
}



const todayIncome = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT SUM(total) as todayIncome FROM transaksi WHERE created_at >= CURRENT_DATE()", (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}


const yesterdayIncome = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT SUM(total) as yesterdayIncome FROM transaksi WHERE created_at BETWEEN CURDATE() - INTERVAL 1 DAY AND CURDATE() - INTERVAL 1 SECOND", (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}


const orderThisWeek = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT COUNT(*) as orderThisWeek FROM transaksi WHERE YEARWEEK(created_at, 1) = YEARWEEK(NOW(), 1)", (err, result)=>{
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}



const orderLastWeek = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT COUNT(*) as orderLastWeek FROM transaksi WHERE created_at >= curdate() - INTERVAL DAYOFWEEK(curdate())+5 DAY AND created_at < curdate() - INTERVAL DAYOFWEEK(curdate())-2 DAY", (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}




const thisYearIncome = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT SUM(total) as thisYearIncome FROM transaksi WHERE YEAR(created_at) = YEAR(CURDATE())", (err, result)=>{
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}




const lastYearIncome = ()=> {
  return new Promise((resolve, reject)=> {
    db.query("SELECT SUM(total) as lastYearIncome FROM transaksi WHERE YEAR(created_at) = YEAR(DATE_SUB(CURDATE(), INTERVAL 1 YEAR))", (err, result)=> {
      if(err){
        reject(new Error(err))
      }else{
        resolve(result)
      }
    })
  })
}




module.exports = {
  getLastMonthHistory,
  getCurrentMonthHistory,
  todayIncome,
  yesterdayIncome,
  orderThisWeek,
  orderLastWeek,
  thisYearIncome,
  lastYearIncome
}