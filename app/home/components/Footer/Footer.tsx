'use client'
import React from 'react'
import { Col, Container, Row  } from 'react-bootstrap';
import logo from '../../../../public/images/logo.png';
import logogith from '../../../../public/images/github.svg';
import logolink from '../../../../public/images/linkedin.svg';
import logomail from '../../../../public/images/envelope.svg';
import './footer.css'
import Image from 'next/image';

function Footer() {
  return (
    <footer className='footer'>
    <Container>
        <Row className='align-item-center'>
            <Col sm={6}>
                <Image className='imgLogo' src={logo} alt="logo footer" />
            </Col>
            <Col sm={6} className='text-center text-sm-end'>
                <div className='social-icon'>
                    <a href='https://github.com/gabyakd2'> <Image className='imgLogo' src={logogith} alt="logo gith" /> </a>
                    <a href='https://www.linkedin.com/in/gabriel-saldana00/'> <Image className='imgLogo' src={logolink} alt="logo link" /> </a>
                    <a href='mailto:gabrielsal00@hotmail.com'><Image className='imgLogo' src={logomail} alt="logomail" /></a>
                </div>
                <p>CopyRight 2022. All Right Reserved</p>
            </Col>
        </Row>
    </Container>
</footer>
  )
}

export default Footer