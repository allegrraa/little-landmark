import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Mail,
  Phone,
  Palette,
  Smartphone,
  CalendarCheck2,
  Search,
  Rocket,
  RefreshCw,
  MessageCircle,
  Code2,
  CheckCircle2,
  LifeBuoy,
  Plus,
  Minus,
  ExternalLink,
} from 'lucide-react';
import { portfolio, services, process as processSteps, faqs, imagePath } from './data';
import './styles.css';

const links: [string, string][] = [
  ['Work', 'work'],
  ['Services', 'services'],
  ['Process', 'process'],
  ['About', 'about'],
  ['Contact', 'contact'],
];

const serviceIcons = [Palette, Smartphone, CalendarCheck2, Search, Rocket, RefreshCw];
const processIcons = [MessageCircle, Code2, CheckCircle2, LifeBuoy];

const EMAIL = 'alleg8torr@gmail.com';
const PHONE_DISPLAY = '+1 (213) 755-7788';
const PHONE_TEL = '+12137557788';

function Wordmark() {
  return (
    <span className="wordmark">
      <MapPin size={20} strokeWidth={2.2} className="wordmark-pin" />
      Little<span>Landmark</span>
    </span>
  );
}

function scrollTo(id: string) {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
}

function App() {
  const [mobile, setMobile] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: '', business: '', email: '', message: '' });

  const nav = (id: string) => {
    setMobile(false);
    scrollTo(id);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New project inquiry${form.business ? ` — ${form.business}` : ''}`);
    const bodyLines = [
      form.name && `Name: ${form.name}`,
      form.business && `Business: ${form.business}`,
      form.email && `Reply to: ${form.email}`,
      '',
      form.message || 'Hi Allegra, I would like to talk about a website for my business.',
    ].filter(Boolean);
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a href="#" aria-label="Little Landmark home" onClick={(e) => { e.preventDefault(); nav('top'); }}>
          <Wordmark />
        </a>
        <nav aria-label="Main navigation" id="main-navigation" className={mobile ? 'main-nav open' : 'main-nav'}>
          {links.map(([label, id]) => (
            <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); nav(id); }}>{label}</a>
          ))}
          <button className="mobile-nav-cta" onClick={() => nav('contact')}>Start a Project <ArrowUpRight size={16} /></button>
        </nav>
        <button className="button header-cta" onClick={() => nav('contact')}>Start a Project <ArrowUpRight size={16} /></button>
        <button className="icon-button mobile-toggle" aria-label={mobile ? 'Close menu' : 'Open menu'} aria-expanded={mobile} aria-controls="main-navigation" onClick={() => setMobile(!mobile)}>
          {mobile ? <X /> : <Menu />}
        </button>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow"><span className="tiny-line" /> WEBSITE DESIGN &amp; DEVELOPMENT / FOR SMALL BUSINESSES</p>
            <h1 id="hero-heading">Put your business <em>on the map.</em></h1>
            <p className="hero-description">
              I design and build fast, custom websites for salons, restaurants, and local shops — the kind of site
              that makes people stop scrolling and walk through your door.
            </p>
            <div className="hero-actions">
              <button className="button" onClick={() => nav('work')}>See Live Demos <ArrowUpRight size={18} /></button>
              <a className="text-link" href={`mailto:${EMAIL}`} onClick={(e) => { e.preventDefault(); nav('contact'); }}>Get a Free Quote <ArrowRight size={17} /></a>
            </div>
            <div className="hero-info">
              <span><i /> Two full demo builds below</span>
              <span>Usually live within 1–2 weeks</span>
            </div>
          </div>
          <div className="hero-composition">
            <span className="hero-badge">2 LIVE<br />DEMOS ↓</span>
            <div className="hero-photo">
              <div className="browser-chrome"><i /><i /><i /></div>
              <img src={imagePath('cielo-desktop')} alt="Preview of the Cielo Street Kitchen demo website" loading="eager" />
            </div>
            <div className="hero-inset">
              <div className="browser-chrome"><i /><i /><i /></div>
              <img src={imagePath('forma-desktop')} alt="Preview of the FORMA Studio demo website" loading="lazy" />
              <span>FORMA Studio</span>
            </div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / RECENT BUILDS</p>
              <h2>See it <em>in action.</em></h2>
            </div>
            <p className="heading-note">
              Every demo below is a fully working website — click around, book an appointment, browse a menu.
            </p>
          </div>
          <div className="work-grid">
            {portfolio.map((p) => (
              <article className="work-card" key={p.slug} style={{ '--accent': p.accent } as React.CSSProperties}>
                <div className="work-media">
                  <div className="work-desktop">
                    <div className="browser-chrome"><i /><i /><i /></div>
                    <img src={imagePath(`${p.slug}-desktop`)} alt={`Desktop preview of the ${p.name} demo website`} loading="lazy" />
                  </div>
                  <div className="work-mobile">
                    <img src={imagePath(`${p.slug}-mobile`)} alt={`Mobile preview of the ${p.name} demo website`} loading="lazy" />
                  </div>
                </div>
                <div className="work-body">
                  <p className="work-kind">{p.kind}</p>
                  <h3>{p.name}</h3>
                  <p className="work-description">{p.description}</p>
                  <ul className="work-tags">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <a className="button outline" href={p.demoPath} target="_blank" rel="noopener noreferrer">
                    View Live Demo <ExternalLink size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="section-demo">
            FORMA Studio and Cielo Street Kitchen are original concept businesses built to demonstrate real features —
            not existing clients. A real project is built around your business, brand, and content.
          </p>
        </section>

        <section className="section services-section" id="services">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / WHAT I BUILD</p>
              <h2>Everything your site <em>needs.</em></h2>
            </div>
            <p className="heading-note">
              No bloated templates or plugins to maintain — just a fast, clean site built around your business.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => {
              const Icon = serviceIcons[i];
              return (
                <article className="service-card" key={s.title}>
                  <Icon size={26} strokeWidth={1.4} />
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / HOW IT WORKS</p>
              <h2>From first call <em>to launch.</em></h2>
            </div>
            <p className="heading-note">A simple, four-step process — no jargon, no surprises.</p>
          </div>
          <ol className="process-steps">
            {processSteps.map((s, i) => {
              const Icon = processIcons[i];
              return (
                <li key={s.step}>
                  <span>{s.step}</span>
                  <div>
                    <h3>{s.title}</h3>
                    <p>{s.description}</p>
                  </div>
                  <Icon size={22} strokeWidth={1.2} />
                </li>
              );
            })}
          </ol>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <p className="eyebrow">04 / WHO'S BEHIND THIS</p>
            <h2>Built by <em>one person,</em><br />built for your business.</h2>
            <p>
              I'm Allegra — I design and build websites for small businesses that don't have the time (or desire) to
              become web developers themselves.
            </p>
            <p>
              Every project gets the same thing: a fast, hand-built site, a straightforward process, and someone who
              actually picks up the phone after launch.
            </p>
            <div className="about-values">
              <span><CheckCircle2 size={15} /> Hand-built, not templated</span>
              <span><CheckCircle2 size={15} /> Direct communication, start to finish</span>
              <span><CheckCircle2 size={15} /> Support after launch</span>
            </div>
          </div>
          <div className="about-faq">
            <h3>A few good questions</h3>
            <div className="faq-list">
              {faqs.map(([q, a], i) => (
                <div className="faq-item" key={q}>
                  <h4>
                    <button aria-expanded={faq === i} aria-controls={`faq-answer-${i}`} onClick={() => setFaq(faq === i ? null : i)}>
                      {q}{faq === i ? <Minus size={16} /> : <Plus size={16} />}
                    </button>
                  </h4>
                  <div id={`faq-answer-${i}`} hidden={faq !== i}><p>{a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading">
            <div>
              <p className="eyebrow">GET IN TOUCH</p>
              <h2>Let's build your <em>landmark.</em></h2>
            </div>
            <p className="heading-note">
              Tell me a little about your business. I'll reply within a day with next steps — no obligation.
            </p>
          </div>
          <div className="contact-layout">
            <div className="contact-cards">
              <a className="contact-card" href={`mailto:${EMAIL}`}>
                <Mail size={22} strokeWidth={1.4} />
                <div>
                  <span>Email</span>
                  <strong>{EMAIL}</strong>
                </div>
                <ArrowUpRight size={18} />
              </a>
              <a className="contact-card" href={`tel:${PHONE_TEL}`}>
                <Phone size={22} strokeWidth={1.4} />
                <div>
                  <span>Call or text</span>
                  <strong>{PHONE_DISPLAY}</strong>
                </div>
                <ArrowUpRight size={18} />
              </a>
            </div>
            <form className="contact-form" onSubmit={submit}>
              <div className="form-grid">
                <label>Your name
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jordan Diaz" />
                </label>
                <label>Business name
                  <input value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })} placeholder="Your business (optional)" />
                </label>
              </div>
              <label>Your email
                <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" />
              </label>
              <label>What do you need?
                <textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell me a bit about your business and what you're looking for." />
              </label>
              <button className="button full" type="submit">Send Message <ArrowUpRight size={17} /></button>
              <p className="form-note">Opens your email app with this filled in — nothing is sent from this page.</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Wordmark />
            <p>Fast, custom websites for small businesses.<br />Let's put yours on the map.</p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            {links.map(([label, id]) => (
              <a key={id} href={'#' + id} onClick={(e) => { e.preventDefault(); nav(id); }}>{label}</a>
            ))}
          </div>
          <div>
            <p className="eyebrow">Live demos</p>
            {portfolio.map((p) => (
              <a key={p.slug} href={p.demoPath} target="_blank" rel="noopener noreferrer">{p.name} <ExternalLink size={13} /></a>
            ))}
          </div>
          <div>
            <p className="eyebrow">Contact</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Little Landmark. Allegra Chen.</p>
          <a href="#top" onClick={(e) => { e.preventDefault(); nav('top'); }}>Back to top <ArrowUpRight size={14} /></a>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
