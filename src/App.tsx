import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FlowBackground from "./components/FlowBackground";
import { TiltCard } from "./components/ui/TiltCard";
import HoverFooter from "@/components/ui/demo";
import "./styles.css";

type SiteCase = {
  name: string;
  tab: string;
  image: string;
  description: string;
};

const brand = "crystalign.aligners";
const demoContact = {
  phone: "+1 (555) 010-0199",
  email: "hello@crystalign.example",
  address: "Demo Clinic, 100 Smile Avenue, Sample City, TN 600001.",
};
const siteNav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Treatable Cases", href: "/treatable-cases/" },
  { label: "Aligner Accessories", href: "/#products" },
  { label: "Contact Us", href: "/contact-us/" },
];

const cases: SiteCase[] = [
  {
    name: "Crowding",
    tab: "CROWDING",
    image: "crowding_teeth-removebg-preview.png",
    description:
      "Crowding is a common dental issue that can result in crooked teeth. These malaligned teeth can be difficult to clean properly and tend to trap food and plaque, increasing the risk of tooth decay and gum disease. Over time, crowding can also cause uneven pressure, leading to premature tooth wear and fractures. This condition can also affect overall oral hygiene and confidence. Fortunately, crowding and malaligned can be effectively treated with clear aligners, offering a safer and more aesthetic alternative to traditional braces.",
  },
  {
    name: "Teeth Spacing",
    tab: "TEETH SPACING",
    image: "teeth_spacing-removebg-preview.png",
    description:
      "Teeth spacing refers to noticeable gaps between the teeth, often caused by missing teeth, gum disease, or naturally small teeth. Malaligned, rotated, or angled teeth can also create unwanted spaces. These gaps can lead to problems with biting, speech, and eating certain foods. A spaced smile can also affect appearance and self-esteem. Clear aligners offer an advanced, non-invasive solution to close these gaps gradually and precisely. With the help of aligners, your smile can be more even, functional, and visually appealing.",
  },
  {
    name: "Overjet",
    tab: "OVERJET",
    image:
      "20260407_1854_Image_Generation_simple_compose_01knm1tvp7fb0vskphmfk6c22r-removebg-preview-1-e1775582386687.png",
    description:
      "Overjet, often called “buck teeth,” occurs when the upper front teeth stick out significantly beyond the lower teeth. It may result from genetics, thumb-sucking, or prolonged use of pacifiers in childhood. Severe overjet may lead to jaw pain and faster tooth wear, while even mild cases can affect self-confidence. This misalignment can also cause speech or eating difficulties. Clear aligners can effectively correct overjet by gradually shifting the teeth into a more balanced, natural bite, restoring both function and aesthetics to your smile.",
  },
  {
    name: "Crossbite",
    tab: "CROSSBITE",
    image:
      "20260411_1622_Image_Generation_remix_01kny2pw6de4rrtkthyzcdchq8__2_-removebg-preview.png",
    description:
      "Crossbite happens when the upper and lower teeth do not align properly, causing some lower teeth to sit outside the upper ones. It can affect both front and back teeth and is often the result of jaw malalignment or improper tooth positioning. If untreated, crossbites can lead to tooth wear, gum issues, and jaw discomfort. They may also impact chewing efficiency and facial symmetry. Clear aligners can correct tooth-related crossbites effectively. For jaw-related causes, your dentist may recommend additional treatment before starting aligners.",
  },
  {
    name: "Open Bite",
    tab: "OPENBITE",
    image: "Open_Bite-removebg-preview.png",
    description:
      "An open bite is when the upper and lower teeth do not touch when the mouth is closed, leaving a visible gap. This condition can be caused by habits like thumb-sucking, tongue-thrusting, or abnormal jaw growth. It often results in difficulty with biting food, speech issues, and visible changes in facial appearance. The teeth may protrude outward, affecting overall function and confidence. Clear aligners are a great solution to gently reposition the teeth, helping close the bite and restore proper alignment and aesthetics.",
  },
];

const steps = [
  {
    title: "3D Scan",
    image: "orthopantomogram.png",
    description:
      "We begin with an advanced 3D dental scan to analyse your teeth alignment, securely record your data, and preview your future smile transformation.",
  },
  {
    title: "X-rays",
    image: "dental-x-ray.png",
    description:
      "Detailed X-rays help us evaluate tooth roots and jaw positioning, ensuring a safe, accurate, and personalised treatment plan.",
  },
  {
    title: "CAD Image",
    image: "dental.png",
    description:
      "Using high-precision intraoral scanners, we create detailed 3D digital images for better accuracy, comfort, and planning efficiency.",
  },
  {
    title: "Customized",
    image: "aligner.png",
    description:
      "Every smile is unique. We design a personalised aligner plan tailored to your dental structure, lifestyle & desired results.",
  },
  {
    title: "3D Printing",
    image: "happy-tooth.png",
    description:
      "Your smile journey is visualised with 3D printed models, allowing you to see the expected results before starting treatment.",
  },
  {
    title: "Clear Aligners",
    image: "clear-aligners.svg",
    description:
      "Your custom aligners are crafted using advanced 3D technology to ensure a precise fit, comfort, and effective tooth movement.",
  },
];

function image(name: string) {
  return "/images/" + name;
}

function Header() {
  return (
    <>
      <div className="topline">
        <div className="wrap topinner">
          <span>{demoContact.phone}</span>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap nav-row">
          <a className="logo-link" href="/" aria-label={brand + " home"}>
            <img src={image("crystalign-logo.svg")} alt="CRYSTALIGN CLEAR ALIGNERS" />
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            {siteNav.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}

function FooterCta() {
  return (
    <section className="footer-cta">
      <div className="wrap footer-cta-inner">
        <div>
          <span className="eyebrow">make your life more precious</span>
          <h2>Take the First Step Towards a Healthier Smile</h2>
          <p>
            Start your smile transformation with expert-guided clear aligner
            solutions — simple, precise, and tailored just for you.
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <>
      <FooterCta />
      <HoverFooter />
    </>
  );
}

function PageHero({ title }: { title: string }) {
  const bannerRef = useRef<HTMLElement>(null);
  const dentalImages = [
    { src: image("dental.png"), alt: "Digital dental model", className: "banner-xray" },
    { src: image("tooth.png"), alt: "Tooth alignment", className: "banner-tooth" },
    { src: image("orthopantomogram.png"), alt: "Digital dental scan", className: "banner-scan" },
    { src: image("aligner.png"), alt: "Clear dental aligner", className: "banner-aligner" },
    { src: image("happy-tooth.png"), alt: "Healthy smile", className: "banner-smile" },
    { src: image("dental-x-ray.png"), alt: "Dental X-ray", className: "banner-xray banner-left-xray" },
    { src: image("tooth.png"), alt: "Dental care", className: "banner-tooth banner-left-tooth" },
    { src: image("aligner.png"), alt: "Clear aligner treatment", className: "banner-aligner banner-left-aligner" },
  ];

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const icons = Array.from(banner.querySelectorAll<HTMLElement>(".banner-floats img"));
    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      const bounds = banner.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => icons.forEach((icon, index) => {
        const depth = 7 + (index % 3) * 3;
        icon.style.setProperty("--icon-x", `${-x * depth}px`);
        icon.style.setProperty("--icon-y", `${-y * depth}px`);
      }));
    };
    const resetPointer = () => icons.forEach((icon) => {
      icon.style.setProperty("--icon-x", "0px");
      icon.style.setProperty("--icon-y", "0px");
    });
    banner.addEventListener("pointermove", handlePointerMove);
    banner.addEventListener("pointerleave", resetPointer);
    return () => {
      window.cancelAnimationFrame(frame);
      banner.removeEventListener("pointermove", handlePointerMove);
      banner.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <section className="page-hero floating-banner" ref={bannerRef}>
      <svg className="banner-swirl banner-swirl-one" viewBox="0 0 600 600" aria-hidden="true"><path d="M515 181C378 52 129 136 51 294S126 600 126 600" /></svg>
      <svg className="banner-swirl banner-swirl-two" viewBox="0 0 700 700" aria-hidden="true"><path d="M27 528C194 690 480 637 594 452S544 2 544 2" /></svg>
      <div className="banner-floats" aria-hidden="true">
        {dentalImages.map((item) => <img key={item.alt} className={item.className} src={item.src} alt="" />)}
      </div>
      <div className="wrap banner-content">
        <span className="eyebrow">your smile starts here</span>
        <h1>{title}</h1>
        <p className="banner-breadcrumb"><a href="/">Home</a><span>›</span>{title}</p>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading center">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{children}</h2>
    </div>
  );
}

function HomePage() {
  const [activeCase, setActiveCase] = useState(0);
  const selectedCase = cases[activeCase];

  return (
    <>
      <Header />
      <main className="home-main">
        <section className="hero">
          <div className="hero-orb orb-one" />
          <FlowBackground />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><i />Your smile starts here</span>
              <h1>The Smart Way to a <em>Perfect Smile</em></h1>
              <p>
                Straighten your teeth with nearly invisible, dentist-supervised
                clear aligners, custom-designed to match your lifestyle and
                comfort.
              </p>
              <a href="/contact-us/" className="button">
                Book Appointment <span>↗</span>
              </a>
              <a href="#about" className="text-link">
                explore more <span>↓</span>
              </a>
            </div>
            <div className="hero-visual">
              <img
                className="hero-person"
                src={image("hero-woman-aligner.png")}
                alt="Smiling woman holding a clear dental aligner"
                width={1145}
                height={1374}
                fetchPriority="high"
              />
              <div className="hero-decoration" aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M24 3v10m0 22v10M3 24h10m22 0h10M8.5 8.5l7 7m17 17 7 7m0-31-7 7m-17 17-7 7" /></svg></div>
            </div>
          </div>
          <div className="wrap benefit-strip">
            {[
              ["tooth.png", "Advanced Orthodontic Solution", "1"],
              ["thumbs-up.png", "Comfortable, Smooth & Easy to Maintain", "2"],
              ["happy-tooth.png", "Removable & Lifestyle-Friendly", "3"],
              ["rating.png", "Fewer Clinic Visits, More Convenience", "3"],
            ].map(([icon, title, number]) => (
              <article className="benefit" key={title}>
                <img src={image(icon)} alt="" />
                <b>{title}</b>
                <small>{number}</small>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="wrap about-grid">
            <div className="about-visual">
              <img
                className="about-main"
                src={image("crowding_teeth-removebg-preview.png")}
                alt="Crowded teeth"
              />
              <div className="about-detail">
                <img src={image("tooth.png")} alt="" />
                <span><b>Quality of Care Services</b><small>Standards of Treatment</small></span>
              </div>
              <div className="about-inset"><img src={image("dental-x-ray.png")} alt="Dental X-ray" /></div>
            </div>
            <div className="section-copy">
              <span className="eyebrow">about us</span>
              <h2>Your Journey to a <em>Confident Smile</em> Begins Here</h2>
              <p>
                Clear aligners have transformed modern orthodontics, delivering
                the same powerful results as traditional braces without
                discomfort or visibility concerns. At {brand}, we combine
                advanced dental technology with proven clinical expertise to
                create aligners that are precise, comfortable, and affordable.
                No wires. No brackets. Just a seamless path to a confident smile.
              </p>
              <div className="quality-points">
                <h4>Quality of Care Services</h4>
                <h4>Standards of Treatment</h4>
              </div>
              <ul className="checks">
                <li>Hassle-Free: No metal wires, no discomfort</li>
                <li>Invisible: Transparent and discreet for daily wear</li>
                <li>Hygienic & Safe: Easy to clean and maintain oral health</li>
                <li>Comfortable Fit: Soft, custom-made for all-day use</li>
              </ul>
              <div className="stats-row">
                <div><strong>0+</strong><small>Years Experiance</small></div>
                <div><strong>0K+</strong><small>Happy Smiles</small></div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="section steps-section">
          <div className="wrap">
            <SectionHeading eyebrow="How It Works">
              6 Simple Steps To Your <em>Perfect Smile</em>
            </SectionHeading>
            <div className="steps-grid">
              {steps.map((step, index) => (
                <TiltCard key={step.title} className="step-tilt">
                  <article className="step-card">
                    <span className="step-label">Step {index + 1}</span>
                    <img src={image(step.image)} alt="" />
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section cases-section">
          <div className="wrap">
            <SectionHeading eyebrow="Treatable Cases">
              Aligned Solutions For Every Smile
            </SectionHeading>
            <div className="case-tabs" role="tablist" aria-label="Treatable cases">
              {cases.map((item, index) => (
                <button
                  key={item.tab}
                  type="button"
                  role="tab"
                  aria-selected={activeCase === index}
                  onClick={() => setActiveCase(index)}
                >
                  <img src={image(item.image)} alt="" />
                  <span>{item.tab}</span>
                </button>
              ))}
            </div>
            <div className="case-content" role="tabpanel">
              <div className="case-copy">
                <p>{selectedCase.description}</p>
              </div>
              <img src={image(selectedCase.image)} alt={selectedCase.name} />
            </div>
          </div>
        </section>

        <section id="results" className="section results-section">
          <div className="wrap">
            <SectionHeading eyebrow="Real People, Real Smiles">
              Before &amp; After Results With {brand}
            </SectionHeading>
            <div className="results-grid">
              {[
                "ChatGPT-Image-Apr-7-2026-08_22_28-AM.webp",
                "ChatGPT-Image-Apr-7-2026-08_21_15-AM.webp",
                "ChatGPT-Image-Apr-7-2026-08_23_19-AM.webp",
              ].map((file) => (
                <img src={image(file)} alt="Before and after aligner results" key={file} />
              ))}
            </div>
            <div className="slider-dots" aria-hidden="true">• &nbsp; • &nbsp; •</div>
          </div>
        </section>

        <section id="why" className="section why-section">
          <div className="wrap why-grid">
            <div className="why-copy">
              <span className="eyebrow">Why Choose {brand}</span>
              <h2>The Smile Experts You Can Trust</h2>
              <div className="why-item">
                <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M12 2v4m0 12v4M2 12h4m12 0h4M5 5l3 3m8 8 3 3m0-14-3 3M8 16l-3 3" /></svg></span><div><h3>Advanced Technology &amp; Precision Fit</h3><p>We use cutting-edge dental technology and premium materials to deliver highly accurate, customised aligners.</p></div>
              </div>
              <div className="why-item">
                <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></svg></span><div><h3>Visualise Before You Begin</h3><p>With our 3D smile preview, you can see your results even before starting your treatment.</p></div>
              </div>
              <div className="why-item">
                <span aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M7 3c-2 0-4 1.7-4 4.4 0 2.8 1.3 4.5 2.2 6.7C6.5 17.4 6.2 21 8.6 21c1.6 0 1.3-3.4 3.4-3.4s1.8 3.4 3.4 3.4c2.4 0 2.1-3.6 3.4-6.9C19.7 11.9 21 10.2 21 7.4 21 4.7 19 3 17 3c-1.9 0-3.2 1.1-5 1.1S8.9 3 7 3Z" /></svg></span><div><h3>Clarity, Comfort &amp; Durability</h3><p>{brand} aligners offer long-lasting transparency, superior comfort, and resistance to discolouration.</p></div>
              </div>
              <div className="why-metrics">
                <div><strong>1%</strong><small>Satisfaction Rate</small></div>
                <p>Precision-driven results. Trusted by thousands of smiles.</p>
              </div>
            </div>
            <div className="why-visual">
              <div className="metric-bubble"><strong>1K+</strong><span>Aligners Delivered</span></div>
              <img src={image("how_do_aligners__1_-removebg-preview.png")} alt="Clear aligner tray" />
              <div className="why-inset"><img src={image("aligner.png")} alt="Clear aligner" /></div>
              <div className="dot-pattern" aria-hidden="true" />
            </div>
          </div>
        </section>

        <section id="products" className="section products-section">
          <div className="wrap">
            <SectionHeading eyebrow="Our Products">
              Explore Our Clear Aligner Range
            </SectionHeading>
            <div className="products-grid">
              {[
                ["Precisalign", "Advanced clear aligners designed for precision, comfort, and confident results."],
                ["Precisalign Ultra", "Enhanced comfort aligners are made for everyday ease and consistent tooth movement."],
                ["Precisalign Flex", "Next-generation aligners offering superior flexibility, clarity, and long-term comfort."],
              ].map(([name, description]) => (
                <article className="product-card" key={name}>
                  <img src={image("how_do_aligners__1_-removebg-preview.png")} alt="" />
                  <h3>{name.replace("Precisalign", brand)}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section expo-section">
          <div className="wrap">
            <SectionHeading eyebrow="Dental Evolution">
              Glimpse Of EXPODENT - 2025
            </SectionHeading>
            <div className="expo-gallery">
              {[
                ["crowding_teeth-removebg-preview.png", "Crowded teeth"],
                ["teeth_spacing-removebg-preview.png", "Teeth spacing"],
                ["Open_Bite-removebg-preview.png", "Open bite"],
              ].map(([file, description]) => (
                <img src={image(file)} alt={description} key={file} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function AboutPage() {
  const vision =
    "At " + brand + ", our vision is to spread confident, healthy smiles across the world by making advanced orthodontic care accessible, affordable, and effective for everyone. We envision a future where every individual, regardless of location or background, has the opportunity to achieve a smile they truly deserve through modern, reliable, and patient-friendly solutions. We are committed to leveraging innovation and technology to enhance treatment outcomes, empower dental professionals with the right tools and support, and uphold the highest standards of ethics, transparency, and clinical excellence.";
  const mission =
    "At " + brand + ", our mission is to redefine orthodontic treatment through tech-driven, patient-centric, and affordable solutions. We strive to deliver high-quality, customised clear aligner treatments that ensure comfort, precision, and consistent results for every patient while supporting dental professionals with advanced aligners, training, and continuous guidance. We focus on expanding access to modern orthodontic care across cities, towns, and underserved regions, while continuously innovating to improve patient experience and maintaining the highest standards of ethics, transparency, and clinical excellence.";

  return (
    <>
      <Header />
      <main>
        <PageHero title="About Us" />
        <section className="section about-page">
          <div className="wrap about-grid">
            <div className="about-visual"><img className="about-main" src={image("crowding_teeth-removebg-preview.png")} alt="Clear aligner treatment" /></div>
            <div className="section-copy">
              <span className="eyebrow">About {brand}</span>
              <h2>Precision. Comfort. <em>Confidence.</em></h2>
              <p>At {brand}, we believe a confident smile can transform not just appearance but overall well-being and self-expression. Our mission is clear — to make advanced clear aligner treatment accessible, comfortable, and nearly invisible for everyone. We specialise in modern, clear aligner solutions that straighten teeth without the discomfort and visibility of traditional braces. By combining advanced digital dentistry, expert orthodontic supervision, and personalised treatment planning, we deliver results that are precise, effective, and seamlessly fit into your lifestyle.</p>
              <h3>The Clear Way to a Perfect Smile</h3>
              <div className="stats-row"><div><strong>10 K+</strong><small>Happy Clients</small></div><div><strong>100K+</strong><small>Aligners Delivered</small></div><div><strong>100%</strong><small>Satisfaction Rate</small></div><div><strong>5+</strong><small>Years Of Experience</small></div></div>
            </div>
          </div>
        </section>
        <section className="section philosophy soft">
          <div className="wrap">
            <SectionHeading eyebrow="Our Philosophy">A Smarter Approach to <em>Modern Orthodontics</em></SectionHeading>
            <p className="center">We are committed to creating healthy, confident smiles through precision-driven care and personalised attention. Every treatment is powered by advanced technology to ensure accuracy, predictability, and long-lasting results. Our approach simplifies your smile journey, making it comfortable, efficient, and stress-free.</p>
            <div className="steps-grid">
              <article><h3>Patient-first approach</h3><p>Every aligner treatment is customised based on your unique dental structure, goals, and daily lifestyle.</p></article>
              <article><h3>Transparent Results</h3><p>Visualise your smile transformation in advance with 3D preview technology before starting your treatment.</p></article>
              <article><h3>Technology-driven care</h3><p>We use advanced digital tools to ensure precise planning, consistent progress, and reliable outcomes.</p></article>
            </div>
          </div>
        </section>
        <section className="section"><div className="wrap"><SectionHeading eyebrow="Our Mission & Vision">Driven by Purpose and <em>Innovation</em></SectionHeading><div className="mission-grid"><article><span className="eyebrow">Our Vision</span><p>{vision}</p></article><article><span className="eyebrow">Our Mission</span><p>{mission}</p></article></div></div></section>
        <section className="section soft"><div className="wrap"><SectionHeading eyebrow="What Makes Us Different">Smarter comfortable <em>smile solutions</em></SectionHeading><div className="steps-grid"><article><h3>Invisible</h3><p>Clear aligners designed to be nearly invisible, allowing you to smile confidently throughout your treatment.</p></article><article><h3>Comfort-Focused Design</h3><p>Custom-fit aligners crafted for a smooth, irritation-free experience and all-day comfort.</p></article><article><h3>Removable &amp; Hygienic</h3><p>Easily removable aligners that simplify cleaning, helping maintain better oral hygiene during treatment.</p></article></div></div></section>
      </main>
      <Footer />
    </>
  );
}

function CasesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Treatable Cases" />
        <section className="section cases-page">
          <div className="wrap">
            {cases.map((item, index) => (
              <article className={"case-detail " + (index % 2 ? "reverse" : "")} id={"case-" + index} key={item.name}>
                <img src={image(item.image)} alt={item.name} />
                <div><span className="eyebrow">Treatable Cases</span><h2>{item.name}</h2><p>{item.description}</p><a className="text-link" href="/contact-us/">Book Appointment <span>↗</span></a></div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BusinessCard() {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const moveCard = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !cardRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    cardRef.current.style.setProperty("--card-tilt-x", `${-y * 5}deg`);
    cardRef.current.style.setProperty("--card-tilt-y", `${x * 7}deg`);
  };

  const resetCard = () => {
    cardRef.current?.style.setProperty("--card-tilt-x", "0deg");
    cardRef.current?.style.setProperty("--card-tilt-y", "0deg");
  };

  return (
    <div
      className="business-card-scene"
      ref={cardRef}
      onPointerMove={moveCard}
      onPointerLeave={resetCard}
    >
      <div className={`business-card${flipped ? " is-flipped" : ""}`}>
        <div className="business-card-face business-card-front" inert={flipped}>
          <span className="business-card-kicker">YOUR SMILE STARTS HERE</span>
          <strong className="business-card-brand">crystalign<span>.</span></strong>
          <span className="business-card-subtitle">CLEAR ALIGNERS</span>
          <p>A clearer path to your best smile</p>
          <button type="button" className="business-card-flip" onClick={() => setFlipped(true)}>View contact details <span>↗</span></button>
          <span className="business-card-mark" aria-hidden="true"><img src={image("tooth.png")} alt="" /></span>
        </div>
        <div className="business-card-face business-card-back" inert={!flipped}>
          <div className="business-card-back-head"><strong>crystalign.aligners</strong><span>Contact</span></div>
          <span className="business-card-contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5h3l1.5 4-2 1.7a15 15 0 0 0 5.7 5.7l1.7-2 4 1.5v3c0 1.1-.9 2-2 2C10.4 19.4 4.6 13.6 4.6 5.5c0-1.1.9-2 2-2Z" /></svg>{demoContact.phone}</span>
          <span className="business-card-contact"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>{demoContact.email}</span>
          <span className="business-card-contact"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>{demoContact.address}</span>
          <button type="button" className="business-card-flip" onClick={() => setFlipped(false)}>Back to brand side <span>↗</span></button>
        </div>
      </div>
      <p className="business-card-hint">Move your cursor to tilt · use the button to flip</p>
    </div>
  );
}

function SmileFormIllustration() {
  const [isBlinking, setIsBlinking] = useState(false);
  const illustrationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let blinkTimeout = 0;
    const interval = window.setInterval(() => {
      setIsBlinking(true);
      window.clearTimeout(blinkTimeout);
      blinkTimeout = window.setTimeout(() => setIsBlinking(false), 180);
    }, 3800);
    return () => {
      window.clearInterval(interval);
      window.clearTimeout(blinkTimeout);
    };
  }, []);

  const trackPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch" || !illustrationRef.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 6;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 3;
    illustrationRef.current.style.setProperty("--pupil-x", `${x}px`);
    illustrationRef.current.style.setProperty("--pupil-y", `${y}px`);
  };

  const resetPointer = () => {
    illustrationRef.current?.style.setProperty("--pupil-x", "0px");
    illustrationRef.current?.style.setProperty("--pupil-y", "0px");
  };

  return (
    <div
      className={`smile-form-illustration${isBlinking ? " is-blinking" : ""}`}
      ref={illustrationRef}
      onPointerMove={trackPointer}
      onPointerLeave={resetPointer}
      aria-hidden="true"
    >
      <span className="smile-orbit" />
      <span className="smile-eye smile-eye-left"><i /></span>
      <span className="smile-eye smile-eye-right"><i /></span>
      <svg className="smile-mouth" viewBox="0 0 72 28"><path d="M7 5c7 16 18 20 29 20S58 21 65 5" /></svg>
      <svg className="smile-sparkle smile-sparkle-one" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>
      <svg className="smile-sparkle smile-sparkle-two" viewBox="0 0 24 24"><path d="M12 2v20M2 12h20M5 5l14 14M19 5 5 19" /></svg>
    </div>
  );
}

function ContactPage() {
  const [formMessage, setFormMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const submitInquiry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    setIsSending(true);
    setFormMessage("");
    try {
      const formData = new FormData(formElement);
      const name = String(formData.get("name") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const email = String(formData.get("email") || "").trim();
      await emailjs.send(
        "service_o0gtxqc",
        "template_0gd1ezc",
        {
          name,
          phone,
          email,
          user_name: name,
          user_phone: phone,
          user_email: email,
          from_name: name,
          from_email: email,
          reply_to: email,
        },
        { publicKey: "7jlnugNTa693uCIbD" },
      );
      setIsSent(true);
      formElement.reset();
    } catch {
      setFormMessage("We couldn’t send your enquiry right now. Please try again or contact us by email.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Header />
      <main>
        <PageHero title="Contact Us" />
        <section className="section contact-section">
          <div className="wrap">
            <SectionHeading eyebrow="Have any thing to ask ?">We are always <em>ready</em></SectionHeading>
            <p className="center">Our team is here to help you with any questions or guidance you need.</p>
            <div className="contact-tools">
              <BusinessCard />
              {isSent ? (
                <div className="contact-form contact-success" role="status" aria-live="polite">
                  <SmileFormIllustration />
                  <h3>Thank you!</h3>
                  <p>Your enquiry has been sent. We’ll be in touch soon.</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={submitInquiry}>
                  <span className="eyebrow">Send an enquiry</span>
                  <h3>Tell us how to reach you</h3>
                  <SmileFormIllustration />
                  <label htmlFor="contact-name">Name</label>
                  <input id="contact-name" name="name" autoComplete="name" placeholder="Your name" required />
                  <label htmlFor="contact-phone">Number</label>
                  <input id="contact-phone" name="phone" type="tel" autoComplete="tel" placeholder="Your phone number" required />
                  <label htmlFor="contact-email">Email</label>
                  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                  <button className="button" type="submit" disabled={isSending}>{isSending ? "Sending…" : "Send enquiry"} {!isSending && <span>↗</span>}</button>
                  <p className="contact-form-note" role="status" aria-live="polite">{formMessage || "We’ll use these details to follow up about your smile."}</p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function BlogPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero title="Blog" />
        <section className="section"><div className="wrap"><SectionHeading eyebrow="blog & article">read our latest blog &amp; article</SectionHeading></div></section>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  if (path === "/about-us") return <AboutPage />;
  if (path === "/treatable-cases") return <CasesPage />;
  if (path === "/contact-us") return <ContactPage />;
  if (path === "/blog") return <BlogPage />;
  return <HomePage />;
}
