import React from 'react'
import {createUseStyles} from 'react-jss'
import Container from '@mui/material/Container';
import Card from '../components/Card';

const useStyles = createUseStyles({
    container: {
        display:'flex',
        maxWidth:'100%',
        justifyContent: 'center'
    }
  })

const ProductsContainer = () => {
    const classes = useStyles()
  return (
      <Container maxWidth="sm" className={classes.container}>
        <Card />
        <Card />
        <Card />
        <Card />
      </Container>
  )
}

export default ProductsContainer