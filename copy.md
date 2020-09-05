/admin
    - signup
    - signin
    - signout
    - check

/user
    - signup
    - signin
    - signout
    - check
    - password

/products
    - addProduct (admin)
    - editProduct (admin)
    - deleteProduct (admin)
    - getProduct (guest)
    - getProducts (admin, guest)
    - changeProductStatus (admin)
    
/coupons
    - addCoupon (admin)
    - editCoupon (admin)
    - deleteCoupon (admin)
    - applyCoupon (user)
    - getCoupons (admin)
    - changeCouponStatus (admin)

/orders
    - createOrder (user)
    - payOrder (user)
    - shipOrder (admin)
    - completeOrder (user)
    - cancelOrder (user)
    - getOrder (user)
    - getOrders (admin, user)

/image
    - uploadImage (admin)

/cart
    - addCart (user)
    - deleteCart (user)
    - deleteCartProduct (user)
    - editCartProductQty (user)
    - getCart (user)

