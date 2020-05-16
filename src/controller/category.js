const categoryModel = require('../models/category')
const helpers = require('../helpers/helpers')

module.exports = {
    insertCat: (req,res)=>{
        const {
            name_category
        } = req.body
        const data = {
            name_category
        }
        categoryModel.insertCat(data)
        .then((result)=>{
            helpers.response(res,result,200, 'Data Category Berhasil Ditambahkan')
        })
        .catch((err)=>{
            helpers.response(res,err,500, 'Something Wrong!, Please Check Your Server')
        })
    },
    getCat:(req,res)=>{
        const search = req.query.search
        categoryModel.getCat(search)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,result,203, 'Data Tidak Ditemukan')
            }else if(search){
                helpers.response(res,result,200, `Jumlah Data Yang Ditemukan Adalah : ${result.length}`)
            }else{
                helpers.response(res,result,200, `Data Semua Category dan Total Data: ${result.length}`)
            } 
        })
        .catch((err)=>{
            helpers.response(res,err,500, 'Something Wrong!, Please Check Your Server')
        })
    },
    detailCat:(req,res)=>{
        const category = req.params.id_category
        categoryModel.detailCat(category)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,result,403, `id category : ${category} tidak ditemukan`)
            }else{
                helpers.response(res,result,200, 'data category detail')
            }
        })
        .catch((err)=>{
            helpers.response(res,err,500, 'something wrong!, please check your server')
        })
    },
    updateCat:(req, res)=>{
        const category = req.params.id_category
        const {
            name_category
        } = req.body
        const data = {
            name_category
        }
        categoryModel.updateCat(category,data)
        .then((result)=>{
            if(result.affectedRows == 0){
                helpers.response(res,result,403, `id category: ${category} tidak ditemukan`)
            }else{
                helpers.response(res,result,200, `id category: ${category} berhasil di update`)
            }
        })
        .catch((err)=>{
            helpers.response(res,err,500, 'something wrong!, please check your server')
        })
    }
}