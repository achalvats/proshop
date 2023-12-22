import { Row, Col } from 'react-bootstrap'
// import products from '../products.js' // not fetching the products from the hardcoded list but calling from backend using axios
// import { useEffect, useState } from 'react'
// import axios from'axios' ?? not using this because of reduc toolkit

import Product from '../components/Product.jsx'

import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

const HomeScreen = () => {
  const { data: products, isLoading, error} = useGetProductsQuery();





  //This section was used with axios
  // const [products, setProducts] = useState([]);
  
  // useEffect(() => {
  //   const fetchProducts =async () => {
  //     const { data } = await axios.get('/api/products');
  //     setProducts(data);
  //   }
  //   fetchProducts();
  // }, [])
 // end here, will be deleted in future


  return (
    <>
      { isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant= 'danger'>
          { error?.data?.message || error.error }
        </Message>
      ) : (
        <>
        <h1>Latest Products</h1>
        <Row>
            { products.map((prod) => (
                <Col key={prod._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={prod} />
                </Col>
            ))}
        </Row>
        </>
      ) }
        
    </>
  )
}

export default HomeScreen