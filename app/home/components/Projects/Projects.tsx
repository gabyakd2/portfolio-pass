'use client'

import React, { useEffect } from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import colorSharp2 from "../../../../public/images/color-sharp2.png";
import imgproj1 from "../../../../public/images/gamepedia2.png";
import imgproj2 from "../../../../public/images/notwaste.png";
import imgproj3 from "../../../../public/images/dcarbone2.png";
import imgproj4 from "../../../../public/images/fotopivr2.png";
import styles from "./projects.module.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import Image from "next/image";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className={styles.project} id="projects">
      <Container>
        <Row>
          <Col>
            <div className="" data-aos="flip-left">
              <h2>Proyectos</h2>
              <p>
                Algunos proyectos en los cuales trabajé y pude desarrollar de
                manera freelance. Donde me pude desempeñar en algunos como
                Fullstack y otros como Frontend.
              </p>
            </div>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <Image
                          src={imgproj1}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Videogames App</h4>
                          <span>
                            "Aplicación de videojuegos donde se pueden realizar
                            búsquedas, filtrados, ordenamientos y creación de
                            los mismos."
                          </span>
                          <div>
                            <a href="https://github.com/gabyakd2/Videogames-App">
                              <button className={styles.buttonCard}>
                                Repo <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="https://deploy-videogames-jet.vercel.app/">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <Image
                          src={imgproj2}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Not Waste</h4>
                          <span>
                            "E-commerce desarrollado con la idea principal de
                            evitar la generación de residuos, hacer que más
                            personas puedan acceder a alimentos comprando a
                            precio reducido a través de la compra-venta de los
                            mismos que sean sobrantes o proximos a vencer. "
                          </span>
                          <div>
                            <a href="https://github.com/SerCM/not-waste_PF-HENRY">
                              <button className={styles.buttonCard}>
                                Repo <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="https://not-waste-app.vercel.app/">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                            <a href="https://www.youtube.com/watch?v=Ricsgx0oQ84&ab_channel=GabrielSalda%C3%B1a">
                              <button className={styles.buttonCard}>
                                Video <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <Image
                          src={imgproj3}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>DeCarboneCompraTodo</h4>
                          <span>
                            "App realizada de manera freelance para
                            emprendimiento."
                          </span>
                          <div>
                            {/* <button>Repo <ArrowRightCircle size={25} /></button> */}
                            <a href="https://dcarbonetecompratodo.com/">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col sm={6} md={4}>
                      <div className={styles.projimgbx} data-aos="flip-up">
                        <Image
                          src={imgproj4}
                          alt="img card"
                          className="img-fluid"
                        />
                        <div className={styles.projtxtx}>
                          <h4>Pi - Vr Argentina</h4>
                          <span>
                            "Aplicación desarrollada para cliente con diesño
                            realizado por el mismo, donde se pueden observar
                            distintos productos para la venta."
                          </span>
                          <div>
                            {/* <button>Repo <ArrowRightCircle size={25} /></button> */}
                            <a href="https://pi-vr-argentina.vercel.app/">
                              <button className={styles.buttonCard}>
                                Deploy <ArrowRightCircle size={25} />
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <Image
        className={styles.backgroundimageright}
        src={colorSharp2}
        alt="img bg"
      />
    </section>
  );
}

export default Projects;
