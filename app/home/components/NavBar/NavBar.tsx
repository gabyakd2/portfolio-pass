'use client'

import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../../public/images/logo.png';
import logogith from '../../../../public/images/github.svg';
import logolink from '../../../../public/images/linkedin.svg';
import logomail from '../../../../public/images/envelope.svg';
import Image from 'next/image';

function NavBar() {
  const [ activeLink, setActiveLink ] = useState<string>('home');
  const [ scrolled, setScrolled ] = useState<boolean>(false);

  useEffect(() => {
    if(window.scrollY > 50){
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    // window.addEventListener<"scroll">('scroll', onscroll)
    // return () => window.removeEventListener('scroll', onscroll)
  }, [])

  const onUpdateActiveLink = (value: string) => {
    setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scrolled ? 'scrolled' : '' }>
    <Container>
      <Navbar.Brand href="#home">
          <Image className='ImageLogo' width={80} height={50} src={logo} alt='logo'/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Proyectos</Nav.Link>
        </Nav>
        <span className="navbar-text">
          <div className="social-icon">
              <a href='https://github.com/gabyakd2'><Image src={logogith} alt='logogit'/></a>
              <a href='https://www.linkedin.com/in/gabriel-saldana00/'><Image src={logolink} alt='logolinked'/></a>
              <a href='mailto:gabrielsal00@hotmail.com'><Image src={logomail} alt="logomail" /></a>
          </div>
          <a href='mailto:gabrielsal00@hotmail.com'><button className='vvd'><span>Conectemos</span></button></a>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar