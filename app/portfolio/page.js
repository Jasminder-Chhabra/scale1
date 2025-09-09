// app/portfolio/page.js
"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import "../../public/css/config.css";
import "../../public/css/libs.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import ".././globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Portfolio() {


  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio - Scale Us</title>
        <meta
          name="description"
          content="Explore Scale Us Technologies' portfolio showcasing innovative digital solutions, mobile apps, websites, and branding projects."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              url: "https://www.scaleus.in",
              logo: "https://www.scaleus.in/img/favicon.svg",
            }),
          }}
        />
        <meta property="og:title" content="Portfolio - Scale Us" />
        <meta
          property="og:description"
          content="Explore Scale Us Technologies' portfolio showcasing innovative digital solutions, mobile apps, websites, and branding projects."
        />
        <meta
          property="og:image"
          content="https://www.scaleus.in/img/favicon.svg"
        />
        <meta property="og:image:alt" content="Scale Us Technologies Logo" />
        <meta property="og:url" content="https://www.scaleus.in/portfolio" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/img/favicon.svg" sizes="32x32" />
        <style>
          {`
            :root {
              --stea-move: var(--stg-gap);
              --stea-zoom-in: 0.9;
              --stea-zoom-out: 1.1;
              --stea-duration: 0.5s;
            }
            [data-split-appear] {
              --stea-move: 0.5cap;
            }
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
          `}
        </style>
      </Head>

      <Header />

      <main id="bringer-main" data-unload="fade-down">
        <div className="stg-container">
          <section className="backlight-bottom">
            <div className="stg-row">
              <div className="stg-col-6 stg-offset-3">
                <div className="align-center">
                  <h1
                    className="bringer-page-title "
                    data-appear="fade-up"
                    data-unload="fade-up"
                  >
                    Scale Us Portfolio
                  </h1>
                  <p
                    className="bringer-large-text"
                    data-appear="fade-up"
                    data-delay="100"
                    data-unload="fade-up"
                  >
                    Where Creative Sparks Ignite Branding Revolutions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div
              className="bringer-grid-3cols bringer-tp-grid-2cols bringer-tp-centered-last-item stg-normal-gap bringer-parallax-media"
              data-stagger-appear="fade-up"
              data-threshold="0.5"
              data-stagger-delay="150"
              data-stagger-unload="fade-up"
            >
              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio/portfolio01.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Consulting Website</span>
                    <h6>OZI CORP</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/ozicorp"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-img/7eleven/img1.jpg"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Website</span>
                    <h6>Seven Eleven</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/7eleven"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/salah.png"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Website Development</span>
                    <h6>Saliah Foods</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/saliah-foods"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/simpletap.png"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">SaaS Product</span>
                    <h6>Simply Tap It</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/simplyTap"></Link>
              </div>

              {/* bello Ricco */}
              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/belloRicco/img2.webp"
                    data-src="/img/portfolio-single-img/bella.png"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Bello Ricco</span>
                    <h6>Luxury Clothing Brand</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/bello-ricco"></Link>
              </div>
              {/* bello Ricco end */}

              {/* berry Click */}
              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/berryclick.png"
                    alt=""
                   style={{ height: "347px" }}
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Digital Marketing</span>
                    <h6>Berry Click</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/berryClick"></Link>
              </div>
              {/* berry Click end */}

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/natrax/img1.png"
                    data-src="/img/portfolio-single-img/natrax.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">
                      Ticket Management Portal
                    </span>
                    <h6>Natrax</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/natrax"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <Image
                    className="bringer-lazy"
                    src="/img/null.png"
                    data-src="/img/portfolio-single-img/shulk.png"
                    alt=""
                    width="1200"
                    height="1200"
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">SaaS Product</span>
                    <h6>indore municipal corporation shulk portal</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/shulkportal"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/anphar/img7.jpeg"
                    data-src="/img/portfolio-single-img/pharma.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Pharmaceutical Website</span>
                    <h6>ANPHAR</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/anphar"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/anphar/img7.jpeg"
                    data-src="/img/portfolio-single-img/logistic.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">
                      Logistics & Transportation Website
                    </span>
                    <h6>BlackBull Trans</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/blackbullTrans"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/texmo/img5.png"
                    data-src="/img/portfolio-single-img/texmo.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Logistics Website</span>
                    <h6>Texmo Pipe</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/texmoPipe"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/rainbowRush/img1.webp"
                    data-src="/img/portfolio-single-img/rainbow.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">
                      Fun & Creative Coloring App
                    </span>
                    <h6>Rainbow Rush</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/rainbowRush"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/funlearn/img1.webp"
                    data-src="/img/portfolio-single-img/learning.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Kids Learning App</span>
                    <h6>Preschool Fun Learn</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/funLearnApp"></Link>
              </div>

              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/neonmaze/img5.jpg"
                    data-src="/img/portfolio-single-img/maze.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">Maze App</span>
                    <h6>Neon Maze App</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/neonmaze"></Link>
              </div>
              <div className="bringer-block bringer-portfolio-card">
                <div className="bringer-portfolio-card-image">
                  <img
                    className="bringer-lazy "
                    style={{ height: "347px" }}
                    src="/img/portfolio-img/wordpuzzle/img1.jpg"
                    data-src="/img/portfolio-single-img/puzzle.png"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="bringer-portfolio-card-footer">
                  <div className="bringer-portfolio-card-title">
                    <span className="bringer-meta">word puzzle App</span>
                    <h6>Word Puzzle App</h6>
                  </div>
                  <span className="bringer-icon bringer-icon-explore"></span>
                </div>
                <Link href="/portfolio-post/wordpuzzle"></Link>
              </div>
            </div>
          </section>

          <section className="backlight-top" data-unload="fade-down">
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
                    Need to amplify your Project?
                  </div>
                </div>
                <div className="bringer-masked-content at-bottom-right">
                  <p
                    className="bringer-large-text"
                    data-appear="fade-right"
                    data-delay="100"
                  >
                    Let's Connect →
                  </p>
                </div>
              </div>
              <div
                className="is-medium bringer-block"
                data-appear="fade-down"
                data-unload="fade-right"
              >
                <h3>
                  We create digital solutions that make the world take notice.
                </h3>
              </div>
              <div
                className="is-small"
                data-appear="zoom-out"
                data-delay="100"
                data-unload="zoom-out"
              >
                <Link href="/contact-us" className="bringer-square-button">
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
                  loading="lazy"
                />
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />

      <div className="bringer-rcp-wrap">
        <div className="bringer-rcp-overlay"></div>
        <div className="bringer-rcp-container">
          <h2>Content Protected</h2>
        </div>
      </div>
      <div className="bringer-backlight"></div>

      <Script src="/js/lib/jquery.min.js" strategy="beforeInteractive" />
      <Script
        id="patch-main-js"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
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
          `,
        }}
      />
      <Script src="/js/lib/libs.js" strategy="afterInteractive" />
      <Script src="/js/contact_form.js" strategy="afterInteractive" />
      <Script src="/js/st-core.js" strategy="afterInteractive" />
      <Script src="/js/classes.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.2/lazysizes.min.js"
        strategy="lazyOnload"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-PPS5N5K987"
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PPS5N5K987');
          `,
        }}
      />
    </>
  );
}
