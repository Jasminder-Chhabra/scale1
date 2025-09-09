// app/faq/page.js
"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import ".././globals.css";
import '../../public/css/responsive.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function FAQ() {


  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>FAQ - Scale Us</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
      </Head>

   <Header/>

      <main id="bringer-main">
        <div className="stg-container">
          <section className="backlight-bottom">
            <div className="stg-row stg-bottom-gap-l">
              <div className="stg-col-8">
                <h1 className="stg-bottom-gap" data-split-appear="fade-up" data-split-unload="fade-up">
                  Here, your burning 🔥 questions about Scale Us get answered!
                </h1>
              </div>
              <div className="stg-col-4"></div>
            </div>
            <div className="bringer-parallax-media stg-bottom-gap-l" data-appear="fade-up" data-unload="fade-out">
              <Image
                className="bringer-lazy"
                src="/img/null.png"
                data-src="/img/inner-pages/old img/faq-hero.jpg"
                alt="Questions and Answers"
                width="1920"
                height="960"
              />
            </div>
            <div className="stg-row stg-large-gap">
              <div className="stg-col-6 stg-offset-6" data-appear="fade-left" data-unload="fade-right">
                <p className="bringer-large-text">
                  Welcome to our FAQ section. We understand that navigating the world of IT solutions can raise many questions. Dive in and explore answers to commonly asked questions. Whether you're new to tech or a seasoned pro, there's always something new to learn.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bringer-faq-list">
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Web Development</span>
                  <h4><span className='text-md'>01.</span> What types of websites can you develop?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We develop a wide range of websites, including eCommerce platforms, corporate websites, content management systems (CMS), and custom web applications tailored to your specific business needs.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Mobile App Development</span>
                  <h4><span className='text-md'>02.</span>  Do you develop mobile apps for both iOS and Android?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>Yes, we develop mobile applications for both iOS and Android platforms, ensuring a seamless user experience across all devices.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Mobile App Development</span>
                  <h4><span>03.</span> Can you help with app store submission and approval?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>Absolutely. We assist with the entire app store submission process and work to ensure your app meets all guidelines for approval on both the Apple App Store and Google Play Store.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">eCommerce Solutions</span>
                  <h4><span>04.</span> What eCommerce platforms do you work with?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We work with various eCommerce platforms, including Shopify, WooCommerce, Magento, and custom-built solutions to meet your specific needs.</p>
                </div>
              </div>
              <hr />
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">UI/UX Designing</span>
                  <h4><span>05.</span> What is the importance of UI/UX design in a project?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>UI/UX design is crucial as it enhances user satisfaction by improving the usability, accessibility, and pleasure provided in the interaction with the product, leading to higher user engagement and retention.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Software Testing</span>
                  <h4><span>06.</span> What types of testing services do you offer?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We offer comprehensive software testing services, including functional testing, performance testing, security testing, and usability testing to ensure your software is robust and reliable.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Search Engine Optimization (SEO)</span>
                  <h4><span>07.</span> What SEO services do you provide?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>Our SEO services include keyword research, on-page optimization, link building, content creation, and technical SEO to improve your website’s search engine rankings and visibility.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Custom Software Development</span>
                  <h4><span>08.</span> What types of custom software can you develop?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We develop various types of custom software, including CRM systems, ERP solutions, mobile apps, web applications, and more, tailored to meet your unique business requirements.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Custom Software Development</span>
                  <h4><span>09.</span> How do you ensure the security of custom software?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We follow best practices in software security, including data encryption, secure coding practices, regular security audits, and compliance with relevant regulations to ensure the safety of your software.</p>
                </div>
              </div>
              <div className="bringer-toggles-item bringer-block" data-appear="fade-up" data-unload="fade-up">
                <div className="bringer-toggles-item--title">
                  <span className="bringer-label">Software Testing</span>
                  <h4><span>10.</span> How do you ensure the quality of the software?</h4>
                </div>
                <div className="bringer-toggles-item--content">
                  <p>We follow industry-standard testing methodologies and best practices, using automated and manual testing techniques to identify and resolve any issues before the final release.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="backlight-top is-fullwidth">
            <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
              <div className="stg-col-5" data-unload="fade-left">
                <div className="bringer-offset-image" data-bg-src="/img/cta/contact-section-bg.jpg" data-appear="fade-up" data-threshold="0.25"></div>
                <form action="/mail/mail.php" method="post" className="bringer-contact-form bringer-block" data-fill-error="Please, fill out the contact form.">
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
                        <p className="bringer-large-text">We help businesses and professionals showcase their work with tailored digital solutions, enhancing their online presence and impact.</p>
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
                      <div className="bringer-counter-number" data-suffix="+">5</div>
                      <div className="bringer-counter-label">Years in Work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

    <Footer/>
      </main>

      <div className="bringer-rcp-wrap">
        <div className="bringer-rcp-overlay"></div>
        <div className="bringer-rcp-container">
          <h2>Content Protected</h2>
        </div>
      </div>

      <div className="bringer-backlight"></div>

      <Script src="/js/lib/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/lib/libs.js" strategy="afterInteractive" />
      <Script src="/js/contact_form.js" strategy="afterInteractive" />
      <Script src="/js/st-core.js" strategy="afterInteractive" />
      <Script src="/js/classes.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PPS5N5K987');
      `}</Script>
    </div>
  );
}