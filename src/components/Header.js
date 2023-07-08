import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import LogoApp from '../assets/image/Logo-App.png';
import { useLocation,NavLink } from "react-router-dom";
function Header() {

  const location = useLocation();
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={LogoApp}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />

          <span>Customize Users App</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" activeKey={location.pathname}>
        
            <NavLink to='/' className='nav-link' >Home</NavLink>
           
            
           <NavLink to='/users'  className='nav-link'>Manage Users</NavLink>
           </Nav>
        <Nav>
        <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
        </Nav>
          
       
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
