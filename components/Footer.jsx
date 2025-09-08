"use client";
import React from 'react'
import Link from "next/link"
const Footer = () => {
  return (
           <footer id="bringer-footer" className="is-fullwidth" data-appear="fade-up" data-unload="fade-down">
        <div className="bringer-footer-widgets">
          <div className="stg-container">
            <div
              className="stg-row"
              data-stagger-appear="fade-left"
              data-stagger-unload="fade-right"
              data-stagger-delay="100"
            >
              <div className="stg-col-5 stg-tp-col-12 stg-tp-bottom-gap-l">
                <div className="bringer-info-widget">
                  <Link href="/" className="bringer-logo footer-logo">
                    <img src="/img/Scale Us Logo.svg" alt="Scale-Us-Logo" width="200" height="88" />
                  </Link>
                  <div className="bringer-info-description" data-appear="fade-up" data-unload="fade-down">
                    We are a passionate team at Scale Us, dedicated to empowering individuals and businesses through creative digital solutions. We specialize in creating compelling online presences that showcase your work and convey your unique story.
                  </div>
                  <span className="bringer-label" data-appear="fade-up" data-unload="fade-down">Follow us:</span>
                  <ul
                    className="bringer-socials-list"
                    data-stagger-appear="fade-up"
                    data-stagger-unload="fade-down"
                    data-stagger-delay="75"
                  >
                    <li>
                      <a
                        href="https://www.linkedin.com/company/scale-us-technologies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bringer-socials-linkedin"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.linkedin.com/company/scale-us-technologies', '_blank');
                        }}
                      >
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/scaleus.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bringer-socials-instagram"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://instagram.com/scaleus.in', '_blank');
                        }}
                      >
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/scale_us_tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bringer-socials-x"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://x.com/scale_us_tech', '_blank');
                        }}
                      >
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@Scale-Us-Technologies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bringer-socials-youtube"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.youtube.com/@Scale-Us-Technologies', '_blank');
                        }}
                      >
                        <i></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/ScaleUsTechnologies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bringer-socials-facebook"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open('https://www.facebook.com/ScaleUsTechnologies', '_blank');
                        }}
                      >
                        <i></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="stg-col-2 stg-offset-1 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Hire Developers</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><Link href="/services/android" data-appear="fade-up" data-unload="fade-down">App Development</Link></li>
                      <li><Link href="/services/frontend" data-appear="fade-up" data-unload="fade-down">Web Development</Link></li>
                      <li><Link href="/services/design" data-appear="fade-up" data-unload="fade-down"> UI/UX</Link></li>
                      <li><Link href="/services/saas" data-appear="fade-up" data-unload="fade-down">SaaS Development</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Explore</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><Link href="/" data-appear="fade-up" data-unload="fade-down">Home</Link></li>
                      <li><Link href="/about-us" data-appear="fade-up" data-unload="fade-down">About Us</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">Solutions</Link></li>
                      <li><Link href="/faq" data-appear="fade-up" data-unload="fade-down">FAQs</Link></li>
                      <li><Link href="/contact-us" data-appear="fade-up" data-unload="fade-down">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Resources</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><a href="/terms-of-use" data-appear="fade-up" data-unload="fade-down">Terms of Use</a></li>
                      <li><a href="/privacy-policy" data-appear="fade-up" data-unload="fade-down">Privacy Policy</a></li>
                      <li><a data-appear="fade-up" data-unload="fade-down"   onClick={() => {
    window.open("/img/assets/scaleus.pdf", "_blank", "noopener,noreferrer");
  }} >Brochure</a></li>
  
                      <li><a href="/become-partner" data-appear="fade-up" data-unload="fade-down">Become Partner</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bringer-footer-line">
          <div className="align-center" data-appear="fade-up" data-unload="fade-down">
            Copyright © 2024 Scale Us.
          </div>
        </div>
      </footer>
  )
}

export default Footer