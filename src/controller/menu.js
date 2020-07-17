const menuModel = require('../models/menu');
const helpers = require('../helpers/helpers');
const redis = require('../config/redis').client;

module.exports = {
    insertMenu: (req,res)=> {
        const {
            name,
            price,
            category
        } = req.body
        const data = {
            name,
            price,
            image: `http://${req.get('host')}/uploads/${req.file.filename}`,
            status: 1,
            category,
            count: 1
        }
        menuModel.insertMenu(data)
        .then((result)=>{
            helpers.response(res,result,200,'Data Menu Berhasil ditambahkan', null)
        })
        .catch((err)=>{
            helpers.response(res,null,500,'Something Wrong!, Please Check Your Server', err)
        })
    },
    getMenu:(req, res)=>{
        const search = req.query.search
        menuModel.getMenu(search)
        .then((result)=> {
            const data = JSON.stringify(result)
            redis.setex('allMenu', 3600, data)
            helpers.response(res,result,200,'Data Semua Menu', null)
        })
        .catch((err)=> {
            helpers.response(res,null,500,'Something Wrong!, Please Check Your Server', err)
        })
    },
    menuDetail:(req,res)=>{
        const idMenu = req.params.id_menu
        menuModel.menuDetail(idMenu)
        .then((result)=>{
            if(result.length == 0){
                helpers.response(res,null,404,`id user: ${idMenu} tidak ditemukan!`, err)
            }else{
                helpers.response(res,result,200,'Data User Detail', null)
            }          
        })
        .catch((err)=> {
            helpers.response(res,null,500,'Something Wrong!, Please Check Your Server', err)
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
                helpers.response(res,null,404,`id user: ${idMenu} tidak ditemukan!`, err)
            }else{
                helpers.response(res,result,200,`id user: ${idMenu} berhasil update`, null)
            }
        })
        .catch((err)=>{
            helpers.response(res,null,500,'something wrong!', err)
        })
    },
    deleteMenu: (req,res)=>{
        const idMenu = req.params.id_menu
        menuModel.deleteMenu(idMenu)
        .then((result)=>{
            if(result.affectedRows ==0){
                helpers.response(res,null,404,`Menu Dengan Id: ${idMenu} tidak ditemukan!`, err)
            }else{
                helpers.response(res,result,200,`Menu Dengan Id: ${idMenu} berhasil dihapus`, null)
            }
        })
        .catch((err)=> {
            helpers.response(res,null,500,'something wrong!', err)
        })
    },
    sortMenu:(req,res)=>{
        const sort = req.params.sort
        menuModel.sortMenu(sort)
        .then((result)=>{
            if(sort > 0){
                helpers.response(res,null,404,'Keyword yang anda masukkan tidak sesuai', err) 
            }else{
                helpers.response(res,result,200,`Sort Data Berdasarkan ${sort}`, null)
            }
        })
        .catch((err)=>{
            helpers.response(res,null,500,'something wrong!', err)
        })
    }
}