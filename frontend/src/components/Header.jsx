import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
<<<<<<< HEAD
import { LinkContainer } from 'react-router-bootstrap'
=======
>>>>>>> f7a48eb580fc7b9fdfe58861b11b364de9c53c1f
import logo from '../assets/logo.png'


const Header = () => {
  
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
          <Container>
              <LinkContainer to='/'>
                <Navbar.Brand>
                  <img src={logo} alt="logo" width="30" height="30" className="d-inline-block align-top" />
                  ProShop</Navbar.Brand>
              </LinkContainer>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                    <LinkContainer to='/cart'>
                      <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                      <Nav.Link><FaUser /> Sign In</Nav.Link>
                    </LinkContainer>
                  </Nav>
              </Navbar.Collapse> 
          </Container>    
      </Navbar>
    </header>
  )
}

export default Header