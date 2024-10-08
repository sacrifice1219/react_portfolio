import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';


const NavBar = () => {

    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () =>{
        if (window.scrollY > 50) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onscroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
      setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ' '}>
      <Container>
        <Navbar.Brand href="#home" style={{ textDecoration: 'none', color:'White', fontWeight:"bold", fontSize: '2rem'}}>LUCKY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="/"> <img src={navIcon1} alt="LinkedIn" /></a>
              <a href="www.facebook.com/itzkiddace"> <img src={navIcon2} alt="FaceBook" /></a>
              <a href="www.instagram.com/itzkiddace"> <img src={navIcon3} alt="Instagram" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;