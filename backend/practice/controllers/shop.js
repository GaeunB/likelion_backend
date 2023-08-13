const Product =require('../models/product');
const Cart =require('../models/cart');

//모든 상품 정보 다 가져오기
exports.getProducts=(req,res,next)=>{
  Product.fetchAll(product=>{
    res.render('shop/product-list',{
      prods:products,
      pageTitle:'All Products',
      path:'/products'       
    }
    );
  });};

//id를 가져온다. 그 id에 해당하는 상품 정보를 가져온다.
exports.getProduct=(req,res,next)=>{
  const proId=req.params.productId;
  Product.findById(proId,product=>{
    res.render('shop/product-detail',{
      product:product,
      pageTitle:product.title,
      path:'/products'
    });
  });
};

//실제 페이지를 렌더링해봐도 shop페이지와 products페이지를 모르겠다.
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};

//장바구니 페이지
exports.getCart=(req,res,next)=>{
  Cart.getCart(cart=>{
    Product.fetchAll(products=>{
      const cartProducts=[]; 
      for (product of products){
        const cartProducts = cart.products.find(
          prod=> prod.id===product.id
        );
        if (cartProductData){
          cartProducts.push({productData:product, qty:
          cartProductData.qty});
        }
      }

    })
  })
}
