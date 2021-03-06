const userModel = require('../models/user');
const helpers = require('../helpers/helpers');
const {genSaltSync,compareSync,hashSync} = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    getUsers: (req,res)=> {
        userModel.getUsers()
        .then((result)=> {
            helpers.response(res,result,200,'Data Semua User', null)
        })
        .catch((err)=> {
            helpers.response(res,null, 500,'Something wrong!', err)
        })
    },
    insertUsers: (req,res)=>{
        const {
            username,
            email,
            password,
        } = req.body;
        const data = {
            username,
            email,
            password,
            image: 'https://cdn.clipart.email/b2f7a538d5d324b85f87c30fff789114_user-icon-clipart_600-600.svg',
            role: 'kasir',
        }
        if(req.body.username == '' || req.body.email == '' || req.body.password == ''){
            helpers.response(res,null,404,'Data Belum Lengkap!, Silahkan Dilengkapi', null)
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password,salt)
        userModel.insertUsers(data)
        .then((result)=>{
            helpers.response(res,result,200,'User berhasil dibuat', null)
        })
        .catch((err)=>{
            helpers.response(res,null,500,'Something wrong!', err)
        })
    },
    login: (req,res)=> {
        const {
            email,
            password
        } = req.body
        const data = {
            email,
            password
        }
        if(req.body.email == '' || req.body.password == ''){
            helpers.response(res,null,404,'email atau password tidak boleh kosong!')
        }
        userModel.login(data.email)
        .then((result)=> {
            const data = {
                email,
                password
            }
            result.token = jwt.sign({email: result.email, id: result.id_user}, process.env.SECRET_KEY)
            const results = compareSync(data.password,result.password)
            if(results){
                helpers.response(res,result,200,'login sukses', null)
            }else{
                helpers.response(res,null,403,'Your Password Wrong!', null)
            }
        })
        .catch((err)=> {
            helpers.response(res,null,500, 'Something Wrong!', err)
        })
    },
    userDetail: (req,res)=> {
        const idUser = req.params.id_user
        userModel.userDetail(idUser)
        .then((result)=> {
            if(result.length == 0){
                helpers.response(res,result,404,`id user: ${idUser} tidak ditemukan!`, null)
            }else{
                helpers.response(res,result,200,'Data User Detail', null)
            }          
        })
        .catch((err)=> {
            helpers.response(res,null,500,'Something Wrong!', err)
        })
    },
    deleteUsers: (req,res)=> {
        const iduser = req.params.id_user
        userModel.deleteUsers(iduser)
        .then((result)=>{
            if(result.affectedRows ==0){
                helpers.response(res,result,404,`id user: ${iduser} tidak ditemukan!`, null)
            }else{
                helpers.response(res,result,200,`id user: ${iduser} berhasil dihapus`)
            }
            
        })
        .catch((err)=> {
            helpers.response(res,null,404,'Data not Found!', err)
        })
    },
    updateUsers: (req,res)=> {
        const idUser = req.params.id_user
        const {
            username,
            email,
            password
        } = req.body
        const data = {
            username,
            email,
            password
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password,salt)
        userModel.updateUsers(idUser,data)
        .then((result)=>{
            if(result.affectedRows ==0){
                helpers.response(res,result,404,`id user: ${idUser} tidak ditemukan!`)
            }else{
                helpers.response(res,result,200,`id user: ${idUser} berhasil update`)
            }
        })
        .catch((err)=>{
            helpers.response(res,null,500,'something wrong!', err)
        })
    }
}