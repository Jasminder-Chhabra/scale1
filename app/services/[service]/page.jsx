// app/services/page.js
"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../../public/css/config.css';
import '../../../public/css/libs.css';
import '../../../public/css/style.css';
import '../../../public/css/responsive.css';
import Header from '@/components/Header';
import "../.././globals.css"
import { Preview } from '@/components/service/Service';
import MobileServicesSection from '@/components/ui/DevelopmentWebsiteMobile';
import AnimatedSection from '@/components/ui/DevelopmentService';
import { useParams } from 'next/navigation';
import ServiceData from "../../../lib/serviceData";
export default function Services() {



  const slug = useParams();
   const data =  ServiceData[slug.service];
   const {title , description , whyChoose , steps , services , img } = data;
    console.log(data)

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Explore the range of services offered by Scale Us Technologies, including IT software development, mobile app development, and website development."
        />
        <title>Services - Scale Us</title>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            url: 'https://www.scaleus.in',
            logo: 'https://www.scaleus.in/img/favicon.svg',
          })}
        </script>
        <meta property="og:title" content="Services - Scale Us" />
        <meta
          property="og:description"
          content="Explore the range of services offered by Scale Us Technologies, including IT software development, mobile app development, and website development."
        />
        <meta property="og:image" content="https://www.scaleus.in/img/favicon.svg" />
        <meta property="og:image:alt" content="Scale Us Technologies Logo" />
        <meta property="og:url" content="https://www.scaleus.in/services" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
        <style>{`
          :root {
            --stea-move: var(--stg-gap);
            --stea-zoom-in: 0.9;
            --stea-zoom-out: 1.1;
            --stea-duration: 0.5s;
          }
          [data-split-appear] {
            --stea-move: 0.5cap;
          }
          /* Entry Animations */
          [data-appear] {
            opacity: 0;
            transition: opacity var(--stea-duration), transform var(--stea-duration);
            will-change: opacity, transform;
          }
          [data-appear="fade-down"] { transform: translateY(calc(-1 * var(--stea-move))); }
          [data-appear="fade-up"] { transform: translateY(var(--stea-move)); }
          [data-appear="fade-left"] { transform: translateX(var(--stea-move)); }
          [data-appear="fade-right"] { transform: translateX(calc(-1 * var(--stea-move))); }
          [data-appear="zoom-out"] { transform: scale(var(--stea-zoom-out)); }
          [data-appear].in-view {
            opacity: 1;
            transform: scale(1) translate(0, 0);
          }
          /* Exit Animations */
          [data-unload].is-unloading {
            opacity: 0;
            transition: opacity var(--stea-duration) ease-in-out, transform var(--stea-duration) ease-in-out;
            will-change: opacity, transform;
          }
          [data-unload="fade-up"].is-unloading { transform: translateY(calc(-1 * var(--stea-move))); }
          [data-unload="fade-down"].is-unloading { transform: translateY(var(--stea-move)); }
          [data-unload="fade-left"].is-unloading { transform: translateX(calc(-1 * var(--stea-move))); }
          [data-unload="fade-right"].is-unloading { transform: translateX(var(--stea-move)); }
          [data-unload="zoom-out"].is-unloading { transform: scale(var(--stea-zoom-out)); }
          body.is-unloading [data-unload] {
            pointer-events: none;
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

      <Header />

      <main id="bringer-main" data-unload="fade-down">
        <div className="stg-container">
          <section className="backlight-bottom">
            <div className="stg-row">
              <div className="align-center">
                <h1 className="bringer-page-title text-5xl" data-appear="fade-up" data-unload="fade-up">
                  {title}
                </h1>
                <p
                  className="bringer-large-text text-lg px-10"
                  data-appear="fade-up" data-unload="fade-up"
                >
 {description}
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="bringer-expand-on-scroll">
              <img
                src="/img/pixel-profile-images/movebg.svg"
                alt="Testimonials"
                data-appear="fade-up"
                data-unload="fade-up"
                loading="lazy"
              />
            </div>
            <br /><br /><br />
            <div className="stg-row stg-bottom-gap">
              <div className="stg-col-6" data-unload="fade-left">
                <h2 className="stg-bottom-gap" data-split-appear="fade-up">
                  Discover the spark ✨ with Scale Us Services.
                </h2>
              </div>
              <div className="stg-col-6"></div>
            </div>
            <div className="stg-row stg-tp-column-reverse">
              <div className="stg-col-6 stg-valign-bottom" data-unload="fade-left">
                <div className="align-right">
                  <Link href="/contact-us" className="bringer-icon-link" data-appear="fade-right">
                    <div className="bringer-icon-link-content">
                      <h6>
                        Unleash your
                        <br />
                        Brand's potential
                      </h6>
                      <span className="bringer-label">Contact Us Now</span>
                    </div>
                    <div className="bringer-icon-wrap">
                      <i className="bringer-icon bringer-icon-explore"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="stg-col-6 stg-tp-col-9 stg-tp-bottom-gap"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <p className="bringer-large-text">
                  Unleash your brand's full potential with Scale Us. We provide the fuel, the spark, and the expert guidance to watch your brand captivate the world. Explore our services and discover how Scale Us can help you achieve your goals.
                </p>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
            <div className="stg-row stg-large-gap stg-m-normal-gap">
              <div
                className="stg-col-5 stg-tp-bottom-gap-l stg-m-bottom-gap"
                data-unload="fade-left"
              >
                <div className="bringer-parallax-media">
                 
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src={img}
                    alt=""
                    width="600"
                    height="600"
                  />
                </div>
              </div>
              <div
                className="stg-col-7 stg-vertical-space-between"
                data-unload="fade-right"
              >
                <div>
                  <h3 data-appear="fade-up" data-unload="fade-down">
                   {whyChoose.headline}
                  </h3>
                  <p
                   className='text-lg'
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    {whyChoose.description.p1}
                  </p>
                  <p data-appear="fade-up" className='text-lg' data-unload="fade-down">
                  {whyChoose.description.p2}
                  </p>
                  <p data-appear="fade-up" className='text-lg' data-unload="fade-down">
                  {whyChoose.description.p3}
                  </p>
                </div>
            
              </div>
            </div>
          </section>
          <section className="is-fullwidth is-stretched" data-padding="none" data-unload="fade-down">
            <div className="bringer-marquee is-init">
              <div className="bringer-marquee-inner">
                <ul className="bringer-marquee-list">
                  <li><h2>Mobile Application Development</h2></li>
                  <li><h2>Website Development</h2></li>
                  <li><h2>SEO and Email Marketing</h2></li>
                  <li><h2>Customer Software Development</h2></li>
                  <li><h2>UX/UI</h2></li>
                </ul>
              </div>
            </div>
          </section>

     <section className="backlight-both" data-unload="fade-down">
      <div className="align-center stg-bottom-gap-l">
        <h2
          data-split-appear="fade-up"
          data-unload="fade-up"
          dangerouslySetInnerHTML={{ __html: steps.heading }}
        />
      </div>

      {steps.step.map((item, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={index}
            className={`stg-row stg-bottom-gap stg-valign-middle stg-m-bottom-gap-l ${
              isEven ? "stg-tp-row-reverse" : ""
            }`}
            data-unload={isEven ? "fade-right" : "fade-left"}
          >
            <div
              className={`stg-col-3 stg-tp-col-6 ${
                !isEven ? "stg-offset-3" : "stg-m-bottom-gap"
              }`}
              data-appear={isEven ? "fade-left" : "fade-right"}
            >
              <div className="bringer-parallax-media">
                <Image
                  className="bringer-lazy md:h-[150px]"
                  src="/img/null.png"
                  data-src={item.img}
                  alt={item.title}
                  
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>

            <div
              className="stg-col-6 stg-tp-col-6"
              data-appear={isEven ? "fade-left" : "fade-right"}
              data-delay="100"
            >
              <span className="bringer-label">{item.step}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>

            {isEven && <div className="stg-col-3"></div>}
          </div>
        );
      })}
    </section>

          <section className="backlight-bottom" data-unload="fade-down">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">{services.heading}</h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-delay="100"
                    data-unload="fade-up"
                  >
                    {services.para}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bringer-grid-2cols bringer-tp-grid-1col"
              data-stagger-appear="zoom-in"
              data-stagger-delay="100"
              data-delay="100"
              data-unload="fade-up"
            >
                {services.points.map(({title , description}) => {

           return   <div className="bringer-block">
                <h4>
                 {title}
                  <span className="bringer-accent">.</span>
                </h4>
                <p>
                 {description}
                </p>
              </div>
            
                })}
            </div>
          </section>
          
          <section className="backlight-bottom">
       
        <div className="align-center max-w-3xl mx-auto">
                  <h2 data-unload="fade-up" className="in-view">What We Offer</h2>
                <p className="bringer-large-text in-view" data-unload="fade-up" data-delay="100">Unleashing the full spectrum of magic.</p>
                </div>
                <div className="md:hidden block">
 <MobileServicesSection/>
                </div>
                <div className="hidden md:block">
                 
                  <AnimatedSection/>
                </div>

            <div className="bringer-partners partner-section">
              <span className="bringer-label" data-appear="fade-up" data-unload="fade-up">
                Technologies we work on.
              </span>
              <div
                className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                data-stagger-appear="fade-up"
                data-stagger-unload="fade-up"
                data-stagger-delay="100"
                data-delay="100"
              >
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Hire-Ruby-on-Rails-Developer.svg" alt="Ruby-on-Rails-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Python Developer.svg" alt="Python-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Laravel-Developer.svg" alt="Laravel-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Figma.svg" alt="Figma-Designer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/React-Developer.svg" alt="React-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/PHP-Developer.svg" alt="PHP-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Android-Developer.svg" alt="Android-Developer" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Next-JS.svg" alt="Next-JS" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Flutter.svg" alt="Flutter" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Node-Js.svg" alt="Node-Js" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Angular-JS.svg" alt="Angular-JS" loading="lazy" />
                </div>
                <div className="bringer-block bringer-center">
                  <img src="/img/partners/Apple-iOS.svg" alt="Apple-iOS" loading="lazy" />
                </div>
              </div>
            </div>
          </section>

          {/* <section className="divider-top" data-unload="fade-down">
            <div className="stg-row stg-bottom-gap-l">
              <div className="stg-col-6 stg-offset-3 align-center">
                <h2 data-split-appear="fade-up" data-unload="fade-up">
                  Here's how we make brand magic accessible
                </h2>
              </div>
            </div>
            <div
              className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-stretch-last-item"
              data-stagger-appear="fade-up"
              data-delay="100"
              data-stagger-unload="fade-up"
            >
              <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>Transparent pricing<span className="bringer-accent">.</span></h5>
                <p className="bringer-large-text bringer-tp-normal-text">
                  Upfront pricing models with detailed breakdowns, so you know exactly where it goes.
                </p>
              </div>
              <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>Customizable packages<span className="bringer-accent">.</span></h5>
                <p className="bringer-large-text bringer-tp-normal-text">
                  No cookie-cutter plans. We craft solutions that perfectly match your resources.
                </p>
              </div>
              <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>Scalable support<span className="bringer-accent">.</span></h5>
                <p className="bringer-large-text">
                  Whether you're a startup or an established brand, we offer services that grow with you.
                </p>
              </div>
            </div>
          </section> */}


<div>
  <Preview/>
</div>
          {/* <section data-unload="fade-down">
            <div
              className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-stretch-last-item"
              data-stagger-appear="fade-up"
              data-stagger-unload="fade-up"
            >
              <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>Beyond Surface Solutions<span className="bringer-accent">.</span></h5>
                <p>Empowering Digital Excellence through Innovative Strategies and Expertise.</p>
              </div>
              <div className="bringer-block stg-aspect-square stg-vertical-space-between">
                <h5>Beyond just digital solutions<span className="bringer-accent">.</span></h5>
                <p>Empowering Business Success Beyond Digital Solutions.</p>
              </div>
              <div className="bringer-masked-block bringer-grid-more-masked">
                <div className="bringer-block stg-aspect-square stg-vertical-space-between is-accented bringer-masked-media">
                  <h5>A brand isn't just a name<span className="bringer-accent">.</span></h5>
                  <p className="bringer-large-text">It's a movement. 👉 Let Scale Us ignite it.</p>
                </div>
                <div className="bringer-masked-content at-bottom-right">
                  <span className="bringer-square-button is-secondary">
                    <span className="bringer-icon bringer-icon-explore"></span>
                  </span>
                </div>
                <Link href="/contact-us"></Link>
              </div>
            </div>
          </section> */}

          <section data-unload="fade-down">
            <div className="bringer-bento-grid bringer-grid-cta">
              <div className="is-large bringer-masked-block" data-appear="fade-right" data-unload="fade-left">
                <div className="bringer-grid-cta-media bringer-masked-media" data-bg-src="/img/box.svg">
                  <div className="bringer-grid-cta-heading">Need to amplify your voice?</div>
                </div>
                <div className="bringer-masked-content at-bottom-right">
                  <p className="bringer-large-text" data-appear="fade-right" data-delay="100">
                    Let's chat about your goals →
                  </p>
                </div>
              </div>
              <div className="is-medium bringer-block" data-appear="fade-down" data-unload="fade-right">
                <h3>We develop solutions that make the world listen.</h3>
              </div>
              <div className="is-small" data-appear="zoom-out" data-delay="200" data-unload="zoom-out">
                <Image src="/img/IMG_1546 1.svg" alt="Let's Chat" width="960" height="960" loading="lazy" />
              </div>
              <div className="is-small" data-appear="zoom-out" data-delay="200" data-unload="zoom-out">
                <Image src="/img/Layer_1 (1).svg" alt="Let's Chat" width="960" height="960" loading="lazy" />
              </div>
            </div>
          </section>
        </div>
      </main>

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
                    <Image src="/img/Scale Us Logo.svg" alt="Scale-Us-Logo" width="200" height="88" />
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
                      <Link
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
                      </Link>
                    </li>
                    <li>
                      <Link
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
                      </Link>
                    </li>
                    <li>
                      <Link
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
                      </Link>
                    </li>
                    <li>
                      <Link
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
                      </Link>
                    </li>
                    <li>
                      <Link
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
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="stg-col-2 stg-offset-1 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Hire Developers</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">App Development</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">Web Development</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">SEO and UI/UX</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">Custom Development</Link></li>
                      <li><Link href="/services" data-appear="fade-up" data-unload="fade-down">Integrations</Link></li>
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
                      <li><Link href="#" data-appear="fade-up" data-unload="fade-down">Terms of Use</Link></li>
                      <li><Link href="#" data-appear="fade-up" data-unload="fade-down">Privacy Policy</Link></li>
                      <li><Link href="#" data-appear="fade-up" data-unload="fade-down">Brochure</Link></li>
                      <li><Link href="#" data-appear="fade-up" data-unload="fade-down">Become Partner</Link></li>
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

      <div className="bringer-rcp-wrap">
        <div className="bringer-rcp-overlay"></div>
        <div className="bringer-rcp-container">
          <h2>Content Protected</h2>
        </div>
      </div>
      <div className="bringer-backlight"></div>

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
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js" strategy="lazyOnload" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-PPS5N5K987');
      `}</Script>
      <Script id="vercel-analytics" strategy="afterInteractive">{`
        window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };
      `}</Script>
      <Script defer src="/_vercel/insights/script.js" strategy="afterInteractive" />
      <Script id="vercel-speed-insights" strategy="afterInteractive">{`
        window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
      `}</Script>
      <Script defer src="/_vercel/speed-insights/script.js" strategy="afterInteractive" />
    </>
  );
}