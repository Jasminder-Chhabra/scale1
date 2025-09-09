// app/page.js
"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ".././globals.css"; // Tailwind CSS
import "../../public/css/config.css";
import "../../public/css/libs.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import Achievement from "@/components/ui/Achivement";
import Header from "@/components/Header";
import { Herooo } from "@/components/home1/Hero6";

export default function Home() {
  // Form Submission
  useEffect(() => {
    const form = document.querySelector(".bringer-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const responseElement = form.querySelector(
        ".bringer-contact-form__response"
      );
      responseElement.textContent = "Sending...";

      fetch(form.action, { method: "POST", body: formData })
        .then((response) => response.text())
        .then((data) => {
          responseElement.textContent = data;
          responseElement.style.color = "#FFFFFF";
        })
        .catch((error) => {
          console.error("Error:", error);
          responseElement.textContent = "An error occurred. Please try again.";
          responseElement.style.color = "#FFFFFF";
        });
    });
  }, []);

  // Right-Click Protection
  useEffect(() => {
    let timeoutId = null;

    const handleContextMenu = (e) => {
      e.preventDefault();
      const rcpWrap = document.querySelector(".bringer-rcp-wrap");
      if (rcpWrap) {
        document.body.classList.add("rcp-show");
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          document.body.classList.remove("rcp-show");
        }, 2000);
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Scale Us Technologies - Website and Mobile App Development Company
        </title>
        <meta
          name="description"
          content="Scale Us Technologies offers top-notch website and mobile app development services, crafting intuitive and high-performance digital solutions to enhance user experiences and drive business growth."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.scaleus.in",
            logo: "https://www.scaleus.in/img/favicon.svg",
          })}
        </script>
        <meta
          property="og:title"
          content="Scale Us Technologies - Website and Mobile App Development Company"
        />
        <meta
          property="og:description"
          content="Scale Us Technologies offers top-notch website and mobile app development services, crafting intuitive and high-performance digital solutions to enhance user experiences and drive business growth."
        />
        <meta
          property="og:image"
          content="https://www.scaleus.in/img/favicon.svg"
        />
        <meta property="og:image:alt" content="Scale Us Technologies Logo" />
        <meta property="og:url" content="https://www.scaleus.in" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
        {/* Inline styles moved from previous CSS imports */}
        <style>{`
          :root {
            --stea-move: var(--stg-gap);
            --stea-zoom-in: 0.9;
            --stea-zoom-out: 1.1;
            --stea-duration: 0.5s;
          }
          [data-split-appear] { --stea-move: 0.5cap; }
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
          body.is-unloading [data-unload] { pointer-events: none; }
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
          .stg-container { overflow: visible !important; }
          .bringer-rcp-wrap { display: none; }
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

   <Herooo/>
      <main
        id="bringer-main"
        className="custom-proud-css"
        data-unload="fade-down"
      >
        <div className="stg-container">
          <section className="backlight-bottom pt-0">
            <div
              className="bringer-partners partner-section"
              data-unload="fade-up"
            >
              <span
                className="bringer-label"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                Proud of our work with
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
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Seven-Eleven.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Amazon.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Daily-Hunt.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-Saliah-Foods.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Client-OZI.svg"
                    alt="Partner Logo"
                    width="200"
                    height="100"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
            <div className="stg-row stg-large-gap stg-m-normal-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l stg-m-bottom-gap"
                data-unload="fade-left"
              >
                <div className="bringer-parallax-media">
                 
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/home/about02.webp"
                    alt=""
                    width="600"
                    height="600"
                  />
                </div>
              </div>
              <div
                className="stg-col-6 stg-vertical-space-between"
                data-unload="fade-right"
              >
                <div>
                  <h3 data-appear="fade-up" data-unload="fade-down">
                    Welcome to Scale Us, where creativity meets expertise.
                  </h3>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    Your Trusted Technology Partner
                  </p>
                  <p data-appear="fade-up" data-unload="fade-down">
                    Scale Us Technologies is an Indian tech web-based company
                    dedicated to empowering businesses through cutting-edge
                    technology.
                  </p>
                  <p data-appear="fade-up" data-unload="fade-down">
                    From web development and eCommerce solutions to mobile app
                    development and UI/UX designing, our range of services
                    ensures robust and visible digital presence.
                  </p>
                </div>
                <Link
                  href="/about-us"
                  className="bringer-icon-link"
                  data-appear="fade-up"
                  data-unload="fade-down"
                >
                  <div className="bringer-icon-wrap">
                    <i className="bringer-icon bringer-icon-explore"></i>
                  </div>
                  <div className="bringer-icon-link-content">
                    <h6>
                      We are <br /> Passionate Team
                    </h6>
                    <span className="bringer-label">Learn More About Us</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          <section
            className="is-fullwidth is-stretched"
            data-padding="none"
            data-unload="fade-down"
          >
            <div className="bringer-marquee is-init">
              <div className="bringer-marquee-inner">
                <ul className="bringer-marquee-list">
                  <li>
                    <h2>Mobile Application Development</h2>
                  </li>
                  <li>
                    <h2>Website Development</h2>
                  </li>
                  <li>
                    <h2>SEO and Email Marketing</h2>
                  </li>
                  <li>
                    <h2>Customer Software Development</h2>
                  </li>
                  <li>
                    <h2>UX/UI</h2>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    4 Steps to Brand Brilliance
                  </h2>
                  <p
                    className="bringer-large-text is-short"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    We are a passionate team of developers who believe in the
                    power of creativity.
                  </p>
                </div>
              </div>
            </div>
            <div className="stg-row stg-valign-middle stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <div className="bringer-parallax-media">
                  <img
                    className="bringer-lazy"
                    src="/img/home/steps.webp"
                    data-src="/img/home/steps.webp"
                    alt="Brand Brilliance"
                    width="560"
                    height="560"
                  
                  />
                 
                </div>
              </div>
              <div
                className="stg-col-6"
                data-unload="fade-right"
                data-delay="100"
              >
                <div
                  className="bringer-grid-2cols stg-normal-gap"
                  data-stagger-appear="fade-left"
                  data-stagger-unload="fade-right"
                >
                  <div className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 01</span>
                      <h5>Spark Ignition</h5>
                    </div>
                    <div>
                      Share your vision, dreams, and challenges. We listen
                      deeply.
                    </div>
                  </div>
                  <div className="bringer-subgrid-item stg-bottom-gap stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 02</span>
                      <h5>Concept Couture</h5>
                    </div>
                    <div>Explore bespoke concepts tailored just for you.</div>
                  </div>
                  <div className="bringer-subgrid-item stg-m-bottom-gap-s">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 03</span>
                      <h5>Masterful Crafting</h5>
                    </div>
                    <div>Watch your vision transform into reality.</div>
                  </div>
                  <div className="bringer-subgrid-item">
                    <div className="bringer-title-with-meta">
                      <span className="bringer-label">Step 04</span>
                      <h5>Launch & Beyond</h5>
                    </div>
                    <div>Unleash your brand masterpiece to the world.</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            className="is-fullwidth is-stretched1"
            data-unload="fade-down"
          >
            <div className="stg-row bringer-section-title is-boxed">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Work
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    We are proud of our work, and we are always looking for new
                    challenges.
                  </p>
                </div>
              </div>
            </div>
            <Swiper
              className="bringer-carousel stg-bottom-gap-l"
              spaceBetween={30}
              slidesPerView={4}
              loop={false}
              modules={[Pagination]} // Updated for modern Swiper
              pagination={{ clickable: true, el: ".swiper-pagination" }}
              breakpoints={{
                0: { slidesPerView: 1.5 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio01.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Mobile Application</span>
                    <h6>Seven Eleven</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post01"
                  aria-label="View details of Portfolio Post 01"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio02.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">CRM Dashboard</span>
                    <h6>OZI Fleet</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post02"
                  aria-label="View details of Portfolio Post 02"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio03.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Web Development</span>
                    <h6>Project Three</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post03"
                  aria-label="View details of Portfolio Post 03"
                ></Link>
              </SwiperSlide>
              <SwiperSlide
                className="bringer-block bringer-portfolio-card"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio04.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">UI/UX Design</span>
                    <h6>Project Four</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link
                  href="/portfolio-post04"
                  aria-label="View details of Portfolio Post 04"
                ></Link>
              </SwiperSlide>
              <div
                className="swiper-pagination bringer-dots"
                slot="pagination"
              ></div>
            </Swiper>
            <div
              className="align-center"
              data-appear="fade-up"
              data-unload="fade-down"
              data-delay="100"
            >
              <Link href="/portfolio-slider" className="bringer-button">
                Discover Full Portfolio
              </Link>
            </div>
          </section>

          <section className="backlight-bottom" data-unload="fade-down">
            <div className="stg-row bringer-section-title">
              <div className="stg-col-8 stg-offset-2">
                <div className="align-center">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Services
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    We offer a wide range of creative services to help
                    businesses of all sizes achieve their goals.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bringer-list-with-preview"
              data-preview-position="left"
              data-unload="fade-down"
              data-delay="200"
            >
              <div className="bringer-lwp-roster">
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <img
                    src="/img/home/service01.webp"
                    alt="Mobile-App-Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Mobile Application Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      We specialize in expert mobile application development,
                      creating powerful, user-friendly apps.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <img
                    src="/img/home/service02.webp"
                    alt="Website Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Website Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      We create responsive and dynamic platforms that amplify
                      your online presence.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <img
                    src="/img/home/service003.webp"
                    alt="Web Designer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      UI/UX Design<span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      Our UI/UX design services enhance user experience and
                      elevate visual appeal.
                    </p>
                  </div>
                </div>
                <div
                  className="bringer-lwp-item bringer-block"
                  data-appear="fade-left"
                  data-unload="fade-right"
                >
                  <img
                    src="/img/home/service004.webp"
                    alt="Software Developer"
                    width="584"
                    height="907"
                    loading="lazy"
                  />
                  <div className="bringer-lwp-item-content">
                    <h5>
                      Customer Software Development
                      <span className="bringer-accent">.</span>
                    </h5>
                    <p>
                      Our custom software development services are tailored to
                      meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="align-right">
              <Link
                href="/services"
                className="bringer-arrow-link"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                Discover all services
              </Link>
            </div>
          </section>

          <section data-unload="fade-down">
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Why Choose Us
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    We are a passionate team of developers who believe in the
                    power of creativity.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/about-us"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Learn More About Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-in"
                  data-stagger-unload="zoom-out"
                  data-threshold="0.5"
                  data-stagger-delay="150"
                >
                  <div className="bringer-block">
                    <h4>
                      We don't just deliver, we{" "}
                      <span className="bringer-accent">ignite innovation</span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      At Scale Us, we infuse your brand with bold ideas and
                      strategic brilliance.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We <span className="bringer-accent">fuel creativity</span>{" "}
                      with data<span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We blend data-driven insights with passion, ensuring
                      measurable results.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We craft{" "}
                      <span className="bringer-accent">
                        emotional connections
                      </span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We weave stories that resonate, visuals that linger, and
                      content that sparks.
                    </p>
                  </div>
                  <div className="bringer-block">
                    <h4>
                      We become your{" "}
                      <span className="bringer-accent">
                        technology champions
                      </span>
                      <span className="bringer-accent">.</span>
                    </h4>
                    <p>
                      We build partnerships, understanding your vision, as an
                      extension of your team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section data-padding="none" className="py-6" data-unload="fade-down">
            <Achievement />
          </section>

          <section className="hide-on-mobile-tab" data-unload="fade-down">
            <div className="stg-row stg-large-gap">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    Our Portfolio
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    We are proud of our work, and we are always looking for new
                    challenges.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/portfolio"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Explore full Portfolio
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col bringer-tp-grid-2cols stg-normal-gap bringer-parallax-media"
                  data-stagger-appear="fade-left"
                  data-stagger-unload="fade-right"
                  data-threshold="0.25"
                  data-stagger-delay="100"
                >
                  <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <img
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio/portfolio01.jpg"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Consulting Website</span>
                        <h6>OZI CORP</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/ozicorp"
                      aria-label="View details of Portfolio Post 01"
                    ></Link>
                  </div>
                  <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <img
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-img/7eleven/img1.jpg"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Mobile Application</span>
                        <h6>Seven Eleven</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/7eleven"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>

                     <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <img
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-single-img/simpletap.png"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">SAAS Product</span>
                        <h6>Simply Tap It</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/simplyTap"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>

                     <div className="bringer-block bringer-portfolio-card">
                    <div className="bringer-portfolio-card-image">
                      <img
                        className="bringer-lazy"
                        src="/img/null.png"
                        data-src="/img/portfolio-single-img/natrax.png"
                        alt=""
                        width="1200"
                        height="1200"
                      />
                    </div>
                    <div className="bringer-portfolio-card-footer">
                      <div className="bringer-portfolio-card-title">
                        <span className="bringer-meta">Ticket Management Portal</span>
                        <h6>Natrax</h6>
                      </div>
                      <span className="bringer-icon bringer-icon-explore"></span>
                    </div>
                    <Link
                      href="/portfolio-post/natrax"
                      aria-label="View details of Portfolio Post 02"
                    ></Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="testimonials-section"
            className="backlight-top"
            data-unload="fade-down"
          >
            <div className="bringer-expand-on-scroll">
              <img
                src="/img/pixel-profile-images/movebg.svg"
                alt="Testimonials"
                data-appear="fade-up"
                data-unload="fade-down"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            <div className="stg-row stg-large-gap stg-top-gap-l">
              <div
                className="stg-col-6 stg-tp-bottom-gap-l"
                data-unload="fade-left"
              >
                <div className="bringer-sticky-block">
                  <h2 data-appear="fade-up" data-unload="fade-down">
                    What Clients Say
                  </h2>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    Here are some of the most inspiring reviews from our
                    clients.
                  </p>
                  <div className="align-right">
                    <Link
                      href="/contact-us"
                      className="bringer-arrow-link"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Get a FREE Quote
                    </Link>
                  </div>
                </div>
              </div>
              <div className="stg-col-6">
                <div
                  className="bringer-grid-1col stg-normal-gap"
                  data-stagger-appear="zoom-out"
                  data-stagger-unload="fade-right"
                >
                  <div
                    className="bringer-block bringer-tetimonials-card"
                    data-appear="zoom-out"
                    data-unload="fade-right"
                    data-threshold="0.75"
                  >
                    <div className="bringer-tetimonials-card-descr">
                      "Working with Scale Us has been transformative for our
                      digital strategy."
                    </div>
                    <div className="bringer-tetimonials-card-footer">
                      <div className="bringer-tetimonials-card-name">
                        <h6>Ravi Sharma</h6>
                        <span className="bringer-meta">
                          Chief Marketing Officer, Tech Innovators India
                        </span>
                      </div>
                      <div className="bringer-tetimonials-card-rate">
                        <span className="bringer-tetimonials-stars5"></span>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bringer-block bringer-tetimonials-card"
                    data-appear="zoom-out"
                    data-unload="fade-right"
                    data-threshold="0.75"
                  >
                    <div className="bringer-tetimonials-card-descr">
                      "Scale Us exceeded our expectations with their mobile app
                      development services."
                    </div>
                    <div className="bringer-tetimonials-card-footer">
                      <div className="bringer-tetimonials-card-name">
                        <h6>Neha Patel</h6>
                        <span className="bringer-meta">
                          CEO, Digital Solutions India
                        </span>
                      </div>
                      <div className="bringer-tetimonials-card-rate">
                        <span className="bringer-tetimonials-stars5"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
            <br />
            <div
              className="bringer-partners partner-section"
              data-unload="fade-up"
            >
              <span
                className="bringer-label"
                data-appear="fade-up"
                data-unload="fade-up"
              >
                Certifications
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
                    src="/img/partners/Scale-Us-Startup-India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Digital-India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Scale-Us-Swacch-Bharat.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/TB-Logo.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Make In India.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-block bringer-center">
                  <img
                    src="/img/partners/Great-Place-To-Work.svg"
                    alt="Certification"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="page06" data-unload="fade-down">
            <div className="bringer-hero-block bringer-hero-type06">
              <div className="bringer-bento-grid stg-bottom-gap">
                <div
                  className="is-large bringer-masked-block"
                  data-appear="fade-right"
                  data-unload="fade-left"
                >
                  <div
                    className="bringer-bento-hero-media bringer-masked-media"
                    data-bg-src="/img/box2.svg"
                  >
                    <h1
                      className="bringer-page-title"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      Unleash your Creativity
                    </h1>
                    <p
                      className="bringer-highlight"
                      data-appear="fade-up"
                      data-unload="fade-down"
                    >
                      We help businesses and professionals showcase their work
                      through innovative digital solutions.
                    </p>
                  </div>
                  <div className="bringer-masked-content at-bottom-right">
                    <a
                      href="#page06"
                      className="bringer-square-button"
                      data-appear="zoom-in"
                      data-unload="zoom-out"
                      data-delay="100"
                      aria-label="Go to page 06"
                    >
                      <span className="bringer-icon bringer-icon-arrow-down"></span>
                    </a>
                  </div>
                </div>
                <div
                  className="is-small"
                  data-appear="zoom-out"
                  data-unload="zoom-out"
                  data-delay="100"
                >
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/about-scaleus1.svg"
                    alt="Product 04"
                    width="1200"
                    height="1200"
                  />
                </div>
                <div
                  className="is-small"
                  data-appear="zoom-out"
                  data-unload="zoom-out"
                  data-delay="200"
                >
                  <img
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/about-scaleus2.svg"
                    alt="Product 08"
                    width="1200"
                    height="1200"
                  />
                </div>
                <div
                  className="is-medium bringer-block stg-vertical-space-between"
                  data-appear="fade-left"
                  data-unload="fade-right"
                  data-delay="300"
                >
                  <h3>Your Partner in Digital Innovation</h3>
                  <p>
                    We are a team of passionate and experienced tech experts at
                    Scale Us, dedicated to helping businesses.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="bringer-masked-cta bringer-masked-block"
              data-unload="fade-down"
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.subscribe_email.value;
                  import("@emailjs/browser").then((emailjs) => {
                    emailjs
                      .send(
                        "service_2e4hyrc", // Replace with your EmailJS Service ID
                        "template_jaeacbm", // Replace with your EmailJS Template ID
                        { from_email: email },
                        "V9VHZjA9wdyskYcS8" // Replace with your EmailJS User ID
                      )
                      .then(() => {
                        const responseElement = e.target.querySelector(
                          ".bringer-contact-form__response"
                        );
                        responseElement.textContent =
                          "Subscribed successfully!";
                        responseElement.style.color = "#FFFFFF";
                        e.target.reset();
                      })
                      .catch((error) => {
                        const responseElement = e.target.querySelector(
                          ".bringer-contact-form__response"
                        );
                        responseElement.textContent =
                          "Failed to subscribe. Try again.";
                        responseElement.style.color = "#FF0000";
                        console.error("EmailJS error:", error);
                      });
                  });
                }}
                data-fill-error="Please, fill out the form."
                className="bringer-contact-form is-short bringer-masked-media"
                data-appear="fade-up"
                data-unload="fade-down"
              >
                <div className="bringer-form-content bringer-cta-form">
                  <div
                    className="bringer-cta-form-content"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="100"
                  >
                    <div className="bringer-cta-title">
                      Ready to set your Brand ablaze?
                    </div>
                    <input
                      type="email"
                      id="subscribe_email"
                      name="subscribe_email"
                      placeholder="email@example.com"
                      required
                    />
                  </div>
                  <div
                    className="bringer-cta-form-button"
                    data-appear="fade-up"
                    data-unload="fade-down"
                    data-delay="200"
                  >
                    <button type="submit" aria-label="Submit Form">
                      <span className="bringer-icon bringer-icon-arrow-submit"></span>
                    </button>
                  </div>
                  <div className="bringer-contact-form__response"></div>
                </div>
                <span className="bringer-form-spinner"></span>
              </form>
              <div className="bringer-masked-cta-content bringer-masked-content at-top-right">
                <p
                  className="bringer-large-text"
                  data-appear="fade-down"
                  data-unload="fade-up"
                >
                  Let's craft a visual identity that ignites passion and
                  loyalty. ✨
                </p>
              </div>
            </div>
          </section>
        </div>{" "}
        {/* Closes stg-container */}
      </main>

      <footer
        id="bringer-footer"
        className="is-fullwidth"
        data-appear="fade-up"
        data-unload="fade-down"
      >
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
                    <img
                      src="/img/Scale Us Logo.svg"
                      alt="Scale-Us-Logo"
                      width="200"
                      height="88"
                    />
                  </Link>
                  <div
                    className="bringer-info-description"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    We are a passionate team at Scale Us, dedicated to
                    empowering individuals and businesses through creative
                    digital solutions.
                  </div>
                  <span
                    className="bringer-label"
                    data-appear="fade-up"
                    data-unload="fade-down"
                  >
                    Follow us:
                  </span>
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
                          window.open(
                            "https://www.linkedin.com/company/scale-us-technologies",
                            "_blank"
                          );
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
                          window.open(
                            "https://instagram.com/scaleus.in",
                            "_blank"
                          );
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
                          window.open("https://x.com/scale_us_tech", "_blank");
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
                          window.open(
                            "https://www.youtube.com/@Scale-Us-Technologies",
                            "_blank"
                          );
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
                          window.open(
                            "https://www.facebook.com/ScaleUsTechnologies",
                            "_blank"
                          );
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
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          App Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Web Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          SEO and UI/UX
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Custom Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Integrations
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Explore</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li>
                        <Link
                          href="/"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/about-us"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/services"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Solutions
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/faq"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          FAQs
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact-us"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="stg-col-2 stg-tp-col-4 stg-m-col-4">
                <div className="bringer-widget">
                  <h6>Resources</h6>
                  <div className="bringer-menu-widget">
                    <ul>
                      <li>
                        <a
                          href="#"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Terms of Use
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Brochure
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          data-appear="fade-up"
                          data-unload="fade-down"
                        >
                          Become Partner
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bringer-footer-line">
          <div
            className="align-center"
            data-appear="fade-up"
            data-unload="fade-down"
          >
            Copyright © 2024.️ All Rights Reserved.
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
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
        strategy="lazyOnload"
      />
    </>
  );
}
