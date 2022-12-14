import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductsAsync } from '../redux/reducers/products/products';
import Card from '../components/Card';
import Container from '@mui/material/Container'
import {createUseStyles} from 'react-jss'
import { sizing } from '@mui/system';
//import AddProductCard from '../components/AddProductCard'
import {ABI} from '../helper/abi'
import {ethers} from 'ethers'

const useStyles = createUseStyles({
  hero: {
    width: '100%',
    height: '100vh',
    maxWidth: '100%',
    padding: '20px'
  },
  containerUp: {
      display:'flex',
      boxSizing:'border-box',
      maxWidth:'100%',
      justifyContent: 'center',
      backgroundColor: 'rgba(21, 21, 21, 0.05)',
      borderRadius: '20px',
      marginBottom: '35px'
  },
  containerDown: {
    display:'flex',
    boxSizing:'border-box',
    maxWidth:'100%',
    height:'400px',
    justifyContent: 'center',
    backgroundColor: 'rgb(104, 33, 125)',
    borderRadius: '20px',
}
})

const provider = new ethers.providers.Web3Provider(window.ethereum);
const signer = provider.getSigner();
function get(){
let faithfulContract = new ethers.Contract("0x5F9A9EeBa8914e95E02C1c69792e2b1C14440bCE", ABI, signer);
    console.log(faithfulContract)
    //console.log(ethers.encodeFunctionResult("balanceOf", ["0xFaC8613f930515C8E4a2B6E70B5B61918354b348"]))
    // let ffulbalance
    // console.log(Addr)
	faithfulContract.owner().then((response) => console.log(response));
}

const ProductsPage = () => {
    const dispatch = useDispatch();
    const { isLoading, products, errorMessage } = useSelector(state => state.products);
    const classes = useStyles()
    useEffect(() => {
        dispatch(loadProductsAsync())
    }, [])
  return (
    <Container maxWidth="sm"className={classes.hero}>
    <Container maxWidth="sm" className={classes.containerUp}>
        {isLoading && <h3>Loading...</h3>}
        {errorMessage && <h3>{errorMessage}</h3>}
        {get()}
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
    {/* <AddProductCard /> */}
    </Container>
    <Container className={classes.containerDown}>

    </Container>
    </Container>
  )
}

export default ProductsPage;