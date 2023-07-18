'use client'

import React, { useEffect, useState } from 'react';
import { Col, Container, Row  } from 'react-bootstrap';
import imgForm1 from '../../../../public/images/imgForm.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css';
import { ApiResponse, FormDetails, Status } from './models';
import Image from 'next/image';


function Contact() {
  const formInitalDetails: FormDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: ""
  }

  const [formDetails, setFormDetails] = useState<FormDetails>(formInitalDetails);
  const [buttonText, setButtonText] = useState<string>("Enviar");
  const [status, setStatus] = useState<Status>({
    success: false,
    message: "",
  });

  const handleFormUpdate = (category: string, value: string) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setButtonText("Enviando...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Enviar");

    if (!response.ok) {
      throw new Error("Error en la solicitud al servidor");
    }
    let result: ApiResponse = await response.json();

    setFormDetails(formInitalDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Mensaje enviado exitosamente" });
    } else {
      setStatus({
        success: false,
        message: "Algo salio mal, porfavor intente de nuevo.",
      });
    }
  }

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <Image src={imgForm1} alt="imagen form" />
          </Col>
          <Col md={6}>
            <div
              className=""
              data-aos="zoom-in"
            >
              <h2>Contáctame</h2>
              <form
                onSubmit={handleSubmit}
                action="https://formsubmit.co/gabrielsal00@hotmail.com"
                method="POST"
              >
                <Row>
                  <div className="containerInput">
                    <Col sm={6} className="px-1">
                      <input
                        name="Nombre"
                        type="text"
                        value={formDetails.firstName}
                        placeholder="Nombre"
                        onChange={(e) =>
                          handleFormUpdate("firstName", e.target.value)
                        }
                      />
                    </Col>
                    <Col sm={6} className="px-1">
                      <input
                        name="Apellido"
                        type="text"
                        value={formDetails.lastName}
                        placeholder="Apellido"
                        onChange={(e) =>
                          handleFormUpdate("lastName", e.target.value)
                        }
                      />
                    </Col>
                  </div>
                  <Col sm={6} className="px-1" id="inputEm">
                    <input
                      name="Email"
                      type="email"
                      value={formDetails.email}
                      placeholder="Email"
                      onChange={(e) =>
                        handleFormUpdate("email", e.target.value)
                      }
                    />
                  </Col>
                  <Col>
                    <textarea
                      name="Mensaje"
                      value={formDetails.message}
                      placeholder="Mensaje"
                      onChange={(e) =>
                        handleFormUpdate("message", e.target.value)
                      }
                    ></textarea>
                    <button type="submit">
                      <span>{buttonText}</span>
                    </button>
                  </Col>
                  {status.message && (
                    <Col>
                      <p
                        className={
                          status.success === false ? "danger" : "success"
                        }
                      >
                        {status.message}
                      </p>
                    </Col>
                  )}
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact