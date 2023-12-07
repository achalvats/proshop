import { Row, Col } from 'react-bootstrap'
// import products from '../products.js' // not fetching the products from the hardcoded list but calling from backend using axios
import { useEffect, useState } from 'react'
import Product from '../components/Product.jsx'
import axios from'axios'


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts =async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    }
    fetchProducts();
  }, [])


  return (
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
  )
}

export default HomeScreen