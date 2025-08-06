// app/[slug]/page.js
"use client";
import { useParams } from "next/navigation";
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import Header from '@/components/Header';
import ".././globals.css";

import Index from '@/components/products/Index';
import Footer from '@/components/Footer';

export default function Products() {
    const { slug } = useParams();

  return (
    <>

    <Head>
           <meta charSet="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>{slug} - Scale Us</title>
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
           <meta property="og:title" content="pixel profile - Scale Us" />
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
       

       <Index  key={slug} slug={slug}/>
       
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