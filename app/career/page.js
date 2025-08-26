// app/career/page.js
"use client";

import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import '../../public/css/config.css';
import '../../public/css/libs.css';
import '../../public/css/style.css';
import '../../public/css/responsive.css';
import Header from '@/components/Header';
import ".././globals.css";
import Footer from '@/components/Footer';
export default function Career() {
  // Form Submission
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    techStack: "",
    message: "",
    resume: null,
  });

   const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };


    const handleSubmit = async(e) => {
      console.log("submit")
      e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
      console.log("try")
      const res = await fetch("/api/send-email", {
        method: "POST",
        body: data,
      });
      console.log(res)
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      console.error(err);
    }
    };

console.log(formData)
  // Right-Click Protection
  useEffect(() => {
    let timeoutId = null;

    const handleContextMenu = (e) => {
      e.preventDefault();
      const rcpWrap = document.querySelector('.bringer-rcp-wrap');
      if (rcpWrap) {
        document.body.classList.add('rcp-show');
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          document.body.classList.remove('rcp-show');
        }, 2000);
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Careers - Scale Us</title>
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

      <main id="bringer-main" data-unload="fade-down">
        <div className="stg-container">
          <section className="backlight-bottom">
            <div className="stg-row stg-bottom-gap-l">
              <div className="stg-col-8">
                <h1
                  className="stg-bottom-gap"
                  data-split-appear="fade-up"
                  data-split-unload="fade-up"
                >
                  🚀 Ignite Your Future with Scale Us
                </h1>
              </div>
              <div className="stg-col-4"></div>
            </div>
          </section>

          <section id="testimonials-section" className="backlight-top">
            <div className="bringer-expand-on-scroll">
              <img
                src="/img/inner-pages/about-us.webp"
                alt="Testimonials"
                data-unload="fade-up"
                loading="lazy"
              />
            </div>
          </section>

          <section>
            <div className="align-center stg-bottom-gap-l">
              <h2 data-split-appear="fade-up" data-unload="fade-up">Job Openings</h2>
              <p
                className="bringer-large-text"
                data-appear="fade-up"
                data-delay="100"
                data-unload="fade-up"
              >
                Everyone starts from somewhere, seeks development, and strives for new heights #CAREERS 🚀
              </p>
            </div>

            <div
              className="bringer-grid-2cols"
              data-stagger-appear="zoom-in"
              data-delay="150"
              data-unload="fade-up"
            >
              <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>PHP / Laravel Developer<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 2 to 8 Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>React Native<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 2 to 8 Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>UI/UX - Figma<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 1 to 4+ Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>Social Media Marketing<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 1 to 4+ Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>

               <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>IT Sales<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 1 to 4+ Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>
              <a href="https://www.linkedin.com/company/scale-us-technologies/jobs/" target="_blank" rel="noopener noreferrer">
                <div className="bringer-icon-box bringer-block">
                  <h4>Flutter Developer<span className="bringer-accent">.</span></h4>
                  <p className="bringer-large-text">
                    Experience: 1 to 4+ Years <br />
                    Location: Remote / Work From Home / Hybrid <br />
                    Salary: As per industry standard / Negotiable
                  </p>
                </div>
              </a>
            </div>
          </section>

          <section className="backlight-top is-fullwidth" data-unload="fade-down">
            <div className="stg-row stg-valign-middle stg-cta-with-image stg-tp-column-reverse">
              <div className="stg-col-5" data-unload="fade-left">
                <div
                  className="bringer-offset-image"
                  data-bg-src="/img/cta/contact-section-bg.jpg"
                  data-appear="fade-up"
                  data-threshold="0.25"
                ></div>
              <form
onSubmit={handleSubmit} 
  className="bringer-contact-form bringer-block"
  data-fill-error="Please, fill out the contact form."
>
  <div className="bringer-form-content">
    <label htmlFor="name">Your name</label>
    <input type="text" id="name" name="name" placeholder="Your Name" onChange={handleChange} required />

    <label htmlFor="email">Your email:</label>
    <input type="email" id="email" name="email" placeholder="Your Email" onChange={handleChange} required />

    <label htmlFor="techstack" className="block mb-2 text-md">Select Tech Stack</label>
    <select id="techstack"         name="techStack"
        value={formData.techStack}
        onChange={handleChange}
 className="my-3 border border-gray-300 rounded-lg block w-full p-2.5">
      <option value="php-laravel">PHP / Laravel</option>
      <option value="react-native">React Native</option>
      <option value="ui-ux">UI/UX</option>
      <option value="sales">IT Sales</option>
      <option value="flutter">Flutter</option>
      <option value="marketing">Social Media Marketing</option>
    </select>

    <label htmlFor="resume">Upload Resume:</label>
    <input className="text-sm border rounded-lg cursor-pointer" id="resume"   type="file"
        name="resume"
        accept=".pdf,.doc,.docx"
        onChange={handleChange}
        
        required />
    <p className="text-[12px] mt-[-14px] text-gray-500">PDF File Only (MAX 5MB).</p>

    <label htmlFor="message">Your message:</label>
    <textarea id="message" name="message" onChange={handleChange} placeholder="Your Message" required></textarea>

    <button type="submit">Send Message</button>
  </div>
</form>

              </div>
              <div className="stg-col-6 stg-offset-1" data-unload="fade-right">
                <div className="bringer-cta-form-content">
                  <div
                    className="bringer-cta-form-title"
                    data-split-appear="fade-up"
                    data-split-delay="100"
                    data-split-by="line"
                  >
                    Let’s discuss your next creative project.
                  </div>
                  <div className="bringer-cta-text">
                    <div className="stg-row stg-valign-middle">
                      <div
                        className="stg-col-2 stg-offset-2 stg-tp-col-1 stg-tp-offset-3 stg-m-col-1 stg-m-offset-2"
                        data-appear="fade-right"
                      >
                        <i className="bringer-cta-icon"></i>
                      </div>
                      <div
                        className="stg-col-8 stg-tp-col-7 stg-m-col-8 stg-m-offset-1"
                        data-appear="fade-left"
                      >
                        <p className="bringer-large-text">
                          We help businesses and professionals showcase their work with tailored digital solutions, enhancing their online presence and impact.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="bringer-cta-counters bringer-grid-3cols bringer-m-grid-3cols"
                    data-stagger-appear="fade-up"
                    data-stagger-delay="100"
                  >
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number">420</div>
                      <div className="bringer-counter-label">Projects Done</div>
                    </div>
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number" data-suffix="+">150</div>
                      <div className="bringer-counter-label">Happy Clients</div>
                    </div>
                    <div className="bringer-counter bringer-small-counter" data-delay="3000">
                      <div className="bringer-counter-number" data-suffix="+">5</div>
                      <div className="bringer-counter-label">Years in Work</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

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