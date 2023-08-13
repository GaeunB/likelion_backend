const Product =require('../models/product');

exports.getAddProduct = (req,res,next)=>{
  res.render('admin/edit-product',{
    pageTitle:'Add Product',
    path:'/admin/add-product',
    editing:false
  });
};

exports.postAddProduct=(req,res,next)=>{
  const title=req.body.title;
  const imageUrl=req.body.imageUrl;
  const price=req.body.price;
  const description=req.body.discription;
  const product=new Product(null,title, imageUrl,description,price);
  product.save();
  res.redirect('/');
};

exports.getEditProduct=(req,res,next)=>{
  const editMode=req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }
  const proId=req.params.productId;
  Product.findById(prodId, product=>{
    if (!product){
      return res.redirect('/');
    }
  })





}




