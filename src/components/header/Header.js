import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Container } from 'react-bootstrap';
import Logo from '../logo/Logo';
import { GOOGLE_API_KEY } from '../../config/index';
import { GoogleLogout } from 'react-google-login';

const Header = () => {

    const userInfo = JSON.parse(localStorage.getItem("user"));
    // console.log(userInfo)

    const logout = (response) => {
        console.log('logout', response)
    }

    const handleLogoutFailure = (response) => {
        console.log('logout fail', response)
    }

    return ( 
        
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            {/* <Container> */}
                <Navbar.Brand href="/dashboard"><Logo title='react' tagLine="Digital food menu for react" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Navbar.Text>
                        Welcome {userInfo.name}
                    </Navbar.Text>
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <NavDropdown title={
                        <img className="thumbnail-image" 
                        src={userInfo.imageUrl}
                        alt="" />
                    } id="collasible-nav-dropdown">
                        <NavDropdown.Item>
                        <GoogleLogout
                            clientId={ GOOGLE_API_KEY }
                            buttonText='Logout'
                            onLogoutSuccess={ logout } 
                            onFailure={ handleLogoutFailure }
                            >
                        </GoogleLogout>
                        </NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            {/* </Container> */}
        </Navbar>
        
     );
}
 
export default Header;