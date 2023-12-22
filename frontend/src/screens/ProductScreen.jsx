import { Row, Col, Image, ListGroup, Card, Button} from 'react-bootstrap'
import Rating from '../components/Rating'
import { useParams, Link } from 'react-router-dom'

// using redus tool kit instead of axios
// import products from '../products' // not fetching the products from the hardcoded list but calling from backend using axios
// import { useState, useEffect } from 'react'
// import axios from 'axios'

import { useGetProductDetailsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader.jsx'
import Message from '../components/Message.jsx'

const ProductScreen = () => {

    const { id: productId } = useParams();
    const { data: product, isLoading, error} = useGetProductDetailsQuery(productId);



    // switching redux from axios
    // const [product, setProduct] = useState({})

    
    // // const product = products.find((p) => p._id === productId);
    // // console.log(productId)
    // // console.log(product);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //         const { data } = await axios.get(`/api/products/${productId}`)
    //         setProduct(data)
    //     }
    //     fetchProduct()
    // }, [productId])
  return (
    // <>ProductScreen</>
    <>
      { isLoading ? (
        <Loader/>
      ) : error ? (
        <Message variant= 'danger'>
          { error?.data?.message || error.error }
        </Message>
      ) : (
        <>
        <Link className='btn btn-light my-3' to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
                <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                    </ListGroup.Item>
                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                    <ListGroup.Item>{product.description}</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price</Col>
                            <Col>
                                <strong> ${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Status</Col>
                            <Col>
                                <strong> {product.countInStock > 0 ? "In Stock" : "Out of Stock"}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button className='btn-block' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                    </ListGroup.Item>
                </ListGroup>
                </Card>                
            </Col>
        </Row>
    </>
      ) }
        
    </>

    
  )
}

export default ProductScreen