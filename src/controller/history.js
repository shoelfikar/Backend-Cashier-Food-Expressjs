const helpers = require('../helpers/helpers')
const historyModels = require('../models/history')




const getLastMonthHistory = (req, res)=> {
    historyModels.getLastMonthHistory()
    .then(result => {
      helpers.response(res, result, 200, 'History transaksi bulan lalu', null)
    })
    .catch(err => {
      helpers.response(res, result, 500, 'internal server error!', err)
    })
}



const getCurrentMonthHistory = (req, res)=> {
  historyModels.getCurrentMonthHistory()
    .then(result =>{
      if(result.length === 0){
        helpers.response(res, null, 404, 'belum ada transaksi bulan ini', null)
      }else{
        helpers.response(res, result, 200, 'History transaksi bulan ini', null)
      }
    })
    .catch(err => {
      helpers.response(res, null, 500, 'internal server error', err)
    })
}





const getHistory = (req, res)=> {
  historyModels.todayIncome().then(todayIncome => {
    historyModels.yesterdayIncome().then(yesterdayIncome => {
      historyModels.thisYearIncome().then(thisYearIncome => {
        historyModels.lastYearIncome().then(lastYearIncome => {
          historyModels.orderThisWeek().then(orderThisWeek => {
            historyModels.orderLastWeek().then(orderLastWeek => {
              const resultNew = {
                todayIncome: todayIncome[0].todayIncome,
                yesterdayIncome: yesterdayIncome[0].yesterdayIncome,
                thisYearIncome: thisYearIncome[0].thisYearIncome,
                lastYearIncome: lastYearIncome[0].lastYearIncome,
                orderThisWeek: orderThisWeek[0].orderThisWeek,
                orderLastWeek: orderLastWeek[0].orderLastWeek
              }
              helpers.response(
                res,
                resultNew,
                200,
                "Success"
              );
            });
          });
        });
      });
    });
  });
}




module.exports = {
  getLastMonthHistory,
  getCurrentMonthHistory,
  getHistory
}