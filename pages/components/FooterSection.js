import React from "react";

function FooterSection() {
  return (
    <div class="footer-dark" id="contactus">
      <footer>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
                <li>
                  <a href="#">Hosting</a>
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Company</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div class="col-md-6 item text">
              <h3>Moral Dev</h3>
              <p>
                Our IT company is dedicated to providing high-quality software
                solutions to meet the needs of businesses of all sizes. With a
                focus on innovation and collaboration, we use cutting-edge
                technologies and proven development methodologies to deliver
                custom software solutions that drive results. Our team of
                experienced developers, designers, and project managers work
                closely with clients to understand their unique requirements and
                deliver tailored solutions that meet or exceed their
                expectations. From web and mobile applications to enterprise
                software solutions, we are committed to delivering exceptional
                value and ROI to our clients.
              </p>
            </div>
            <div class="col item social">
              <a href="#">
                <i class="fa fa-facebook-square" aria-hidden="true"></i>{" "}
              </a>
              <a href="#">
                <i class="fa fa-twitter-square" aria-hidden="true"></i>{" "}
              </a>
              <a href="#">
                <i class="fa fa-snapchat-square" aria-hidden="true"></i>{" "}
              </a>
              <a href="#">
                <i class="fa fa-instagram" aria-hidden="true"></i>{" "}
              </a>
            </div>
          </div>
          <p class="copyright">© Moraldev™. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
