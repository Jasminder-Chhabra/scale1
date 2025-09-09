// app/portfolio-post02/page.js
"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';

export default function PortfolioPost02() {
 

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio - Cookie Dough - Scale Us</title>
        <meta
          name="description"
          content="Discover how Scale Us transformed Doughp's edible cookie dough into a guilt-free sensation with the #DoughpWithoutDoubt campaign."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: 'Cookie Dough Campaign',
            creator: {
              '@type': 'Organization',
              name: 'Scale Us Technologies',
              url: 'https://www.scaleus.in',
            },
            datePublished: '2023-10-01',
          })}
        </script>
        <meta property="og:title" content="Portfolio - Cookie Dough - Scale Us" />
        <meta
          property="og:description"
          content="Discover how Scale Us transformed Doughp's edible cookie dough into a guilt-free sensation with the #DoughpWithoutDoubt campaign."
        />
        <meta property="og:image" content="https://www.scaleus.in/img/portfolio/portfolio02/hero01.jpg" />
        <meta property="og:image:alt" content="Cookie Dough Campaign" />
        <meta property="og:url" content="https://www.scaleus.in/portfolio-post02" />
        <meta property="og:type" content="article" />
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
        `}</style>
      </Head>

      <header id="bringer-header" className="is-frosted is-sticky" data-appear="fade-down" data-unload="fade-up">
        <div className="bringer-header-inner">
          <div className="bringer-header-lp">
            <Link href="/" className="bringer-logo">
              <img src="/img/Scale Us Logo.svg" alt="Scale Us Logo" width="200" height="88" />
            </Link>
          </div>
          <div className="bringer-header-mp">
            <nav className="bringer-nav">
              <ul className="main-menu" data-stagger-appear="fade-down" data-stagger-delay="75">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about-us">About Us</Link></li>
                <li>
                  <Link href="/services">Services</Link>
                  <ul className="sub-menu">
                    <li><Link href="/services">Website Development</Link></li>
                    <li><Link href="/services">App Development</Link></li>
                    <li><Link href="/services">SEO</Link></li>
                    <li><Link href="/services">UI/UX</Link></li>
                    <li><Link href="/services">Staff Augmentation</Link></li>
                  </ul>
                </li>
                <li>
                  <Link href="https://simplytapit.in">Products</Link>
                  <ul className="sub-menu">
                    <li><Link href="https://ai.scaleus.in">Magic AI</Link></li>
                    <li><Link href="https://simplytapit.in">Simply Tap It</Link></li>
                    <li><Link href="https://people.scaleus.in">People Hub</Link></li>
                    <li><Link href="https://shop.scaleus.in">e-Commerce Store</Link></li>
                  </ul>
                </li>
                <li className="current-menu-parent"><Link href="/portfolio">Portfolio</Link></li>
                <li><Link href="/career">Careers</Link></li>
              </ul>
            </nav>
          </div>
          <div className="bringer-header-rp">
            <Link href="/contact-us" className="bringer-button">Get in Touch</Link>
          </div>
        </div>
        <div className="bringer-mobile-header-inner">
          <Link href="/" className="bringer-logo">
            <img src="/img/Scale Us Logo.svg" alt="Scale Us Logo" width="88" height="24" />
          </Link>
          <Link href="#" className="bringer-mobile-menu-toggler" aria-label="Toggle mobile menu">
            <i className="bringer-menu-toggler-icon">
              <span></span>
              <span></span>
              <span></span>
            </i>
          </Link>
        </div>
      </header>

      <main id="bringer-main" data-unload="fade-down">
        <div className="stg-container">
          <section>
            <div className="bringer-bento-grid stg-bottom-gap-l">
              <div className="is-large" data-appear="fade-right" data-unload="fade-left">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/hero01.jpg"
                  alt="Cookie Dough"
                  width="1200"
                  height="1200"
                  loading="lazy"
                />
              </div>
              <div
                className="is-medium bringer-block stg-vertical-space-between"
                data-appear="fade-down"
                data-delay="100"
                data-unload="fade-right"
              >
                <h1>Cookie Dough</h1>
                <p className="bringer-large-text">
                  Dive into the story of how Bringer helped Doughp transform a forbidden fruit into a guilt-free sensation, one spoonful at a time.
                </p>
              </div>
              <div
                className="is-small bringer-block"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-left"
              >
                <ul className="bringer-meta-list">
                  <li>
                    <span className="bringer-meta">Client:</span>
                    <span className="bringer-highlight">Doughp</span>
                  </li>
                  <li>
                    <span className="bringer-meta">Service:</span>
                    <span className="bringer-highlight">Advertising</span>
                  </li>
                  <li>
                    <span className="bringer-meta">Date:</span>
                    <span className="bringer-highlight">October '2023</span>
                  </li>
                </ul>
              </div>
              <div
                className="is-small"
                data-appear="fade-left"
                data-delay="200"
                data-unload="fade-right"
              >
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/hero02.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="stg-row stg-bottom-gap-l stg-tp-column-reverse">
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>The Challenge</h2>
                <div>
                  <p>
                    Doughp wasn't your average cookie dough company. They crafted edible cookie dough – a tantalizing treat that promised the deliciousness of raw dough minus the food poisoning fear. Yet, the "edible" aspect was a double-edged sword. Parents hesitated, wary of the safety claims, while adults questioned the indulgence without the baking payoff.
                  </p>
                  <p>
                    Doughp needed a campaign that not only dispelled myths and promoted safety, but also redefined the very concept of cookie dough – transforming it from a forbidden fruit into a guilt-free, delectable treat for everyone.
                  </p>
                </div>
              </div>
              <div
                className="stg-col-4 stg-tp-bottom-gap"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/image01.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="stg-row stg-bottom-gap-l">
              <div
                className="stg-col-4 stg-tp-bottom-gap"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/image02.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <h2>Our Approach</h2>
                <div>
                  <p>
                    We knew we had to speak to two distinct audiences: cautious parents and craving adults. We conducted in-depth surveys and focus groups, delving into the psychological triggers and emotional connections associated with cookie dough. Our key takeaway? Cookie dough wasn't just a food; it was a nostalgic memory, a symbol of comfort and indulgence.
                  </p>
                </div>
              </div>
            </div>

            <div className="bringer-bento-grid stg-bottom-gap-l">
              <div
                className="is-large stg-vertical-space-between bringer-block stg-large-gap"
                data-bg-src="/img/cta/grid-cta-background.jpg"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>The Solution</h2>
                <p className="bringer-large-text">
                  We crafted a campaign that celebrated the joy of cookie dough, but with a modern twist: #DoughpWithoutDoubt, a playful nod to the safety concerns and a powerful message of guilt-free indulgence.
                </p>
              </div>
              <div
                className="is-medium bringer-block stg-valign-middle"
                data-appear="fade-left"
                data-delay="100"
                data-unload="fade-right"
              >
                <ul className="bringer-marked-list">
                  <li>Whimsical video ads: We created stop-motion animation shorts featuring vibrant cookie dough characters.</li>
                  <li>Influencer partnerships: We teamed up with parenting bloggers and health-conscious chefs, showcasing how Doughp fit into their families and healthy lifestyles.</li>
                  <li>Instagrammable pop-up shops: We created interactive pop-up shops brimming with colorful Doughp jars and activities.</li>
                </ul>
              </div>
              <div
                className="is-small"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-left"
              >
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/image03.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
              <div
                className="is-small"
                data-appear="fade-up"
                data-delay="200"
                data-unload="fade-right"
              >
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/image04.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="stg-row">
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between stg-tp-bottom-gap"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>Results & Impact</h2>
                <div>
                  <ul className="bringer-marked-list">
                    <li><span className="bringer-highlight">Doubling of brand awareness:</span> Doughp became synonymous with safe, delicious edible cookie dough, capturing the attention of both skeptical parents and curious adults.</li>
                    <li><span className="bringer-highlight">Significant sales growth:</span> Sales skyrocketed, propelled by new customers and repeat buys from families and individuals discovering the joy of guilt-free indulgence.</li>
                    <li><span className="bringer-highlight">Shift in market perception:</span> Doughp successfully redefined the edible cookie dough category, moving from a niche product to a mainstream treat embraced by consumers.</li>
                  </ul>
                </div>
              </div>
              <div className="stg-col-4" data-appear="fade-left" data-unload="fade-right">
                <img
                  className="bringer-lazy"
                  src="/img/null.png"
                  data-src="/img/portfolio/portfolio02/image05.jpg"
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="divider-top" data-appear="fade-up">
            <div className="align-center" data-unload="zoom-in">
              <Link href="/portfolio-post03" className="bringer-icon-link bringer-next-post">
                <div className="bringer-icon-link-content">
                  <h6>Next Project</h6>
                  <h2>Gaming Power</h2>
                </div>
                <div className="bringer-icon-wrap">
                  <i className="bringer-icon bringer-icon-explore"></i>
                </div>
              </Link>
            </div>
          </section>
        </div>

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
                      <Link
                          href="https://www.linkedin.com/company/scale-us-technologies"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bringer-socials-linkedin"
                          onClick={(e) => { e.preventDefault(); window.open('https://www.linkedin.com/company/scale-us-technologies', '_blank'); }}
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
                          onClick={(e) => { e.preventDefault(); window.open('https://instagram.com/scaleus.in', '_blank'); }}
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
                          onClick={(e) => { e.preventDefault(); window.open('https://x.com/scale_us_tech', '_blank'); }}
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
                          onClick={(e) => { e.preventDefault(); window.open('https://www.youtube.com/@Scale-Us-Technologies', '_blank'); }}
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
                          onClick={(e) => { e.preventDefault(); window.open('https://www.facebook.com/ScaleUsTechnologies', '_blank'); }}
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
      </main>
    </div>
  );
}