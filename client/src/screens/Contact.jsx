import React from 'react'

import '../css/contact.css';
import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';



function Contact() {



  return (
    <div>
      <Navbar />
      <section className="section gray-bg" id="contactus">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>You can Calls & message of specializing in contact us</p>
              </div>
            </div>
          </div>
          <div className="row flex-row-reverse">
            <div className="col-md-7 col-lg-8 m-15px-tb">
              <div className="contact-form">
                <form action="/" method="post" className="contactform contact_form" id="contact_form">
                  <div className="returnmessage valid-feedback p-15px-b" data-success="Your message has been received, We will contact you soon."></div>
                  <div className="empty_notice invalid-feedback p-15px-b"><span>Please Fill Required Fields</span></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input id="name" type="text" placeholder="Full Name" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input id="email" type="text" placeholder="Email Address" className="form-control" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input id="subject" type="text" placeholder="Subject" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea id="message" placeholder="Message" className="form-control" rows="3"></textarea>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <a id="send_message" className="px-btn theme" href="##"><span>Contact Us</span> <i className="arrow"></i></a>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="send map-container">
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
            <div className="col-md-5 col-lg-4 m-15px-tb">
              <div className="contact-name">
                <h5>Mail</h5>
                <p>info@seaking.com</p>
              </div>
              <div className="contact-name">
                <h5>Location</h5>
                <p> VW3, Port City Colombo, <br />Sri Lanka</p>
              </div>
              <div className="contact-name">
                <h5>Phone</h5>
                <p>+(94) 77 235 8096</p>
              </div>
              <div className="social-share nav">
                <a className="dribbble" href="##">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a className="behance" href="##">
                  <i className="fab fa-behance"></i>
                </a>
                <a className="linkedin" href="##">
                  <i className="fab fa-linkedin-in"></i>
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
