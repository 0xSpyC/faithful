import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync } from '../redux/reducers/products/products';

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, products, errorMessage } = useSelector(state => state.products);
    useEffect(() => {
        dispatch(loadProductsAsync())
    }, [])
  return (
    <div>
        <h1>Wallet Listing</h1>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {products && console.log(Object.entries(products.items))}
        {/* {users && Object.keys(users.item).map((item, user) => (
            <h5 key ={user.address}>{user.name}</h5>

    ))} */}
    </div>
  )
}

export default ProductsPage;