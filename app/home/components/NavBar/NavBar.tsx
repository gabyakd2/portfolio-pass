'use client'

import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap';
import logo from '../../../../public/images/logo.png';
import logogith from '../../../../public/images/github.svg';
import logomail from '../../../../public/images/envelope.svg';

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

  return (
    <div>
      
    </div>
  )
}

export default NavBar