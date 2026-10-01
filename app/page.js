'use client';

import { useEffect, useState } from 'react';

const A = '/assets/';

const services = [
  { title: 'Building Maintenance & Construction', img: 'img_08.jpeg', items: ['Electricians / Helper', 'Plumbers / Helper', 'Welder - Electric & Gas', 'Steel Fixers / Foremen', 'Pipe Fitters / Helper', 'Carpenters', 'Electronic Technicians / Helper', 'Painters / Helper', 'Scaffolder / Helper', 'Mason - Foremen', 'Mason - Construction Helpers', 'Mason - Brick Layers', 'Mason - Tile / Marble Fitters'] },
  { title: 'Security Guards', img: 'img_10.jpeg', items: ['Security Officer', 'Security Supervisor', 'Ex-British Gurkha Army', 'Ex-Indian Gurkha Army', 'Ex-Nepalese Army', 'Ex-Nepal Police', 'Civil Security Guard', 'Body Guard', 'Watch Man & many more.'] },
  { title: 'Oil & Gas', img: 'img_11.jpeg', items: ['Piping Workers', 'HSE Workers', 'Instrumental Worker', 'Electrical Workers', 'Off Shore Workers', 'Engineers', 'Project Managers', 'Service Workers', 'Mechanical Workers'] },
  { title: 'Engineering', img: 'img_12.jpeg', items: ['Electrical Engineer', 'Mechanical Engineer', 'Electronic Engineer', 'Civil Engineer'] },
  { title: 'Agricultural & Farming Group', img: 'img_13.jpeg', items: ['Engineer Landscaping', 'Engineer Irrigation', 'Supervisors', 'Foremen', 'Gardeners / Farmers'] },
  { title: 'Office Personnel Management', img: 'img_14.jpeg', items: ['Office Manager / Asst. Manager', 'Manager - Marketing, Sales, Admin.', 'Accountants, Cashiers', 'Secretaries, Storekeeper, Purchasers', 'Clerks, Typists, Data Entry Operators'] },
  { title: 'Supermarket', img: 'img_15.jpeg', items: ['Salesman', 'Check out Cashier', 'Trolley Boys', 'Shelves / Rack Organizers', 'Cleaners / Stockers / Merchandiser'] },
  { title: 'Manufacturing', img: 'img_16.jpeg', items: ['Automotive', 'Petrochemical & Associated Products', 'Building Products', 'Consumer Products', 'Forestry Pulp & Paper', 'Machinery & Equipment', 'Pharmaceuticals', 'Industrial Products', 'Defense'] },
  { title: 'Vehicle / Heavy Equipment / Auto Mechanic', img: 'img_17.jpeg', items: ['Light Vehicle Drivers', 'Car / Van / Minibus Drivers', 'Heavy Equipment Operators', 'Truck / Lorry / Trailer / Forklift / Crane Operator', 'Motor / Grader / Dozer / Backhoe Operator', 'Roller Operators', 'Bulldozer Operator', 'Scrapper Operator', 'Auto Mechanic', 'Diesel Mechanics', 'Heavy Duty Mechanic', 'Wireless Technician', 'Denter / Painter'] },
  { title: 'Hotel & Catering Staff', img: 'img_18.jpeg', items: ['Manager and Asst. Manager', 'Public Relation Officer', 'Restaurant Captain', 'Cook (Continental, Chinese, Indian & Arabic)', 'Asst. Cooks', 'Waiters / Stewards', 'Fast Food Crew', 'Food and Beverage Controller', 'Food and Beverage Manager', 'Bakers / Barman', 'Kitchen Helpers', 'Dishwasher men', 'Laundrymen', 'Pressmen / Janitors', 'Housekeepers / Room makers', 'Office Boys / Tea Boys / Bell Boys'] },
  { title: 'Garments & Textile', img: 'img_20.jpeg', items: ['Production Managers', 'Supervisors', 'Pattern Makers', 'Cutting Masters', 'Tailors', 'Checkers, Helpers'] },
  { title: 'Air Conditioning & HVAC', img: 'img_21.jpeg', items: ['HVAC Engineers', 'HVAC Foreman', 'HVAC Supervisors', 'HVAC Technicians'] },
  { title: 'Hospital Staff Group', img: 'img_23.jpeg', items: ['Doctor: Gynecology (Surgeon); MRCOG', 'Doctor: Physician (General); MD', 'Doctor: Surgeon; MD', 'Doctor: Gynecology; MS', 'Doctor: Urology; MS', 'Doctor: Skin (Skin & UD); MD', 'Doctor: Nephrology; MD', 'RN Nurses (General Ward) - Diploma', 'RN Nurses (Midwifery Gynecology) - Diploma', 'RN Nurses (ICU) - Diploma', 'RN Nurses (Surgery / Operation Theatre)-Diploma', 'Asst. Nurses (Cleaners) Male - Diploma', 'Asst. Nurses (Cleaners) Female - Diploma', 'Technician Lab - Diploma', 'X-ray Technician - Diploma'] },
  { title: 'Information Technology', img: 'img_24.jpeg', items: ['Computer Engineer', 'System Administrator', 'Software Engineers', 'Programmers', 'System Analysts', 'Network Administrators', 'Data Entry Operators', 'Computer Operators', 'Computer Technicians', 'Database Operators', 'Data Entry Clerks'] },
];

const gallery = ['img_03.jpeg', 'img_04.jpeg', 'img_30.jpeg', 'img_31.jpeg', 'img_32.jpeg', 'img_33.jpeg', 'img_27.jpeg', 'img_70.jpeg', 'img_29.jpeg', 'img_28.jpeg'];
const clients = ['img_37.png', 'img_38.png', 'img_39.jpeg', 'img_41.png', 'img_43.png', 'img_44.png', 'img_45.png', 'img_46.jpeg', 'img_47.jpeg', 'img_48.jpeg', 'img_49.jpeg', 'img_50.jpeg', 'img_51.jpeg', 'img_52.png', 'img_53.jpeg', 'img_54.png', 'img_55.jpeg', 'img_56.jpeg', 'img_57.jpeg', 'img_58.jpeg', 'img_59.png', 'img_60.jpeg', 'img_61.jpeg', 'img_62.jpeg', 'img_63.png', 'img_64.png', 'img_65.jpeg', 'img_66.jpeg', 'img_67.jpeg', 'img_68.png', 'img_69.jpeg'];

const process = [
  { n: '01', title: 'Information Desk', img: 'img_25.jpeg', text: "Unique Future HR Consultancy offers its service for its clients information Services Desk from where any relevant information can be obtained. The main registration is also carried out and the data bank is maintained." },
  { n: '02', title: 'Communication', img: 'img_26.jpeg', text: 'Each and every department of Unique Future HR Consultancy is fully computerized and networked entirely in order to provide clients the best and prompt service.' },
  { n: '03', title: 'Selection Candidates', img: 'img_27.jpeg', text: 'The final interview for shortlisted candidates after pre screening can be conducted by the employer, representative, or by the company on their behalf. Selection is made purely on merit basis.' },
  { n: '04', title: 'Medical Check-up', img: 'img_28.jpeg', text: 'Only selected candidates will be sent to an authorized hospital or clinic for a full medical examination. Candidates fit medically and physically are eligible to sign the employment contract.' },
  { n: '05', title: 'Trade Test', img: 'img_29.jpeg', text: 'Practical trade tests can be taken at the technical training institute or at the office, where the selection committee observes workers directly according to their respective job.' },
  { n: '06', title: 'Orientation', img: 'img_06.jpeg', text: 'Prior to departure, orientation briefing is organized to make workers fully aware of the employment company, country laws, labour laws, immigration policy and responsibilities.' },
];

const offices = [
  { country: 'UAE OFFICE', city: 'Sharjah, UAE', color: 'uae', text: 'Al Besher & Sons Building, Near Rolla Bus Station\nSharjah, UAE | PO BOX 61163', phones: ['+971 556 465 473', '+971 558 494 280', '+971 509 489 580'] },
  { country: 'INDIA OFFICE', city: 'New Delhi, India', color: 'india', text: '301, 159-C, Sarai Julaina\nNew Delhi – 110025, India', phones: ['+91 9321324250', '+91 8700801374', '+91 8920007470', '+91 9818267464'] },
  { country: 'NEPAL OFFICE', city: 'Kathmandu, Nepal', color: 'nepal', text: 'Sinamangal - 9, Near Airport\nKathmandu, Nepal', phones: ['+977 9701611545', '+977 9716694704'] },
  { country: 'KENYA OFFICE', city: 'Nairobi, Kenya', color: 'kenya', text: 'KTDA - Farmers Building\nOpp. Kenya Cinema, Off: Moi Avenue\nNairobi, Kenya', phones: ['+254 723643212'] },
];

function Reveal({ children, className = '' }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-head reveal"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [lightbox, setLightbox] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    const handleResize = () => {
      if (window.innerWidth > 980) setMenu(false);
    };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', handleResize);
    const observer = new IntersectionObserver((entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', handleResize); observer.disconnect(); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = lightbox || (menu && window.innerWidth <= 980) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox, menu]);

  const go = (id) => { setMenu(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <main>
      <div className="progress-line" />
      <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-inner">
          <button className="brand" onClick={() => go('home')} aria-label="Unique Future home">
            <img src={`${A}logo.png`} alt="Unique Future HR Consultancy" />
            <span><b>UNIQUE FUTURE</b><small>HUMAN RESOURCES CONSULTANCY</small></span>
          </button>
          <nav className={menu ? 'open' : ''}>
            {['home', 'about', 'services', 'process', 'gallery', 'contact'].map((x) => <button key={x} onClick={() => go(x)}>{x === 'home' ? 'Home' : x === 'process' ? 'Recruitment Process' : x[0].toUpperCase() + x.slice(1)}</button>)}
            <button className="nav-cta" onClick={() => go('contact')}>Talk to us <span>↗</span></button>
          </nav>
          <button className={`hamburger ${menu ? 'active' : ''}`} onClick={() => setMenu(v => !v)} aria-label="Toggle menu"><i /><i /><i /></button>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="orb orb-a" /><div className="orb orb-b" /><div className="orb orb-c" />
        <div className="hero-photo hero-photo-one"><img src={`${A}img_02.jpeg`} alt="Aircraft" /></div>
        <div className="hero-photo hero-photo-two"><img src={`${A}img_70.jpeg`} alt="Professional client meeting" /></div>
        <div className="hero-content">
          <div className="hero-kicker"><span /> RECRUITMENT • MANPOWER • HUMAN RESOURCES</div>
          <h1>People. Talent.<br /><em>Possibility.</em></h1>
          <p>Connecting capable people with the organizations where they can create lasting value — across borders, industries and opportunities.</p>
          <div className="hero-actions"><button className="btn-primary" onClick={() => go('services')}>Explore our expertise <span>↗</span></button><button className="btn-ghost" onClick={() => go('about')}>Discover our story <span>↓</span></button></div>
          <div className="hero-meta"><span><b>12+</b> Years of expertise</span><span><b>50+</b> HR professionals</span><span><b>4</b> Regional offices</span></div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO EXPLORE</span><i /></div>
      </section>

      <section className="trust-strip"><div className="trust-inner"><span>TRUSTED MANPOWER SOLUTIONS</span><b>UAE</b><b>INDIA</b><b>NEPAL</b><b>KENYA</b><span>SKILLED • SEMI-SKILLED • PROFESSIONAL</span></div></section>

      <section id="about" className="about section-pad">
        <div className="about-visual reveal"><div className="image-frame"><img src={`${A}img_03.jpeg`} alt="Unique Future office" /><div className="frame-label">SHARJAH • UAE</div></div><div className="small-photo"><img src={`${A}img_04.jpeg`} alt="Office interior" /></div><div className="experience-badge"><strong>12+</strong><span>YEARS<br />OF EXPERTISE</span></div></div>
        <div className="about-copy"><SectionHeading eyebrow="01 — About us" title="A bridge between human potential and business growth." text="Unique Future HR Consultancy is one of the reputed recruiting agencies in UAE, registered under the Government of Sharjah with its head office in Sharjah, UAE." /><p className="lead reveal">We provide skilled, semi-skilled and unskilled manpower according to the needs of employing countries. Our professional recruitment team scouts potential employees and maintains an updated data bank of candidates across categories.</p><div className="about-points reveal"><div><b>01</b><span>Create a common roof for job seekers and suppliers.</span></div><div><b>02</b><span>Address unemployment by creating jobs as per interest.</span></div><div><b>03</b><span>Deploy employees within the committed time.</span></div><div><b>04</b><span>Harness human resources in the right place at the right time.</span></div></div></div>
      </section>

      <section className="director section-dark section-pad"><div className="director-image reveal"><img src={`${A}img_04.jpeg`} alt="Office" /><div className="quote-mark">“</div></div><div className="director-copy"><SectionHeading eyebrow="02 — Managing Director" title="Human potential is an organization's greatest asset." /><p className="reveal">Dear valuable Clients, warm greetings from Unique Future HR Consultancy. It is our great honor to introduce our agency to you and invite you to consider us as a manpower supplier to your reputable organization.</p><p className="reveal">We firmly believe that human potentiality should be utilized to the maximum extent and understand the importance of providing the best people to work in your organization. Our HR consultants calibrate qualified candidates to positions through personal interviews and professional selection.</p><p className="reveal">We look forward to the opportunity of serving you and assure you of utmost satisfaction.</p><div className="signature reveal">With Best Regards,<strong>Unique Future HR Consultancy</strong><small>Managing Director</small></div></div></section>

      <section className="mission section-pad"><div className="mission-intro"><SectionHeading eyebrow="03 — Mission & Vision" title="Professionalism with purpose." text="High standards of efficiency, sincerity and professionalism guide every project we undertake." /><div className="mission-photo reveal"><img src={`${A}img_06.jpeg`} alt="Mission" /></div></div><div className="mission-cards"><Reveal><article><span className="card-number">01</span><h3>Mission</h3><p>To practice high standards of efficiency in every project we undertake, executing it with hard work, sincerity and professionalism.</p><p>To help our candidates and upgrade the lives of our fellow Nepalese by providing them with decent overseas job opportunities.</p><p>For our clients, we seek out those candidates who have the potential to become an asset in the growth of an organisation.</p></article></Reveal><Reveal><article className="vision-card"><span className="card-number">02</span><h3>Vision</h3><p>It is our vision to be recognized and respected as the leading recruitment partner worldwide.</p><p>We strive to provide every client and candidate with excellent tailor made services and to exceed their expectations.</p><div className="vision-art"><img src={`${A}img_07.jpeg`} alt="Vision illustration" /></div></article></Reveal></div></section>

      <section className="objective section-dark section-pad"><SectionHeading eyebrow="04 — Objectives & Summary" title="The right people. The right place. The right time." text="A competent manpower agency helps organizations reach the most suitable employees for their requirements." /><div className="objective-layout"><div className="objective-big reveal"><img src={`${A}img_05.jpeg`} alt="Objectives" /><div><span>OBJECTIVES</span><p>Legally provide employment opportunities to various categories of labour force and professional personnel to overseas countries while maintaining communication with workers throughout their employment journey.</p></div></div><div className="objective-list reveal"><div><span>01</span><b>Selection</b><p>Stringent selection criteria to recruit suitable workforce.</p></div><div><span>02</span><b>Orientation</b><p>Intensive orientation according to employer requirements.</p></div><div><span>03</span><b>Training</b><p>Country information and company briefings for workers.</p></div><div><span>04</span><b>Commitment</b><p>Support professional careers and employer satisfaction.</p></div></div></div></section>

      <section id="services" className="services section-pad"><SectionHeading eyebrow="05 — Categories" title="Manpower across industries." text="From construction and security to healthcare, engineering, hospitality and information technology — our candidate categories are built around real employer requirements." /><div className="service-grid">{services.map((s, i) => <Reveal key={s.title}><article className={`service-card ${activeService === i ? 'expanded' : ''}`} onClick={() => setActiveService(activeService === i ? null : i)}><div className="service-image"><img src={`${A}${s.img}`} alt={s.title} /><span>{String(i + 1).padStart(2, '0')}</span></div><div className="service-body"><h3>{s.title}</h3><button>{activeService === i ? 'Close list' : 'View positions'} <b>{activeService === i ? '−' : '+'}</b></button>{activeService === i && <ul>{s.items.map(x => <li key={x}>{x}</li>)}</ul>}</div></article></Reveal>)}</div></section>

      <section id="process" className="process section-dark section-pad"><SectionHeading eyebrow="06 — Recruitment process" title="A recruitment journey built around diligence." text="Information, communication, screening, testing, medical verification and orientation — each stage is designed to support the employer and candidate." /><div className="process-timeline">{process.map((p, i) => <Reveal key={p.n}><article className="process-item"><div className="process-number">{p.n}</div><div className="process-image"><img src={`${A}${p.img}`} alt={p.title} /></div><div className="process-text"><span>STEP {p.n}</span><h3>{p.title}</h3><p>{p.text}</p></div></article></Reveal>)}</div></section>

      <section className="legal section-pad"><SectionHeading eyebrow="07 — Legal documents" title="Preparation before departure." /><div className="legal-grid"><Reveal><div className="legal-photo"><img src={`${A}img_28.jpeg`} alt="Medical check-up" /></div><div><span>MEDICAL CHECK-UP</span><h3>Medical readiness</h3><p>Selected candidates are sent to an authorized hospital or clinic for a full medical examination. Those medically and physically fit become eligible to sign the employment contract.</p></div></Reveal><Reveal><div className="legal-photo"><img src={`${A}img_29.jpeg`} alt="Trade test" /></div><div><span>TRADE TEST</span><h3>Practical verification</h3><p>Practical trade tests can be conducted at a technical training institute or at the office where the selection committee observes workers according to their job.</p></div></Reveal><Reveal><div className="legal-photo"><img src={`${A}img_29.jpeg`} alt="Orientation and preparation" /></div><div><span>ORIENTATION</span><h3>Ready for the journey</h3><p>Prior to departure, workers receive briefing on the employment company, country laws, labour laws, immigration policy and responsibilities.</p></div></Reveal></div></section>

      <section id="gallery" className="gallery section-dark section-pad"><SectionHeading eyebrow="08 — Gallery" title="A glimpse inside our work." /><div className="gallery-grid">{gallery.map((g, i) => <button className={`gallery-item g${i}`} key={g} onClick={() => setLightbox(g)}><img src={`${A}${g}`} alt={`Unique Future gallery ${i + 1}`} /><span>VIEW ↗</span></button>)}</div></section>

      <section className="achievements section-pad"><div className="achievement-visual reveal"><img src={`${A}img_35.jpeg`} alt="Achievement trophy" /><div className="achievement-number">5000<span>+</span></div></div><div className="achievement-copy"><SectionHeading eyebrow="09 — Achievements" title="Experience that keeps moving forward." /><div className="stats"><div><b>12+</b><span>Years of expertise</span></div><div><b>50+</b><span>HR professionals</span></div><div><b>4</b><span>Regional offices</span></div><div><b>100%</b><span>Professional focus</span></div></div><p>Our profile highlights over 12 years of expertise, a team of 50+ HR professionals and a broad network of clients and candidates.</p></div></section>

      <section className="clients section-soft section-pad"><SectionHeading eyebrow="10 — Our clients" title="Relationships built on trust." text="A selection of client identities presented in the company profile." /><div className="clients-marquee"><div className="client-track">{[...clients, ...clients].map((c, i) => <div className="client-logo" key={`${c}-${i}`}><img src={`${A}${c}`} alt="Client logo" /></div>)}</div></div><div className="client-feature reveal"><img src={`${A}img_70.jpeg`} alt="Client meeting" /><div><span>PARTNERSHIPS</span><h3>People working together creates stronger organizations.</h3><p>Our approach combines candidate data, professional screening and direct communication to help employers find the people their operations need.</p></div></div></section>

      <section id="contact" className="contact section-dark section-pad"><SectionHeading eyebrow="11 — Contact us" title="Let's build the right team." text="Reach the office closest to you or start a conversation with our recruitment team." /><div className="office-grid">{offices.map(o => <Reveal key={o.country}><article className={`office-card ${o.color}`}><div className="office-top"><span>{o.country}</span><b>↗</b></div><h3>{o.city}</h3><p>{o.text}</p><div className="phone-list">{o.phones.map(ph => <a key={ph} href={`tel:${ph.replaceAll(' ', '')}`}>{ph}</a>)}</div></article></Reveal>)}</div><div className="contact-bottom reveal"><div><span>EMAIL</span><a href="mailto:uniquefuturehrc@gmail.com">uniquefuturehrc@gmail.com</a><a href="mailto:uniquefuturecv@gmail.com">uniquefuturecv@gmail.com</a><a href="mailto:futurepointdubai@gmail.com">futurepointdubai@gmail.com</a></div><div><span>NEPAL RECRUITMENT</span><a href="mailto:recruitmentasian786@gmail.com">recruitmentasian786@gmail.com</a></div><button className="btn-primary" onClick={() => window.location.href = 'mailto:uniquefuturehrc@gmail.com?subject=Manpower%20Enquiry'}>Send an enquiry <span>↗</span></button></div></section>

      <footer><div className="footer-brand"><img src={`${A}logo.png`} alt="Unique Future" /><div><b>UNIQUE FUTURE</b><small>HUMAN RESOURCES CONSULTANCY</small></div></div><p>Professional manpower recruitment & human resource solutions.</p><span>© {new Date().getFullYear()} Unique Future HR Consultancy. All rights reserved.</span></footer>

      <button className="floating-contact" onClick={() => go('contact')} aria-label="Contact">✦ <span>Contact us</span></button>
      {lightbox && <div className="lightbox" onClick={() => setLightbox(null)}><button onClick={() => setLightbox(null)}>×</button><img src={`${A}${lightbox}`} alt="Gallery enlarged" onClick={e => e.stopPropagation()} /></div>}
    </main>
  );
}
