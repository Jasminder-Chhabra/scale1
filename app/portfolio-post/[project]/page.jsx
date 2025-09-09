// app/portfolio-post02/page.js
"use client";

import { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../../public/css/config.css';
import '../../../public/css/libs.css';
import '../../../public/css/style.css';
import '../../../public/css/responsive.css';
import { useParams } from 'next/navigation';
import portfolioData from '@/lib/portfolioData';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import "../../globals.css";
export default function PortfolioPost02() {
  // Right-Click Protection
  const slug = useParams();
 const data =  portfolioData[slug.project];
  console.log(data)
  const {title, Date, Service , SolutionList , approches , clientName , description , images  , impactList , solutionDesc , ChallengesDetails} = data;



  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio - {title} - Scale Us</title>
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

   <Header/>

      <main id="bringer-main" data-unload="fade-down">
        <div className="stg-container">
          <section>
            <div className="bringer-bento-grid stg-bottom-gap-l">
              <div className="is-large" data-appear="fade-right" data-unload="fade-left">
                <Image
                  className="bringer-lazy h-[300px] md:h-[400px] lg:h-[500px]"
                  src={images.section1bigimg}
                  data-src={images.section1bigimg}
                  alt="Cookie Dough"
                  loading="lazy"
                style={{height : "600px"}}
            width="800"
                  height="800"    
                />
              </div>
              <div
                className="is-medium bringer-block stg-vertical-space-between h-fit"
                data-appear="fade-down"
                data-delay="100"
                data-unload="fade-right"
              >
                <h1 className='text-3xl md:text-5xl'>{title}</h1>
                <p className="bringer-large-text gap-0">
                    {description}
                </p>
              </div>
              <div
                className="is-small bringer-block h-[270px] "
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-left"
                
              >
                <ul className="bringer-meta-list ">
                  <li>
                    <span className="bringer-meta">Client:</span>
                    <span className="bringer-highlight">{title}</span>
                  </li>
                  <li>
                    <span className="bringer-meta">Service:</span>
                    <span className="bringer-highlight">{Service}</span>
                  </li>
                  <li>
                    <span className="bringer-meta">Date:</span>
                    <span className="bringer-highlight">{Date}</span>
                  </li>
                </ul>
              </div>
              <div
                className="is-small md:block hidden"
                data-appear="fade-left"
                data-delay="200"
                data-unload="fade-right"
              >
                <Image
                  className="bringer-lazy  h-[220px] md:block hidden"
                    src={images.section1smallimg}
                    style={{height : "260px"}}
                  data-src={images.section1smallimg}
                  alt="Cookie Dough"
                  width="800"
                  height="800"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="stg-row stg-bottom-gap-l stg-tp-column-reverse">
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between h-[300px]"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>The Challenge</h2>
                <div>
                  <p>
                    {ChallengesDetails.para1}
                  </p>
                  <p>
                    {ChallengesDetails.para2}
                  </p>
                </div>
              </div>
              <div
                className="stg-col-4 stg-tp-bottom-gap "
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <Image
                  className="bringer-lazy h-[300px]"
                  src={images.challangeImg}
                  data-src={images.challangeImg}
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
                  className="bringer-lazy  w-full h-[300px]"
                  src={images.approachesImg}
                  data-src={images.approachesImg}
                  alt="Cookie Dough"
                 
                  loading="lazy"
                />
              </div>
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between h-fit"
                data-appear="fade-left"
                data-unload="fade-right"
              >
                <h2>Our Approach</h2>
                <div>
                  <p>
                    {approches}
                  </p>
                </div>
              </div>
            </div>

            <div className="bringer-bento-grid stg-bottom-gap-l">
              <div
                className="is-large stg-vertical-space-between bringer-block stg-large-gap h-[450px] md:h-[550px]"
                data-bg-src="/img/cta/grid-cta-background.jpg"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>The Solution</h2>
                <p className="bringer-large-text">
                  {solutionDesc}
                </p>
              </div>
              <div
                className="is-medium bringer-block stg-valign-middle"
                data-appear="fade-left"
                data-delay="100"
                data-unload="fade-right"
              >
                <ul className="bringer-marked-list">
                 {SolutionList.map((data , id) => (
                  <>
                  <li className='' key={id}>{data}</li>
                  </>
                 ))}
                </ul>
              </div>
              <div
                className="is-small "
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-left"
              >
                <Image
                  className="bringer-lazy  "
                  style={{height : "260px"}}
                  src={images.solutionImg1}
                  data-src={images.solutionImg1}
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
              <div
                className="is-small "
                data-appear="fade-up"
                data-delay="200"
                data-unload="fade-right"
              >
                <Image
                  className="bringer-lazy object-contain"
                   style={{height : "260px"}}
                  src={images.solutionImg2}
                  data-src={images.solutionImg2}
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="stg-row">
              <div
                className="stg-col-8 bringer-block stg-vertical-space-between stg-tp-bottom-gap h-[250px]"
                data-appear="fade-right"
                data-unload="fade-left"
              >
                <h2>Results & Impact</h2>
                <div>
                  <ul className="bringer-marked-list">
                    {impactList.map((data) => (
                    <li>{data}</li>

                    ))}
                  </ul>
                </div>
              </div>
              <div className="stg-col-4" data-appear="fade-left" data-unload="fade-right">
                <Image
                  className="bringer-lazy h-[250px] object-cover"
                  src={images.resultImg}
                  data-src={images.resultImg}
                  alt="Cookie Dough"
                  width="960"
                  height="960"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

        </div>

       <Footer/>

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