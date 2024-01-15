import React from 'react'

import '../css/contact.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';



function Contact() {
  return (
    <div>
      <Navbar/>
      <section class="section gray-bg" id="contactus">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="section-title">
                <h2>Get In Touch</h2>
                <p>You can Calls & message of specializing in contact us</p>
              </div>
            </div>
          </div>
          <div class="row flex-row-reverse">
            <div class="col-md-7 col-lg-8 m-15px-tb">
              <div class="contact-form">
                <form action="/" method="post" class="contactform contact_form" id="contact_form">
                  <div class="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                  <div class="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input id="name" type="text" placeholder="Full Name" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input id="email" type="text" placeholder="Email Address" class="form-control" />
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <input id="subject" type="text" placeholder="Subject" class="form-control" />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea id="message" placeholder="Message" class="form-control" rows="3"></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="send">
                        <a id="send_message" class="px-btn theme" href="##"><span>Contact Us</span> <i class="arrow"></i></a>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-md-5 col-lg-4 m-15px-tb">
              <div class="contact-name">
                <h5>Mail</h5>
                <p>info@seaking.com</p>
              </div>
              <div class="contact-name">
                <h5>Visit My Studio</h5>
                <p> VW3, Port City Colombo, <br />Sri Lanka</p>
              </div>
              <div class="contact-name">
                <h5>Phone</h5>
                <p>+(94) 77 235 8096</p>
              </div>
              <div class="social-share nav">
                <a class="dribbble" href="##">
                  <i class="fab fa-dribbble"></i>
                </a>
                <a class="behance" href="##">
                  <i class="fab fa-behance"></i>
                </a>
                <a class="linkedin" href="##">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>

  )
}

export default Contact
