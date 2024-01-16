import React from 'react'

import '../css/contact.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';



function Contact() {



  return (
    <div>
      <Navbar />
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

                    <div class="col-md-12">
                      <div class="send map-container">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9584.745024818181!2d79.82485585818607!3d6.931571640999683!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25f76ca3ce6bd%3A0x336f4b7327271ed!2sSea%20King-%20Port%20City!5e0!3m2!1sen!2slk!4v1705440935157!5m2!1sen!2slk"
                          width="100%"
                          height="300px"
                          style={{ borderRadius: '10px' }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          title="Google Map"
                        ></iframe>
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
                <h5>Location</h5>
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
      <Footer />
    </div>

  )
}

export default Contact
