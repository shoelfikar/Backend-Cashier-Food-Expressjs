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
            helpers.response(res,result,200, 'Data Category Berhasil Ditambahkan', null)
        })
        .catch((err)=>{
            helpers.response(res,null,500, 'Something Wrong!, Please Check Your Server', err)
        })
    },
    getCat:(req,res)=>{
        const search = req.query.search
        categoryModel.getCat(search)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,null,404, 'Data Tidak Ditemukan', err)
            }else if(search){
                helpers.response(res,result,200, `Jumlah Data Yang Ditemukan Adalah : ${result.length}`, null)
            }else{
                helpers.response(res,result,200, `Data Semua Category dan Total Data: ${result.length}`, null)
            } 
        })
        .catch((err)=>{
            helpers.response(res,null,500, 'Something Wrong!, Please Check Your Server', err)
        })
    },
    detailCat:(req,res)=>{
        const category = req.params.id_category
        categoryModel.detailCat(category)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,result,404, `id category : ${category} tidak ditemukan`, null)
            }else{
                helpers.response(res,result,200, 'data category detail', null)
            }
        })
        .catch((err)=>{
            helpers.response(res,null,500, 'something wrong!, please check your server', err)
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
                helpers.response(res,result,404, `id category: ${category} tidak ditemukan`, null)
            }else{
                helpers.response(res,result,200, `id category: ${category} berhasil di update`, null)
            }
        })
        .catch((err)=>{
            helpers.response(res,null,500, 'something wrong!, please check your server', err)
        })
    }
}