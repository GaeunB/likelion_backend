//불러올것 불러오고
const path=require('path');
const express =require('express');
const adminController=require('../controllers/admin');

//라우터 객체 생성
const router=express.Router();

//경로와 방식 그리고 컨트롤러 지정한다. router에다..
router.get('/add-product',adminController.getAddProduct);

router.get('/products',adminController.getProducts);

router.post('/add-product',adminController.getAddProduct);

router.post('/add-product',adminController.postAddProduct);

router.get('/edit-product/:productId',adminController.getEditProduct);

router.post('/edit-product',adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

//router를 내보낸다. 
module.exports=router;
