import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync } from '../redux/reducers/products/products';
import Card from '../components/Card';
import Container from '@mui/material/Container'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  container: {
      display:'flex',
      maxWidth:'100%',
      justifyContent: 'center'
  }
})


const ProductsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, products, errorMessage } = useSelector(state => state.products);
    const classes = useStyles()
    useEffect(() => {
        dispatch(loadProductsAsync())
    }, [])
  return (
    <Container maxWidth="sm" className={classes.container}>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        
        {products && Object.entries(products).map((key) =>
        <Card 
        key={key[1][0]}
        id={key[1][0]}
        name={key[1][1]}
        details={key[1][2]}
        imageCID={key[1][3]}
        reviewsCID={key[1][4]}
        hashCID={key[1][5]}
        tokenPool={key[1][6]}
        />)}
        {/* {users && Object.keys(users.item).map((item, user) => (
            <h5 key ={user.address}>{user.name}</h5>

    ))} */}
    </Container>
  )
}

export default ProductsPage;