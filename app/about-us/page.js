// app/about-us/page.js
"use client";

import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

SwiperCore.use([Pagination]);

// Import CSS files (ensure these are in /public/css/)
import ".././globals.css";
import "../../public/css/config.css";
import "../../public/css/libs.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import Header from "@/components/Header";
import AnimatedSection from "@/components/ui/DevelopmentService";
import MobileServicesSection from "@/components/ui/DevelopmentWebsiteMobile";
import Footer from "@/components/Footer";
import CategoryListDemo from "@/components/AboutSec";
import Image from "next/image";

export default function AboutUs() {



  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Learn about Scale Us Technologies, a dynamic IT software development and mobile app, website development startup. Discover our mission, vision, and the dedicated team behind our innovative solutions."
        />
        <title>About Us - Scale Us</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PPS5N5K987');
          `,
          }}
        />
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
  /* Rest of your existing styles */
  .bringer-hero-media-wrap {
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
  }
  .bringer-hero-media {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
  }
  @media (max-width: 768px) {
    .bringer-hero-media-wrap {
      height: 56.25%;
    }
  }
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
      <Header />

      {/* Main Content */}
      <main id="bringer-main">
        <div className="stg-container">
          {/* Page Title Section */}
          <section className="backlight-bottom">
            <div className="stg-row">
              <div className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
                <h1
                  className="bringer-page-title"
                  data-appear="fade-up"
                  data-unload="fade-up"
                >
                  About Us
                </h1>
                <p
                  className="bringer-large-text"
                  data-split-appear="fade-up"
                  data-split-unload="fade-up"
                  data-delay="100"
                >
                  We are a passionate team at Scale Us, dedicated to harnessing
                  the power ✨ of creativity through innovative technology
                  solutions.
                </p>
              </div>
            </div>
          </section>

          {/* About Us Section */}
          <section className="divider-bottom">
            <div className="bringer-hero-block bringer-hero-type01">
              <div className="stg-row stg-bottom-gap-l stg-m-bottom-gap-l">
                <div className="stg-col-9 stg-tp-col-8 stg-m-col-12">
                  <h1
                    className="bringer-page-title"
                    data-split-appear="fade-up"
                    data-split-unload="fade-up"
                  >
                    Unleash Your Creativity And Bring IT to Reality
                  </h1>
                </div>
                <div className="stg-col-3 stg-tp-col-4 stg-m-col-12">
                  <div className="bringer-hero-social-proof">
                    <div
                      data-stagger-appear="fade-up"
                      data-stagger-delay="100"
                      data-stagger-unload="fade-up"
                    >
                      <img
                        src="/img/home/social-proof01.webp"
                        alt="Client 01"
                      />
                      <img
                        src="/img/home/social-proof02.webp"
                        alt="Client 02"
                      />
                      <img
                        src="/img/home/social-proof03.webp"
                        alt="Client 03"
                      />
                      <Link href="/#testimonials-section">150+</Link>
                    </div>
                    <p
                      data-appear="fade-up"
                      data-unload="fade-up"
                      data-delay="200"
                    >
                      Trusted by 150+ clients
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="bringer-hero-media-wrap bringer-masked-bottom-right bringer-masked-block stg-bottom-gap-l"
                data-appear="zoom-out"
                data-unload="zoom-out"
              >
                <div className="bringer-masked-media bringer-parallax-media">
                  <img
                    src="/img/01-hero-scaleUS.svg"
                    alt="Unleash Your Creativity"
                  />
                </div>
                <div className="bringer-masked-content at-bottom-right">
                  <Link
                    href="#section9"
                    className="bringer-square-button"
                    data-appear="fade-left"
                  >
                    <div
                      className="is-small"
                      data-appear="zoom-out"
                      data-delay="200"
                      data-unload="zoom-out"
                    >
                      <Image
                        src="/img/about-scaleus1.svg"
                        alt="Let's Chat"
                        width="960"
                        height="960"
                      />
                    </div>
                  </Link>
                </div>
              </div>
              <div className="stg-row stg-valign-bottom">
                <div
                  className="stg-col-3 stg-tp-col-3 stg-m-col-6"
                  data-appear="fade-up"
                  data-delay="200"
                  data-unload="fade-up"
                >
                  <div
                    className="bringer-counter bringer-small-counter"
                    data-delay="3000"
                  >
                    <div className="bringer-counter-number" data-suffix="+">
                      150
                    </div>
                    <div className="bringer-counter-label">
                      Completed Projects
                    </div>
                  </div>
                </div>
                <div
                  className="stg-col-3 stg-tp-col-3 stg-m-col-6"
                  data-appear="fade-up"
                  data-delay="300"
                  data-unload="fade-up"
                >
                  <div
                    className="bringer-counter bringer-small-counter"
                    data-delay="3000"
                  >
                    <div className="bringer-counter-number" data-suffix="+">
                      10
                    </div>
                    <div className="bringer-counter-label">
                      Years of Experience
                    </div>
                  </div>
                </div>
                <div
                  className="stg-col-6 stg-tp-col-6 stg-m-col-12 stg-m-top-gap mobile-tablet-only"
                  data-appear="fade-up"
                  data-delay="400"
                  data-unload="fade-up"
                >
                  <p className="bringer-large-text">
                    We help businesses and professionals showcase their work and
                    connect with clients through innovative digital solutions.
                  </p>
                </div>
                <div
                  className="stg-col-6 stg-tp-col-6 stg-m-col-12 stg-m-top-gap desktop-only"
                  data-appear="fade-up"
                  data-delay="400"
                  data-unload="fade-up"
                  style={{ marginLeft: "45px" }}
                >
                  <p className="bringer-large-text">
                    We help businesses and professionals showcase their work and
                    connect with clients through innovative digital solutions.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <br />
            <div className="stg-row stg-large-gap stg-tp-normal-gap">
              <div
                className="stg-col-6 stg-vertical-space-between stg-tp-bottom-gap-l desktop-only"
                data-unload="fade-left"
              >
                <h2 data-split-appear="fade-up">
                  Igniting brands that spark movements.
                </h2>
                <div className="align-right" data-appear="fade-right">
                  <Link href="/portfolio" className="bringer-icon-link">
                    <div className="bringer-icon-link-content">
                      <h6>
                        Unleash your
                        <br />
                        Brand's potential
                      </h6>
                      <span className="bringer-label">Explore our work</span>
                    </div>
                    <div className="bringer-icon-wrap">
                      <i className="bringer-icon bringer-icon-explore"></i>
                    </div>
                  </Link>
                </div>
              </div>
              <div
                className="stg-col-6"
                data-appear="fade-left"
                data-unload="fade-right"
                data-delay="100"
              >
                <p>
                  At Scale US, we are more than creatives; we are brand
                  strategists and digital architects. We take your vision,
                  infuse it with strategic insight, and create compelling
                  experiences that captivate audiences and drive engagement. We
                  build not just brands, but impactful digital solutions that
                  propel businesses forward.
                </p>
                <p>
                  We are a team of passionate and experienced professionals at
                  Scale US, dedicated to helping businesses achieve their goals
                  through creativity and innovation. We believe in unleashing
                  our clients' full potential, crafting solutions that drive
                  success and growth.
                </p>
                <p>
                  We empower businesses to build compelling online presences
                  that showcase their work and tell their unique stories.
                </p>
              </div>
              <div
                className="stg-col-6 stg-vertical-space-between stg-tp-bottom-gap-l mobile-tablet-only"
                data-unload="fade-left"
              >
                <br />
                <div className="align-right" data-appear="fade-right">
                  <Link href="/portfolio" className="bringer-icon-link">
                    <div className="bringer-icon-link-content">
                      <h6>
                        Unleash your
                        <br />
                        Brand's potential
                      </h6>
                      <span className="bringer-label">Explore our work</span>
                    </div>
                    <div className="bringer-icon-wrap">
                      <i className="bringer-icon bringer-icon-explore"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="backlight-bottom divider-top">
            <div className=" stg-large-gap stg-bottom-gap-l text-center w-full">
              <h2 className="text-5xl ">OUR VALUES</h2>
              <p className="text-lg font-bold text-white">
                L.I.G.H.T. – Guiding Our Way Forward
              </p>
            </div>
            <div
              className="bringer-detailed-list-wrap"
              data-appear="fade-up"
              data-unload="fade-up"
            >
              <ul className="bringer-detailed-list">
                <li>
                  <p>L</p>
                  <div className="w-full text-center uppercase">
                    <h4 className="text-xl md:text-4xl">
                    Leadership & Ownership
                      <span className="bringer-accent">.</span>
                    </h4>
                  </div>
                </li>
               <li>
                  <p>I</p>
                  <div className="w-full text-center uppercase">
                    <h4 className="text-xl md:text-4xl">
                    Integrity
                      <span className="bringer-accent">.</span>
                    </h4>
                  </div>
                </li>
                  <li>
                  <p>G</p>
                  <div className="w-full text-center uppercase">
                    <h4 className="text-xl md:text-4xl">
                    Growth & Innovation
                      <span className="bringer-accent">.</span>
                    </h4>
                  </div>
                </li>
                  <li>
                  <p>H</p>
                  <div className="w-full text-center uppercase">
                    <h4 className="text-xl md:text-4xl">
                    Humility
                      <span className="bringer-accent">.</span>
                    </h4>
                  </div>
                </li>
                  <li>
                  <p>T</p>
                  <div className="w-full text-center uppercase">
                    <h4 className="text-xl md:text-4xl">
                    TeamWork & Transparency
                      <span className="bringer-accent">.</span>
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          
          </section>
          <CategoryListDemo/>
             {/* Our Passion Section */}
          <section>
            <div className="align-center stg-bottom-gap-l">
              <h2 data-split-appear="fade-up" data-unload="fade-up">
                The fire that fuels our passion.
              </h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                At Scale Us, we believe in the power of:
              </p>
            </div>
            <div
              className="bringer-grid-2cols"
              data-stagger-appear="zoom-in"
              data-delay="150"
              data-unload="fade-up"
            >
              <div className="bringer-icon-box bringer-block">
                <h4>
                  Creativity<span className="bringer-accent">.</span>
                </h4>
                <p className="bringer-large-text">
                  We dare to dream big and push boundaries, never settling for
                  the ordinary.
                </p>
                <div className="bringer-box-icon">
                  <i className="bringer-icon bringer-icon-creativity"></i>
                </div>
              </div>
              <div className="bringer-icon-box bringer-block">
                <h4>
                  Collaboration<span className="bringer-accent">.</span>
                </h4>
                <p className="bringer-large-text">
                  We thrive on diverse perspectives and believe in the magic of
                  working together.
                </p>
                <div className="bringer-box-icon">
                  <i className="bringer-icon bringer-icon-collab"></i>
                </div>
              </div>
              <div className="bringer-icon-box bringer-block">
                <h4>
                  Impact<span className="bringer-accent">.</span>
                </h4>
                <p className="bringer-large-text">
                  We're driven by a desire to make a difference, to create
                  brands that move mountains.
                </p>
                <div className="bringer-box-icon">
                  <i className="bringer-icon bringer-icon-impact"></i>
                </div>
              </div>
              <div className="bringer-icon-box bringer-block">
                <h4>
                  Innovation<span className="bringer-accent">.</span>
                </h4>
                <p className="bringer-large-text">
                  We stay ahead of the curve, embracing new technologies &
                  trends to keep your brand on top.
                </p>
                <div className="bringer-box-icon">
                  <i className="bringer-icon bringer-icon-innovation"></i>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section id="section9" className="py-16">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2 stg-tp-col-10 stg-tp-offset-1">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    Meet the Team
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-split-appear="fade-up"
                    data-split-unload="fade-up"
                    data-delay="100"
                  >
                    We are a team of passionate and experienced professionals at
                    Scale US, dedicated to helping businesses achieve their
                    goals through innovative solutions and expert guidance.
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              className="bringer-carousel"
              spaceBetween={30}
              slidesPerView={4}
              loop={false}
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              data-appear="fade-up"
              data-delay="200"
              data-tp-centered="0"
              data-unload="fade-up"
              breakpoints={{
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team04.webp"
                    alt="Vidhi Chhabra"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">VP, Human Resources</span>
                    <h6>Vidhi Chhabra</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/scale-us-technologies/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team02.webp"
                    alt="Jaspal Singh"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">Chairman & Director</span>
                    <h6>Jaspal Singh</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/scale-us-technologies/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team01.webp"
                    alt="Jasminder Singh"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">Founder & CEO</span>
                    <h6>Jasminder Singh</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jasminder-singh-chhabra/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team02.webp"
                    alt="Jaspal Singh"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">Chairman & Director</span>
                    <h6>Jaspal Singh</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/scale-us-technologies/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team03.webp"
                    alt="Harjeet Kaur"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">Director</span>
                    <h6>Harjeet Kaur</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/scale-us-technologies/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team04.webp"
                    alt="Vidhi Chhabra"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">VP, Human Resources</span>
                    <h6>Vidhi Chhabra</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/company/scale-us-technologies/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bringer-block bringer-carousel-card">
                <div className="bringer-carousel-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/team/team01.webp"
                    alt="Jasminder Singh"
                    width="600"
                    height="350"
                  />
                </div>
                <div className="bringer-carousel-card-footer">
                  <div className="bringer-carousel-card-title">
                    <span className="bringer-meta">Founder & CEO</span>
                    <h6>Jasminder Singh</h6>
                  </div>
                  <span
                    className="bringer-icon bringer-icon-explore"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jasminder-singh-chhabra/",
                        "_blank"
                      )
                    }
                  ></span>
                </div>
              </SwiperSlide>
              <div
                className="swiper-pagination bringer-dots"
                slot="pagination"
              ></div>
            </Swiper>
          </section>


          {/* What Makes Us Best Section */}
          <section className="backlight-bottom">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-up">
                    What Makes Us Best
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-delay="100"
                    data-unload="fade-up"
                  >
                    We are a passionate team at Scale Us who believes in the
                    power of creativity. We empower businesses to establish a
                    compelling online presence that showcases their achievements
                    and narratives effectively.
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
              <div className="bringer-block">
                <h4>
                  We don't just design, we{" "}
                  <span className="bringer-accent">unleash creative</span>{" "}
                  firestorms<span className="bringer-accent">.</span>
                </h4>
                <p>
                  At Scale Us, we unleash creative firestorms. Our approach goes
                  beyond conventional boundaries to push the limits of
                  innovation. We're passionate about crafting dynamic and
                  transformative solutions that inspire, captivate, and drive
                  measurable success for our clients. From conceptualization to
                  execution, we ignite creativity to deliver impactful outcomes
                  that redefine possibilities in digital solutions
                </p>
              </div>
              <div className="bringer-block">
                <h4>
                  We <span className="bringer-accent">fuel creativity</span>{" "}
                  with data, guide passion with precision
                  <span className="bringer-accent">.</span>
                </h4>
                <p>
                  At Scale Us, we integrate advanced analytics with strategic
                  expertise to ensure our tech solutions are both innovative and
                  meticulously executed. This approach guarantees that our
                  solutions not only meet but exceed expectations, delivering
                  impactful results for your business.
                </p>
              </div>
              <div className="bringer-block">
                <h4>
                  We craft{" "}
                  <span className="bringer-accent">emotional connections</span>,
                  not just visuals and copy
                  <span className="bringer-accent">.</span>
                </h4>
                <p>
                  At Scale Us, we create immersive digital experiences that
                  resonate deeply with your audience, leveraging innovative
                  solutions to drive engagement and foster lasting connections.
                </p>
              </div>
              <div className="bringer-block">
                <h4>
                  We don't just work with you, we become your{" "}
                  <span className="bringer-accent">tech champions.</span>
                </h4>
                <p>
                  At Scale Us, we become your tech champions. Our dedicated team
                  goes beyond partnership to champion your technological goals,
                  offering expertise, innovation, and unwavering support.
                  Together, we navigate challenges, seize opportunities, and
                  achieve success, ensuring your business thrives in the digital
                  landscape.
                </p>
              </div>
            </div>
            <div className="bringer-partners partner-section">
              <span
                className="bringer-label"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                Proud to be associated with
              </span>
              <div
                className="bringer-grid-6cols bringer-tp-grid-3cols bringer-m-grid-2cols stg-top-gap-s"
                data-stagger-appear="fade-up"
                data-stagger-unload="fade-up"
                data-stagger-delay="100"
                data-delay="100"
              >
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Government-of-India.svg"
                    alt="Partner Logo"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Seven-Eleven.svg"
                    alt="Partner Logo"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Amazon.svg"
                    alt="Partner Logo"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Daily-Hunt.svg"
                    alt="Partner Logo"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Saliah-Foods.svg"
                    alt="Partner Logo"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-OZI.svg"
                    alt="Partner Logo"
                  />
                </div>
              </div>
            </div>
          </section>


          {/* Grid CTA Section */}
          <section className="backlight-top">
            <div className="bringer-bento-grid bringer-grid-cta">
              <div
                className="is-large bringer-masked-block"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <div
                  className="bringer-grid-cta-media bringer-masked-media"
                  data-bg-src="/img/box.svg"
                >
                  <div className="bringer-grid-cta-heading">
                    Need to amplify your voice?
                  </div>
                </div>
                <div className="bringer-masked-content at-bottom-right">
                  <p
                    className="bringer-large-text"
                    data-appear="fade-right"
                    data-delay="100"
                  >
                    Let's chat about your goals →
                  </p>
                </div>
              </div>
              <div
                className="is-medium bringer-block"
                data-appear="fade-down"
                data-unload="fade-right"
              >
                <h3>We will design campaigns that make the world listen</h3>
              </div>
              <div
                className="is-small"
                data-appear="zoom-out"
                data-delay="100"
                data-unload="zoom-out"
              >
                <Link
                  href="/contact-us"
                  className="bringer-square-button"
                  aria-label="Contact Scale Us"
                >
                  <span className="bringer-icon bringer-icon-explore"></span>
                </Link>
              </div>
              <div
                className="is-small"
                data-appear="zoom-out"
                data-delay="200"
                data-unload="zoom-out"
              >
                <Image
                  src="/img/about-scaleus1.svg"
                  alt="Let's Chat"
                  width="960"
                  height="960"
                />
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <Footer />

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
        {/* <Script src="https://analytics.scaleus.in/pixel/hgnkSqeXvUBFyYGj" strategy="lazyOnload" /> */}
        <Script
          src="/_vercel/insights/script.js"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`,
          }}
        />
        <Script
          src="/_vercel/speed-insights/script.js"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };`,
          }}
        />
        <Script
          id="gtm-delayed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.addEventListener('load', function() {
              setTimeout(function() {
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','G-PPS5N5K987');
              }, 3000);
            });
          `,
          }}
        />
      </main>
    </>
  );
}
