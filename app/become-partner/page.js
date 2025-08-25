// app/become partner/page.js
"use client";

import Head from 'next/head';
import Script from 'next/script';
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import Header from '@/components/Header';
import ".././globals.css";
import FirstSection from '@/components/become partner/Card';
import Image from 'next/image';
import { AccordionDemo } from '@/components/become partner/Accordian';
import { WorldMapDemo } from '@/components/become partner/WorldMap';
import Footer from '@/components/Footer';

export default function partner() {
  return (
    <>
    <Head>
           <meta charSet="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>become partner - Scale Us</title>
           <meta
             name="description"
             content="Join Scale Us Technologies and ignite your future with exciting career opportunities in web and mobile app development, UI/UX design, and more."
           />
           <script type="application/ld+json">
             {JSON.stringify({
               '@context': 'https://schema.org',
               '@type': 'Organization',
               url: 'https://www.scaleus.in',
               logo: 'https://www.scaleus.in/img/favicon.svg',
             })}
           </script>
           <meta property="og:title" content="Careers - Scale Us" />
           <meta
             property="og:description"
             content="Join Scale Us Technologies and ignite your future with exciting career opportunities in web and mobile app development, UI/UX design, and more."
           />
           <meta property="og:image" content="https://www.scaleus.in/img/favicon.svg" />
           <meta property="og:image:alt" content="Scale Us Technologies Logo" />
           <meta property="og:url" content="https://www.scaleus.in/career" />
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
   
       <Header/>
         <section className="backlight-bottom mt-10">
            <div className="stg-row">
              <div className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
                <h1 className="bringer-page-title" data-appear="fade-up" data-unload="fade-up">Partner With Us💰
</h1>
                <p className="bringer-large-text" data-appear="fade-up" data-unload="fade-up" data-delay="100">
                We know your customers look to you to help them keep their businesses up and running and design the right solution for the right application. So we've created a program that provides the elements you need, with the support you want and the rewards you deserve.


                </p>
              </div>
            </div>
          </section>

          <section className='mid'>
<FirstSection/>
<div className="flex flex-col md:flex-row justify-center items-center gap-16 mt-10 p-6 min-h-screen " data-appear="fade-up" data-unload="fade-up">
      {/* Left Section: What will you do? */}
      <div className="relative h-[450px]  rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md bg-[#1A1D24]">
      <div className='flex flex-row gap-4 text-white items-end mb-5 justify-between'> 
        <div className="text-3xl  font-light  mb-4">What
        <div className='font-bold'> will you do?</div>
      </div>
       <div className=" w-40">
  <Image
    src="/img/partner/two.png"
    alt="img"
    width={70}
    height={70}
    className="w-[100px] h-full rounded-none"
  />
</div>
       </div>
       
        <p className="text-gray-100 leading-relaxed">
          You will be provided access to our vast variety of products and for the same, you can find suitable clients and pitch and close sales for our product accordingly. You will be closing the deal with the end client on your side and making an agreement too. Our agreement will be made between us and you on the basis of the project details discussed. We’re also open to further discussion on this to resolve any unforeseeable situation.
        </p>
      </div>

      {/* Right Section: What we will do? */}
      <div className="relative h-[450px]   rounded-lg shadow-lg p-6 w-full md:w-1/2 max-w-md bg-[#1A1D24]">
       <div className='flex flex-row gap-4 text-white items-end mb-5 justify-between' > 
         <div className="text-3xl font-light  mb-4">What
        <div className='font-bold'> we will do?</div>
      </div>
       <div className="w-40">
  <Image
    src="/img/partner/one.png"
    alt="img"
    width={100}
    height={100}
    className="w-[100px] rounded-none"
  />
</div>
       </div>
        <p className="text-gray-100 leading-relaxed">
          We are your one-stop mobile app partner. We have experienced designers and developers that work closely with your team to gather the needs of your clients, strategize app development, and deliver the apps on time. We work on the latest and most reliable software development technologies and tools to build cutting-edge applications. Quality of product matters a lot to us, we make sure that the delivered product has a great user experience.
        </p>
      </div>
    </div>

    <AccordionDemo/>
          </section>
          <WorldMapDemo/>
    {/* <GlobeDemo/> */}
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
      <Script defer src="https://analytics.scaleus.in/pixel/BjeYvwOLp4Y0llG4" strategy="afterInteractive" />
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