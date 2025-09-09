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

export default function Policy() {
  return (
    <>
    <Head>
           <meta charSet="UTF-8" />
           <meta name="viewport" content="width=device-width, initial-scale=1.0" />
           <title>Privacy Policy - Scale Us</title>
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
                <h1 className="bringer-page-title" data-appear="fade-up" data-unload="fade-up">Privacy Policy
</h1>
                <p className="bringer-large-text" data-appear="fade-up" data-unload="fade-up">
At Scale Us, accessible from <Link href="https://scaleus.in/" >https://scaleus.in/</a> one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Scale Us and how we use it.



                </p>
              </div>
            </div>
          </section>

          <section className='mid max-w-6xl m-auto'>
 <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Consent</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
         This privacy notice for Scale Us, Inc. ("we," "us," or "our"), describes how and why we might collect, store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:

Visit our website at <Link href="https://scaleus.in/" >https://scaleus.in/</a>, or any website of ours that links to this privacy notice

Engage with us in other related ways, including any sales, marketing, or events
Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have questions or concerns, please contact us at contact@scaleus.in


        </p>
      </div>
      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
            <h2 className="text-3xl font-semibold mb-2 text-md">What Information Do We Collect And When Do We Collect It?</h2>
            
<p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">We may collect your Personal Information in the following circumstances:
</p>

<p  data-appear="fade-up" data-unload="fade-up">
    When you voluntarily provide it to us, such as when you register for an account with your email and password, or by using a social login (“Scale Us Login Credentials”), send us an email or post information or other content to our Site or Service;
When you connect a Third Party Platform with your Scale Us account we will receive information from that service (such as your username, basic profile information) via the authorization procedures used by that service. Any additional information we receive depends on which services you authorize and any options that are available;
If you purchase a subscription to the Service requiring billing or payment information, we require that you provide certain additional Personal Information, including your address, phone number, and credit card number (“Payment Information”). This information is necessary to process your requests and to contact you; and
When you accept another user’s invitation to connect on the Service.
When you utilize the Service, we also receive certain other information about you or your use of the Service. Such other information may be collected using various technologies, including:
</p>

<p  data-appear="fade-up" data-unload="fade-up"><strong className='text-white'>Logs: </strong>We track the data you see in Scale Us and how you interact with it by automatically collecting certain information such as, the pages you visit or features you use within the Service, the date and time of your activities on the Service, the URLs from the websites you visit before and after navigating to the Service, your software and hardware attributes (including operating system type and version, App version, device type, and device identifiers, including IDFA and/or Advertising IDs), your browser type and version, and your general geographic location derived through your IP address (e.g., your city, state, or metropolitan region). To obtain such information, we may use web logs or applications that recognize your device and gather information about its online activity. We treat this information as confidential if we combine it with or link it to any of your personal information. We use tracking data about individuals to inform us about how Scale Us is being used to help us provide a better user experience.</p>

<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'>Cookies: </strong>Like almost all websites today, Scale Us uses cookies to determine whether you are logged in on your device and to recognize repeat visitors. We send cookies to your device in order to uniquely identify your browser and improve the quality of our Service. Cookies are small pieces of information that a website sends to your device's hard drive while you are viewing a site. We may use both session cookies (which expire once you close your browser) and persistent cookies (which stay on your computer until you delete them). If you wish to restrict or block the cookies that are set by Scale Us, or by any other website, you can do this through your browser settings. Please note, if you choose to disable cookies, some of our Service may not work properly or at all.
</p>
<p  data-appear="fade-up" data-unload="fade-up">
    <strong className='text-white'> Web beacons:</strong> The Service or the emails that you receive from us may use an application known as a “web beacon” (also known as a “clear gif” or “pixel tag”). A web beacon is an electronic file that usually consists of a single-pixel image. It can be embedded in a web page or in an email to transmit information. For example, it allows an email sender to determine whether a user has opened a particular email.
Local storage: We may collect and store information (including personal information) locally on your device using mechanisms such as browser web storage (including HTML 5) and application data caches.
Scale Us keeps personal information contained in your cookies and obtained through the other tracking technologies confidential. We do not set any cookies outside of the Scale Us.me or Scale Us.com domains or subdomains.
</p>
<p  data-appear="fade-up" data-unload="fade-up">
    
We also may partner with certain third parties to collect, analyze, and use some of the Personal and other information described in this section. For example, we may allow third parties to set cookies or use web beacons on the Service or in email communications from Scale Us.
</p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Information We Collect</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
          The personal information that you are asked to provide, and the reasons why, will be made clear at the point we ask.
        </p>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
          If you contact us directly, we may receive additional information such as your name, email, phone number, message contents, and attachments.
        </p>
        <p  data-appear="fade-up" data-unload="fade-up">
          When registering for an account, we may ask for name, company name, address, email, and phone number.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">How We Use Your Information</h2>
        <ul className="list-decimal ml-6 space-y-1"  data-appear="fade-up" data-unload="fade-up">
          <li>Provide, operate, and maintain our website</li>
          <li>Improve, personalize, and expand our website</li>
          <li>Understand and analyze how you use our website</li>
          <li>Develop new products, services, features, and functionality</li>
          <li>
            Communicate with you, directly or via partners, for customer service, updates, marketing, and promotions
          </li>
          <li>Send you emails</li>
          <li>Find and prevent fraud</li>
        </ul>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Log Files</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
          Scale Us follows standard procedures using log files. These files log visitors when they visit websites — including IP address, browser type, ISP, date/time, referring/exit pages, and number of clicks. This data is not linked to personal identity and is used for trends, administration, tracking, and demographics.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Cookies and Web Beacons</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
          Like most websites, Scale Us uses cookies to store visitor preferences and accessed pages to enhance user experience.
          For general cookie info, see <Link href="https://www.cookieconsent.com/what-are-cookies/" className="text-purple-600 underline">What Are Cookies</a>.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Advertising Partners Privacy Policies</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
          Our advertising partners may use cookies, JavaScript, or Web Beacons in their ads and links. These are sent to your browser and automatically receive your IP address.
        </p>
        <p  data-appear="fade-up" data-unload="fade-up">
          Scale Us has no access to or control over cookies used by third-party advertisers.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Third Party Privacy Policies</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
          Our Privacy Policy does not apply to other advertisers or websites. Please consult their privacy policies for more info, including opt-out instructions.
        </p>
        <p>
          You can disable cookies through your browser settings. Learn more at your browser's official website.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
        <p className="mb-2 text-md">Under CCPA, California consumers have the right to:</p>
        <ul className="list-disc ml-6 space-y-1"  data-appear="fade-up" data-unload="fade-up">
          <li>Request disclosure of categories and specific pieces of personal data collected</li>
          <li>Request deletion of personal data</li>
          <li>Request that personal data not be sold</li>
        </ul>
        <p className="mt-2"  data-appear="fade-up" data-unload="fade-up">
          If you make a request, we have one month to respond. To exercise these rights, contact us.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">GDPR Data Protection Rights</h2>
        <p className="mb-2 text-md">You are entitled to the following rights:</p>
        <ul className="list-disc ml-6 space-y-1"  data-appear="fade-up" data-unload="fade-up">
          <li>Access – Request copies of your personal data</li>
          <li>Rectification – Request correction of inaccurate/incomplete info</li>
          <li>Erasure – Request we erase your data under certain conditions</li>
          <li>Restrict processing – Request restriction of processing</li>
          <li>Object – Object to our processing of your data</li>
          <li>Data portability – Request data transfer to another organization or you</li>
        </ul>
        <p className="mt-2"  data-appear="fade-up" data-unload="fade-up">
          We respond within one month. To exercise your rights, contact us.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Children's Information</h2>
        <p className="mb-2 text-md"  data-appear="fade-up" data-unload="fade-up">
          We prioritize protecting children online. We encourage parents to observe and guide their children's internet activity.
        </p>
        <p  data-appear="fade-up" data-unload="fade-up">
          Scale Us does not knowingly collect data from children under 13. If you believe your child provided such data, contact us and we will remove it promptly.
        </p>
      </div>

      <div className="mb-8"  data-appear="fade-up" data-unload="fade-up">
        <h2 className="text-3xl font-semibold mb-2 text-md">Website Development Partner</h2>
        <p  data-appear="fade-up" data-unload="fade-up">
          Website development and tech partner: <strong >Scale Us Technologies LLP</strong>.
        </p>
      </div>

      <footer className="text-sm text-gray-500 mt-12"  data-appear="fade-up" data-unload="fade-up">
        <p>If you have any questions about this policy, contact us at <Link href="mailto:contact@scaleus.com" className="text-purple-600 underline">contact@scaleus.com</a>.</p>
      </footer>
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