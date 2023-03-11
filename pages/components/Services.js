import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <section class="section-services" id="services">
        <div class="container">
          <div class="row justify-content-center text-center">
            <div class="col-md-10 col-lg-8">
              <div class="header-section">
                <h1 class="title">
                  Exclusive <span>Services</span>
                </h1>
                <p class="description">
                  As an IT services company, we provide a comprehensive range of
                  technology solutions to businesses and individuals, including
                  network setup, software installation, cybersecurity, cloud
                  computing, data backup and recovery, and technical support.
                  Our services are designed to ensure the smooth and efficient
                  functioning of your technology infrastructure, allowing you to
                  focus on your core business activities. We have a team of
                  experienced professionals who are dedicated to providing
                  high-quality services tailored to your unique needs and
                  budget. Whether you are a small business or a large
                  corporation, we can help you optimize your technology
                  solutions and achieve your goals.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-free-code-camp" aria-hidden="true"></i>{" "}
                  <h3 class="title">Website Development</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    At our company, we offer website development services that
                    are tailored to your unique business needs, ensuring a
                    user-friendly and visually stunning website that drives
                    growth and engagement for your brand.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-mobile"></i>{" "}
                  <h3 class="title">Mobile Applications</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    We provide tailored mobile application services for both
                    businesses and individuals, prioritizing user experience and
                    functionality. Our end-to-end approach guarantees a smooth
                    and efficient mobile experience for your target audience.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-cloud"></i>{" "}
                  <h3 class="title">Cloud Solutions</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Our cloud solutions offer secure and scalable services for
                    data storage, software development, and server hosting.
                    Experience the benefits of cloud technology with our
                    flexible and customized solutions.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-bug"></i>{" "}
                  <h3 class="title">Websites & Apps Maintenance</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    Our website and app maintenance service provides regular
                    updates, backups, and security checks to ensure your online
                    presence is up-to-date, secure, and performing at its best,
                    allowing you to focus on your business while we take care of
                    your digital assets.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-newspaper-o" aria-hidden="true"></i>{" "}
                  <h3 class="title">Digital Marketing</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    We offer digital marketing services that utilize data-driven
                    approaches to enhance your online presence, which includes
                    search engine optimization, social media management, email
                    marketing, and content creation to reach and engage your
                    target audience while driving conversions.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-4">
              <div class="single-service">
                <div class="part-1">
                  <i class="fa fa-qrcode"></i>{" "}
                  <h3 class="title">Other Services</h3>
                </div>
                <div class="part-2">
                  <p class="description">
                    In addition to our IT services, we also offer a range of
                    other services including website development, digital
                    marketing, and software development. Our team of skilled
                    professionals is committed to delivering customized
                    solutions that help you achieve your business objectives and
                    stay ahead of the competition.
                  </p>
                  <a href="#">
                    <i class="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
