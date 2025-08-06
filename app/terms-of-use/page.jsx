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
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Terms() {
  return (
    <>
    <Head>
           <meta charSet="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Terms of Use - Scale Us</title>
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
               .mid p {
               font-size : 18px !important;
               color : white !important;
               }
           `}</style>
         </Head>
   
       <Header/>
         <section className="backlight-bottom mt-10">
            <div className="stg-row">
              <div className="stg-col-6 stg-offset-3 align-center stg-tp-col-10 stg-tp-offset-1">
                <h1 className="bringer-page-title" data-appear="fade-up" data-unload="fade-up">Terms Of Use
</h1>
                <p className="bringer-large-text" data-appear="fade-up" data-unload="fade-up">
These terms and conditions outline the rules and regulations for the use of Scale Us Website, located at <Link href="https://scaleus.in">https://scaleus.in/</Link>. By accessing this website we assume you accept these terms and conditions. Do not continue to use Scale Us if you do not agree to take all of the terms and conditions stated on this page.
                </p>
              </div>
            </div>
          </section>

          <section className='mid max-w-6xl m-auto'>
 <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Consent</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
         The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
        </p>
      </div>
      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
            <h2 className="text-3xl font-semibold mb-2 text-md"> Access and Use of the Service
</h2>
        

<p  data-appear="fade-up" data-unload="fade-up"><strong className='text-white'>Description of Services:</strong>The Services are software accessed over the internet and via mobile devices for the purpose of sharing, updating, storing, accessing and otherwise using your own contact information and the contact information of other people in your network.  </p>

<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'>Your Registration Obligations: </strong>You are required to register with Scale Us in order to access and use the Service. If you choose to register for the Service, you agree to provide and maintain true, accurate, current and complete information about yourself as prompted by the Service's registration form. Registration data and certain other information about you are governed by our Privacy Notice. If you are under 13 years of age, you are not authorized to use the Service. In addition, if you are under 18 years old, you may use the Service only with the approval of your parent or guardian.
</p>
<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'> Security of your account:</strong> TYou agree to be responsible for any act or omission of any users that access the Services under your account. You agree to immediately notify Scale Us of any breach of security of which you become aware.
</p>

<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'> Access to the Service:</strong>You are responsible for obtaining and maintaining any equipment and ancillary services needed to connect to, access or otherwise use the Service. You are responsible for ensuring that such equipment and services are compatible with the Service, and, to the extent applicable, the Software (as defined below), and complies with all configurations and specifications set forth in Scale Us's published policies then in effect.
</p>

<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'>Modifications to the Service:</strong> Scale Us reserves the right to modify or discontinue, temporarily or permanently, the Service (or any part thereof) with or without notice. You agree that Scale Us will not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
</p>

<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'>General Practices Regarding Use and Storage:</strong>You acknowledge that Scale Us may establish general practices and limits concerning use of the Service, including without limitation the maximum period of time that data or other content will be retained by the Service and the maximum storage space that will be allotted on Scale Us's servers on your behalf. You agree that Scale Us has no responsibility or liability for the deletion or failure to store any data or other content maintained or uploaded by the Service. You acknowledge that Scale Us reserves the right to terminate accounts that are inactive for an extended period of time. You further acknowledge that Scale Us reserves the right to change these general practices and limits at any time, in its sole discretion, with or without notice.
</p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Cookies</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
We employ the use of cookies. By accessing Scale Us, you agreed to use cookies in agreement with the Scale Us Privacy Policy.

        </p>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.

        </p>

      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">License</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
         Unless otherwise stated, Scale Us and/or its licensors own the intellectual property rights for all material on Scale Us. All intellectual property rights are reserved. You may access this from Scale Us for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Hyperlinking to our Content</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
      <h2 className='text-xl'> The following organizations may link to our Website without prior written approval:</h2>
<br />
1. Government agencies; 2. Search engines; 3. News organizations; 4. Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and 5. System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
<br />
These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
<br />
We may consider and approve other link requests from the following types of organizations:
<br />
1. commonly-known consumer and/or business information sources; 2. dot.com community sites; 3. associations or other groups representing charities; 4. online directory distributors; 5. internet portals; 6. accounting, law and consulting firms; and 7. educational institutions and trade associations.
<br />
We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Scale Us; and (d) the link is in the context of general resource information.
<br />
These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
<br />
If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to Scale Us. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
<br />
 <h2 className="text-3xl font-semibold mb-2 text-md my-4">Approved organizations may hyperlink to our Website as follows:</h2>
<br />
1. By use of our corporate name; or 2. By use of the uniform resource locator being linked to; or 3. By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
<br />
No use of Scale Us logo or other artwork will be allowed for linking absent a trademark license agreement.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Content Liability</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
          We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.


        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Reservation of Rights</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.

        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Removal of links from our website</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.

        </p>
        <p  data-appear="fade-up" data-unload="fade-up">
We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.

        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Disclaimer</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
         To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
<br />
1. limit or exclude our or your liability for death or personal injury; 2. limit or exclude our or your liability for fraud or fraudulent misrepresentation; 3. limit any of our or your liabilities in any way that is not permitted under applicable law; or 4. exclude any of our or your liabilities that may not be excluded under applicable law.
<br />
The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
<br />
As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature. Website Development and Partner: Scale Us Technologies LLP
        </p>
      </div>

          </section>
    
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