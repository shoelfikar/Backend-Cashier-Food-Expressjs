const menuModel = require('../models/menu');
const helpers = require('../helpers/helpers');

module.exports = {
    insertMenu: (req,res)=> {
        const {
            name,
            price,
            // status,
            category
        } = req.body
        const data = {
            name,
            price,
            image: `http://localhost:7000/uploads/${req.file.filename}`,
            status: 1,
            category
        }
        menuModel.insertMenu(data)
        .then((result)=>{
            helpers.response(res,result,200,'Data Menu Berhasil ditambahkan')
        })
        .catch((err)=>{
            helpers.response(res,err,404,'Something Wrong!, Please Check Your Server')
        })
    },
    getMenu:(req, res)=>{
        const search = req.query.search
        menuModel.getMenu(search)
        .then((result)=> {
            helpers.response(res,result,200,'Data Semua Menu')
        })
        .catch((err)=> {
            helpers.response(res,err,500,'Something Wrong!, Please Check Your Server')
        })
    },
    menuDetail:(req,res)=>{
        const idMenu = req.params.id_menu
        menuModel.menuDetail(idMenu)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,result,404,`id user: ${idMenu} tidak ditemukan!`)
            }else{
                helpers.response(res,result,200,'Data User Detail')
            }          
        })
        .catch((err)=> {
            helpers.response(res,err,500,'Something Wrong!, Please Check Your Server')
        })
    },
    updateMenu:(req,res)=>{
        const idMenu = req.params.id_menu
        const {
            name,
            price,
            status,
            category
        } = req.body
        const data = {
            name,
            price,
            image:`http://localhost:7000/uploads/${req.file.filename}`,
            status,
            category
        }
        menuModel.updateMenu(idMenu,data)
        .then((result)=>{
            if(result.affectedRows ==0){
                helpers.response(res,result,404,`id user: ${idMenu} tidak ditemukan!`)
            }else{
                helpers.response(res,result,200,`id user: ${idMenu} berhasil update`)
            }
        })
        .catch((err)=>{
            helpers.response(res,err,404,'something wrong!')
        })
    },
    deleteMenu: (req,res)=>{
        const idMenu = req.params.id_menu
        menuModel.deleteMenu(idMenu)
        .then((result)=>{
            if(result.affectedRows ==0){
                helpers.response(res,result,404,`Menu Dengan Id: ${idMenu} tidak ditemukan!`)
            }else{
                helpers.response(res,result,200,`Menu Dengan Id: ${idMenu} berhasil dihapus`)
            }
        })
        .catch((err)=> {
            helpers.response(res,err,404,'Data not Found!')
        })
    },
    sortMenu:(req,res)=>{
        const sort = req.params.sort
        menuModel.sortMenu(sort)
        .then((result)=>{
            if(sort > 0){
                helpers.response(res,err,404,'Keyword yang anda masukkan tidak sesuai') 
            }else{
                helpers.response(res,result,200,`Sort Data Berdasarkan ${sort}`)
            }
        })
        .catch((err)=>{
            helpers.response(res,err,404,'Keyword yang anda masukkan tidak sesuai')
        })
    }
}