// app/contact-us/page.js
"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

// Import CSS files (ensure these are in /public/css/)
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import ".././globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function ContactUs() {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Contacts - Scale Us</title>
        <meta httpEquiv="Content-Security-Policy" content="frame-src 'self' https://www.google.com;" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PPS5N5K987');
          `
        }} />
        <style>{`
          .bringer-backlight {
            position: fixed;
            width: 200px;
            height: 200px;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 10000;
            transform: translate(-50%, -50%);
            left: var(--mouse-x);
            top: var(--mouse-y);
          }
          .stg-container {
            overflow: visible !important;
          }
          .bringer-rcp-wrap {
            display: none;
          }
          body.rcp-show .bringer-rcp-wrap {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10001;
          }
          .bringer-rcp-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
          }
          .bringer-rcp-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #fff;
            font-size: 24px;
            text-align: center;
          }
          .bringer-footer-line {
            width: 100vw;
            background: var(--bringer-s-container-bg);
            padding: var(--stg-gap) 0;
            position: relative;
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            z-index: 22;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .bringer-footer-line:before {
            content: "";
            width: 100%;
            height: 1px;
            display: block;
            background: var(--bringer-c-border-gradient);
            position: absolute;
            top: 0;
            left: 0;
          }
          .bringer-socials-list a {
            pointer-events: auto !important;
            z-index: 999;
          }
        `}</style>
      </Head>

      {/* Header */}
     <Header/>

      {/* Main Content */}
      <main id="bringer-main">
        <div className="stg-container">
          {/* Page Title Section */}
          <section className="backlight-bottom">
            <div className="stg-row stg-bottom-gap-l">
              <div className="stg-col-6 stg-offset-3 align-center">
                <h1 className="bringer-page-title" data-appear="fade-up" data-unload="fade-up">Get in Touch</h1>
                <p className="bringer-large-text" data-appear="fade-up" data-delay="100" data-unload="fade-up">
                  We help businesses of all sizes achieve their goals. We believe every brand, big or small, deserves to shine.
                </p>
              </div>
            </div>
            <div className="bringer-parallax-media" data-parallax-speed="20" data-appear="fade-up" data-delay="200" data-unload="fade-up">
              <Image className="bringer-lazy" src="/img/null.png" data-src="/img/inner-pages/contacts01.webp" alt="Get in Touch" width="1920" height="960" />
            </div>
          </section>

          {/* About Us Section */}
          <section>
            <div className="stg-row stg-bottom-gap">
              <div className="stg-col-8">
                <h2 data-split-appear="fade-up" data-unload="fade-up">Ready to ignite your brand's fire? 🔥 Let's connect! 🤝</h2>
              </div>
              <div className="stg-col-4"></div>
            </div>
            <div className="stg-row stg-bottom-gap-l">
              <div className="stg-col-6 stg-offset-6" data-appear="fade-up" data-delay="200" data-unload="fade-up">
                <p>
                  At Scale US, we believe in the power of collaboration and shared passion. We're not just a tech partner; we're dedicated to igniting your brand's unique potential. Whether you're full of ideas or just starting out, reach out and let's chat!
                </p>
              </div>
            </div>
            <div className="bringer-grid-3cols bringer-parallax-media bringer-m-grid-3cols stg-m-small-gap" data-stagger-appear="fade-up" data-delay="200" data-stagger-unload="fade-up">
              <a href="/img/inner-pages/contacts02.webp" className="bringer-lightbox-link" data-size="960x960">
                <Image className="bringer-lazy" src="/img/null.png" data-src="/img/inner-pages/contacts02.webp" alt="Scale Us" width="960" height="960" />
              </a>
              <a href="/img/inner-pages/contacts03.webp" className="bringer-lightbox-link" data-size="960x960">
                <Image className="bringer-lazy" src="/img/null.png" data-src="/img/inner-pages/contacts03.webp" alt="Scale Us" width="960" height="960" />
              </a>
              <a href="/img/inner-pages/contacts04.webp" className="bringer-lightbox-link" data-size="960x960">
                <Image className="bringer-lazy" src="/img/null.png" data-src="/img/inner-pages/contacts04.webp" alt="Scale Us" width="960" height="960" />
              </a>
            </div>
          </section>

          {/* Let's Talk Section */}
          <section className="backlight-top divider-bottom">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">Let's 🗣 talk!</h2>
                  <p className="bringer-large-text" data-appear="fade-up" data-delay="100" data-unload="fade-up">
                    Here's how you can connect with the Scale Us team:
                  </p>
                </div>
              </div>
            </div>
            <div className="stg-row" data-stagger-appear="fade-up" data-delay="200" data-stagger-unload="fade-up">
              <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
                <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                  <a href="tel:+919425799077" className="bringer-grid-item-link"></a>
                  <div>
                    <h5>Phone<span className="bringer-accent">.</span></h5>
                    <h6>+91 94257-99077</h6>
                  </div>
                  <p>Give us a call and chat directly with our friendly team. We're always happy to answer any questions.</p>
                </div>
              </div>
              <div className="stg-col-4 stg-tp-col-6 stg-tp-bottom-gap">
                <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                  <a href="mailto:contact@scaleus.in" className="bringer-grid-item-link"></a>
                  <div>
                    <h5>Email<span className="bringer-accent">.</span></h5>
                    <h6>contact@scaleus.in</h6>
                  </div>
                  <p>Send us a detailed message. We'll get back to you as soon as possible to discuss your creative project further.</p>
                </div>
              </div>
              <div className="stg-col-4 stg-tp-col-12">
                <div className="bringer-block stg-aspect-square stg-tp-aspect-rectangle stg-vertical-space-between">
                  <div>
                    <h5>Social Media<span className="bringer-accent">.</span></h5>
                    <ul className="bringer-socials-list stg-small-gap" data-stagger-appear="fade-up" data-stagger-delay="75">
                      <li>
                        <a href="https://www.linkedin.com/company/scale-us-technologies" target="_blank" rel="noopener noreferrer" className="bringer-socials-linkedin" onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/company/scale-us-technologies', '_blank'); }}><i></i></a>
                      </li>
                      <li>
                        <a href="https://instagram.com/scaleus.in" target="_blank" rel="noopener noreferrer" className="bringer-socials-instagram" onClick={(e) => { e.preventDefault(); window.open('https://instagram.com/scaleus.in', '_blank'); }}><i></i></a>
                      </li>
                      <li>
                        <a href="https://x.com/scale_us_tech" target="_blank" rel="noopener noreferrer" className="bringer-socials-x" onClick={(e) => { e.preventDefault(); window.open('https://x.com/scale_us_tech', '_blank'); }}><i></i></a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/@Scale-Us-Technologies" target="_blank" rel="noopener noreferrer" className="bringer-socials-youtube" onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/@Scale-Us-Technologies', '_blank'); }}><i></i></a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/ScaleUsTechnologies" target="_blank" rel="noopener noreferrer" className="bringer-socials-facebook" onClick={(e) => { e.preventDefault(); window.open('https://www.facebook.com/ScaleUsTechnologies', '_blank'); }}><i></i></a>
                      </li>
                    </ul>
                  </div>
                  <p>Follow us on Social Media Platforms for a glimpse into our creative world, industry insights, and projects.</p>
                </div>
              </div>
            </div>
            <div className="bringer-partners partner-section">
              <span className="bringer-label" data-appear="fade-up" data-unload="fade-up"></span>
              <div className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s" data-stagger-appear="fade-up" data-stagger-unload="fade-up" data-stagger-delay="100" data-delay="100">
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/GoogleFeedback.svg" alt="Partner Logo" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Glassdoor.svg" alt="Partner Logo" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/GoodFirms.svg" alt="Partner Logo" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Make In India.svg" alt="Partner Logo" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Scale-Us-Startup-India.svg" alt="Partner Logo" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Great-Place-To-Work.svg" alt="Partner Logo" />
                </div>
              </div>
            </div>
          </section>

          {/* Visit Our Office Section */}
          <section>
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">Visit our Office</h2>
                  <p className="bringer-large-text" data-appear="fade-up" data-delay="100" data-unload="fade-up">
                    Come visit! We love welcoming potential collaborators into our vibrant space. Schedule a tour and get inspired by our creative energy.
                  </p>
                </div>
              </div>
            </div>
            <div className="stg-row">
              <div className="stg-col-4 stg-tp-col-6 stg-m-bottom-gap" data-appear="fade-right" data-delay="100" data-unload="fade-left">
                <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                  <a href="https://maps.app.goo.gl/WbTG6EKuF9dE1Xuy8" className="bringer-grid-item-link"></a>
                  <div>
                    <h5>Address<span className="bringer-accent">.</span></h5>
                    <h6>204, Atulya IT Park, near Bhawarkua Main Road, Indrapuri Colony, Bhanwar Kuwa, Indore, Madhya Pradesh 452010. </h6>
                  </div>
                  <p>Drop by our vibrant office. We'd love to welcome you and share our creative vibe. Let's fuel your vision!</p>
                </div>
              </div>
              <div className="stg-col-8 stg-tp-col-6" data-appear="fade-left" data-delay="200" data-unload="fade-right">
                <iframe
                  className="bringer-google-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.102330507246!2d75.85858257625311!3d22.687234228757138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd7ad77498d7%3A0x97105c19c6e9871c!2sScale%20Us%20Technologies%20LLP!5e0!3m2!1sen!2sin!4v1719812455650!5m2!1sen!2sin"
                  width="790"
                  height="379"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </section>

          {/* CTA Form Section */}
          <section className="backlight-top is-fullwidth">
            <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
              <div className="stg-col-5" data-unload="fade-left">
                <div className="bringer-offset-image" data-bg-src="/img/cta/contact-section-bg.jpg" data-appear="fade-up" data-threshold="0.25"></div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = {
                      name: e.target.name.value,
                      email: e.target.email.value,
                      message: e.target.message.value,
                    };
                    import('@emailjs/browser').then((emailjs) => {
                      emailjs
                        .send(
                          'service_2e4hyrc',
                          'template_jaeacbm',
                          formData,
                          'V9VHZjA9wdyskYcS8'
                        )
                        .then(() => {
                          const responseElement = e.target.querySelector('.bringer-contact-form__response');
                          responseElement.textContent = 'Message sent successfully!';
                          responseElement.style.color = '#FFFFFF';
                          e.target.reset();
                        })
                        .catch((error) => {
                          const responseElement = e.target.querySelector('.bringer-contact-form__response');
                          responseElement.textContent = 'Failed to send message. Try again.';
                          responseElement.style.color = '#FF0000';
                          console.error('EmailJS error:', error);
                        });
                    });
                  }}
                  data-fill-error="Please, fill out the contact form."
                  className="bringer-contact-form bringer-block"
                >
                  <div className="bringer-form-content">
                    <label htmlFor="name">Your name</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                    <label htmlFor="email">Your email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                    <label htmlFor="message">Your message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                    <button type="submit" value="Send Message">Send Message</button>
                    <div className="bringer-contact-form__response"></div>
                  </div>
                  <span className="bringer-form-spinner"></span>
                </form>
              </div>
              <div className="stg-col-6 stg-offset-1" data-unload="fade-right">
                <div className="bringer-cta-form-content">
                  <div className="bringer-cta-form-title" data-split-appear="fade-up" data-split-delay="100" data-split-by="line">
                    Let's discuss your next creative project.
                  </div>
                  <div className="bringer-cta-text">
                    <div className="stg-row stg-valign-middle">
                      <div className="stg-col-2 stg-offset-2 stg-tp-col-1 stg-tp-offset-3 stg-m-col-1 stg-m-offset-2" data-appear="fade-right">
                        <i className="bringer-cta-icon"></i>
                      </div>
                      <div className="stg-col-8 stg-tp-col-7 stg-m-col-8 stg-m-offset-1" data-appear="fade-left">
                        <p className="bringer-large-text">
                          We help creative agencies, designers, and other creative people showcase their perfect work.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols" data-stagger-appear="fade-up" data-stagger-delay="100">
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number">420</div>
                      <div className="bringer-counter-label">Projects Done</div>
                    </div>
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number" data-suffix="+">150</div>
                      <div className="bringer-counter-label">Happy Clients</div>
                    </div>
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number" data-suffix="+">10</div>
                      <div className="bringer-counter-label">Years in Work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
       <Footer/>

        {/* Right Click Protection */}
        <div className="bringer-rcp-wrap">
          <div className="bringer-rcp-overlay"></div>
          <div className="bringer-rcp-container">
            <h2>Content Protected</h2>
          </div>
        </div>
        <div className="bringer-backlight"></div>

        {/* Scripts */}
        <Script src="/js/lib/jquery.min.js" strategy="beforeInteractive" />
        <Script id="patch-main-js" strategy="afterInteractive">{`
          (function() {
            if (typeof i !== 'undefined' && i.checkURL) {
              i.checkURL = function(t) {
                let e = t instanceof jQuery ? t : jQuery(t);
                let n = e.attr("href"), r = !0;
                if (e.hasClass('bringer-socials-list') || (e.attr("target") === "_blank" && n.match(/^(https?:\\/\\/)?([\\w-]+\.)+[\\w-]{2,6}/))) {
                  return false;
                }
                return 0 === n.indexOf("javascript") || "#" === n || e.attr("target") && "_blank" === e.attr("target") || n.indexOf("elementor-action") > -1 || e.is("[download]") || n.indexOf("tel:") > -1 || n.indexOf("mailto:") > -1 || "yes" === e.attr("data-elementor-open-lightbox") || e.is("#cancel-comment-reply-link") || i.checkImageURL(n) ? r = !1 : jQuery(bringer_config.linksException).each((function() { e.is(this) && (r = !1) })), r;
              };
            }
          })();
        `}</Script>
        <Script src="/js/lib/libs.js" strategy="afterInteractive" />
        <Script src="/js/contact_form.js" strategy="afterInteractive" />
        <Script src="/js/st-core.js" strategy="afterInteractive" />
        <Script src="/js/classes.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="https://analytics.scaleus.in/pixel/h7JQjaRBn2Nmkvy6" strategy="lazyOnload" />
        <Script src="/_vercel/insights/script.js" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };` }} />
        <Script src="/_vercel/speed-insights/script.js" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };` }} />
      </main>
    </>
  );
}