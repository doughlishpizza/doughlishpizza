import { FormEvent, useState } from 'react';
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Flame, Instagram, Menu, Minus, Plus, X } from 'lucide-react';
import logo from './assets/doughlish-hero.png';
import mark from './assets/doughlish-mark.png';

const occasions = [
  { number: '01', title: 'Weddings', text: 'A relaxed, generous centrepiece for a day that should feel like you.', accent: 'cream' },
  { number: '02', title: 'Private parties', text: 'Big flavour, easy conversation and an oven everyone gathers around.', accent: 'orange' },
  { number: '03', title: 'Corporate events', text: 'A memorable way to bring teams together, without the stiff formalities.', accent: 'gold' },
  { number: '04', title: 'Festivals & functions', text: 'A mobile pizza experience made to feed a crowd and keep the energy moving.', accent: 'gold' },
];

const faqs = [
  ['Where does Doughlish travel?', 'Doughlish is based in Tamworth, NSW and brings the mobile wood-fired pizza experience across the New England, Hunter, Mid North Coast and wider NSW. Tell us where your celebration is taking place and we will consider the best way to make it work.'],
  ['How far ahead should we enquire?', 'As early as you can is always best, especially for weddings and larger events. Share your date, location and guest count through the enquiry form and we can start the conversation.'],
  ['Can you cater for different dietary needs?', 'We can talk through your guest list and menu needs during the enquiry process. Include any dietary requirements or questions in your event notes so we can plan thoughtfully.'],
  ['What does pizza trailer hire include?', 'The Doughlish experience brings the oven, the making and the service directly to your celebration. Every event is considered individually, so your enquiry is the best place to discuss what your occasion needs.'],
];

function scrollToEnquire() {
  document.querySelector('#enquire')?.scrollIntoView({ behavior: 'smooth' });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '', location: '', guests: '', event: 'Wedding', notes: '' });

  const updateField = (field: keyof typeof form, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    if (submitted) setSubmitted(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="site-shell grain min-h-[100dvh]">
      <header className="nav-blur fixed inset-x-0 top-0 z-40 border-b border-[#350b09]/15">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3" data-testid="link-brand">
            <img src={mark} alt="Doughlish Wood-Fired Pizza logo" width="1122" height="1122" className="h-16 w-16 rounded-full object-cover" />
            <span className="hidden text-[11px] font-bold uppercase tracking-[.18em] text-[#350b09] sm:block">Mobile wood-fired pizza</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <a href="#experience" className="text-sm font-semibold text-[#350b09] transition-colors hover:text-[#ec5d25]" data-testid="link-experience">The experience</a>
            <a href="#occasions" className="text-sm font-semibold text-[#350b09] transition-colors hover:text-[#ec5d25]" data-testid="link-occasions">Occasions</a>
            <a href="#faq" className="text-sm font-semibold text-[#350b09] transition-colors hover:text-[#ec5d25]" data-testid="link-faq">FAQ</a>
            <a href="#enquire" className="text-sm font-semibold text-[#350b09] transition-colors hover:text-[#ec5d25]" data-testid="link-enquire">Enquire</a>
          </nav>
          <button type="button" onClick={scrollToEnquire} className="btn-fire hidden rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[.12em] md:block" data-testid="button-header-enquire">Request a quote <ArrowRight className="ml-2 inline-block" size={15} /></button>
          <button type="button" onClick={() => setMenuOpen((value) => !value)} className="rounded-full border border-[#350b09]/25 p-3 text-[#350b09] md:hidden" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} data-testid="button-mobile-menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#350b09]/15 bg-[#f8efda] px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              {['experience', 'occasions', 'faq'].map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)} className="font-display text-2xl capitalize text-[#350b09]" data-testid={`link-mobile-${item}`}>{item === 'faq' ? 'FAQ' : `The ${item}`}</a>
              ))}
              <button type="button" onClick={() => { setMenuOpen(false); scrollToEnquire(); }} className="btn-fire mt-2 rounded-full px-5 py-3 text-left text-xs font-bold uppercase tracking-[.12em]" data-testid="button-mobile-enquire">Request a quote <ArrowRight className="ml-2 inline-block" size={15} /></button>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-[#350b09] px-5 pb-16 pt-36 text-[#f8efda] sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-24 lg:pt-44">
          <div className="pointer-events-none absolute -right-24 top-32 h-96 w-96 rounded-full border border-[#e6b86c]/20 lg:h-[600px] lg:w-[600px]" />
          <div className="pointer-events-none absolute -right-8 top-64 h-72 w-72 rounded-full border border-[#ec5d25]/20 lg:h-[450px] lg:w-[450px]" />
          <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[1.08fr_.92fr]">
            <div className="relative z-10 max-w-[780px]">
              <div className="reveal flex items-center gap-3 text-[#e6b86c]">
                <span className="h-px w-12 bg-[#e6b86c]" />
                <span className="section-kicker">Tamworth · New England · NSW</span>
              </div>
              <h1 className="display-xl reveal reveal-delay-1 mt-8 text-balance">Gather round.<br /><span className="text-[#ec5d25]">Eat well.</span></h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-[570px] text-lg leading-relaxed text-[#f8efda]/75 sm:text-xl">Doughlish brings fresh, handcrafted pizza and the atmosphere of a real wood-fired oven directly to your celebration.</p>
              <div className="reveal reveal-delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button type="button" onClick={scrollToEnquire} className="btn-fire rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[.12em]" data-testid="button-hero-enquire">Plan your pizza experience <ArrowRight className="ml-2 inline-block" size={17} /></button>
                <a href="#experience" className="btn-ghost rounded-full px-6 py-4 text-center text-sm font-bold uppercase tracking-[.12em] text-[#f8efda]" data-testid="link-hero-experience">See how it works</a>
              </div>
              <div className="mt-16 flex items-center gap-5 text-xs text-[#f8efda]/55">
                <span className="flex items-center gap-2"><Flame size={16} className="text-[#ec5d25]" /> Fired fresh on site</span>
                <span className="h-1 w-1 rounded-full bg-[#e6b86c]" />
                <span>Made for your occasion</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[620px] lg:mt-8">
              <div className="oven-glow slow-float relative overflow-hidden rounded-[48%_48%_10%_10%/35%_35%_10%_10%] border border-[#e6b86c]/35 bg-[#210605]">
                <div className="absolute inset-4 rounded-[48%_48%_8%_8%/35%_35%_8%_8%] border border-[#ec5d25]/30" />
                <img src={logo} alt="Doughlish logo showing a pizza fresh from a wood-fired oven" width="1024" height="1024" className="relative z-10 aspect-square w-full object-cover mix-blend-screen opacity-95" />
              </div>
              <div className="absolute -bottom-5 -left-2 rotate-[-4deg] bg-[#e6b86c] px-5 py-3 text-[#350b09] shadow-xl sm:-left-8" data-testid="text-hero-note">
                <span className="font-display text-2xl">hot, handmade, here.</span>
              </div>
            </div>
          </div>
          <a href="#experience" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-[#f8efda]/55 lg:flex" data-testid="link-scroll-experience">Scroll to explore <ArrowDownRight size={15} /></a>
        </section>

        <section className="border-b border-[#350b09]/15 bg-[#e6b86c] px-5 py-5 sm:px-8 lg:px-12" aria-label="Doughlish service summary">
          <div className="mx-auto grid max-w-[1440px] gap-5 sm:grid-cols-3 sm:items-center">
            <p className="font-display text-2xl leading-none text-[#350b09] sm:text-3xl">Pizza with a pulse.</p>
            <p className="text-sm leading-relaxed text-[#350b09]/75">A mobile wood-fired pizza experience for weddings, parties, private functions, corporate events, festivals and special occasions.</p>
            <p className="font-mono-brand text-[10px] font-bold uppercase tracking-[.12em] text-[#350b09]/65 sm:text-right">Pizza trailer hire · event catering NSW</p>
          </div>
        </section>

        <section id="experience" className="scroll-mt-20 bg-[#f8efda] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="mx-auto max-w-[1440px]">
            <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="section-kicker text-[#ec5d25]">The Doughlish difference</p>
                <h2 className="display-md mt-5 max-w-[560px] text-[#350b09]">Not just catering.<br /><span className="italic text-[#ec5d25]">A reason to gather.</span></h2>
              </div>
              <div className="max-w-[660px]">
                <p className="text-xl leading-relaxed text-[#350b09]/75">The oven is the first thing people notice. Then comes the smell, the sizzle and the easy rhythm of watching dough become dinner. Doughlish is built around that little bit of theatre — fresh pizza, quality ingredients and a warm welcome, wherever your event is happening.</p>
                <div className="mt-10 flex items-center gap-3 text-sm font-bold uppercase tracking-[.1em] text-[#350b09]"><span className="h-3 w-3 rounded-full bg-[#ec5d25]" /> Wood-fired pizza catering, made personal</div>
              </div>
            </div>
            <div className="mt-20 grid gap-6 md:grid-cols-3">
              {[
                ['01', 'We arrive', 'The mobile oven rolls in and becomes part of the scene — not hidden out the back.'],
                ['02', 'We make', 'Fresh dough, quality ingredients and traditional wood fire, prepared for your guests.'],
                ['03', 'You gather', 'More time around the table, less time worrying about what everyone will eat.'],
              ].map(([number, title, text], index) => (
                <article key={number} className={`hover-lift flex flex-col items-center text-center ${index === 1 ? 'tilt-card-right md:mt-10' : index === 2 ? 'tilt-card md:mt-4' : ''} border border-[#350b09]/20 bg-[#eadfc4] p-7 sm:p-9`} data-testid={`card-process-${number}`}>
                  <div className="flex items-center justify-center gap-4"><span className="font-mono-brand text-xs font-bold text-[#ec5d25]">{number}</span><Flame size={19} className="text-[#ec5d25]" /></div>
                  <h3 className="font-display mt-16 text-4xl text-[#350b09]">{title}</h3>
                  <p className="mt-4 max-w-[290px] text-sm leading-relaxed text-[#350b09]/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="occasions" className="scroll-mt-20 bg-[#350b09] px-5 py-24 text-[#f8efda] sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
              <div>
                <p className="section-kicker text-[#e6b86c]">Made for the moment</p>
                <h2 className="display-lg mt-5 max-w-[700px]">Whatever you’re<br /><span className="text-[#ec5d25]">celebrating.</span></h2>
              </div>
              <p className="max-w-[310px] text-sm leading-relaxed text-[#f8efda]/65">From a backyard party to a full festival field, the Doughlish setup brings people together and keeps them well fed.</p>
            </div>
            <div className="mt-16 grid gap-px border border-[#f8efda]/20 bg-[#f8efda]/20 sm:grid-cols-2">
              {occasions.map((occasion) => (
                <button type="button" key={occasion.number} onClick={scrollToEnquire} className={`group flex min-h-[270px] w-full flex-col items-center justify-center bg-[#350b09] p-7 text-center transition-colors duration-300 hover:bg-[#511713] sm:p-10 ${occasion.accent === 'orange' ? 'sm:border-l border-[#f8efda]/20' : ''}`} data-testid={`button-occasion-${occasion.number}`}>
                  <div className="flex items-center justify-center gap-4"><span className="font-mono-brand text-xs text-[#e6b86c]">{occasion.number}</span><Flame size={20} className="text-[#ec5d25]" /><ArrowDownRight size={19} className="text-[#ec5d25] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" /></div>
                  <h3 className="font-display mt-10 text-4xl text-[#f8efda] sm:text-5xl">{occasion.title}</h3>
                  <p className="mt-3 max-w-[370px] text-sm leading-relaxed text-[#f8efda]/60">{occasion.text}</p>
                  <span className="mt-6 text-[10px] font-bold uppercase tracking-[.15em] text-[#e6b86c]">Enquire about your event</span>
                </button>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-5 border-t border-[#f8efda]/20 pt-7 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-[#f8efda]/60">Planning something a little different? We’d love to hear about it.</p>
              <button type="button" onClick={scrollToEnquire} className="flex items-center gap-3 text-sm font-bold uppercase tracking-[.12em] text-[#e6b86c] hover:text-[#ec5d25]" data-testid="button-occasion-enquire">Talk through your event <ArrowRight size={17} /></button>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#ec5d25] px-5 py-24 text-[#350b09] sm:px-8 lg:px-12 lg:py-32">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#350b09]/20 sm:h-[500px] sm:w-[500px]" />
          <div className="pointer-events-none absolute -bottom-32 left-1/4 h-80 w-80 rounded-full border border-[#350b09]/15" />
          <div className="relative mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <p className="section-kicker text-[#350b09]/65">The short version</p>
              <h2 className="display-lg mt-5 max-w-[780px]">Good food makes<br /><span className="outline-text">good memories.</span></h2>
            </div>
            <div className="lg:pb-2">
              <p className="text-lg leading-relaxed text-[#350b09]/75">You bring the people. We bring the fire, the dough and the kind of meal that gives everyone something to talk about.</p>
              <button type="button" onClick={scrollToEnquire} className="btn-cream mt-8 rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[.12em]" data-testid="button-orange-enquire">Let’s plan yours <ArrowRight className="ml-2 inline-block" size={17} /></button>
            </div>
          </div>
        </section>

        <section id="service-area" className="scroll-mt-20 bg-[#f8efda] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
            <div className="relative min-h-[390px] overflow-hidden border border-[#350b09]/20 bg-[#350b09] p-7 text-[#f8efda] sm:p-10">
              <div className="pointer-events-none absolute -right-28 -top-24 h-[430px] w-[430px] rounded-full border border-[#e6b86c]/25" />
              <div className="pointer-events-none absolute -right-4 top-12 h-[300px] w-[300px] rounded-full border border-[#ec5d25]/25" />
              <div className="pointer-events-none absolute bottom-[-110px] left-[-70px] h-[260px] w-[260px] rounded-full bg-[#ec5d25]/10 blur-2xl" />
              <div className="relative flex h-full min-h-[330px] flex-col items-center justify-between text-center">
                <div className="flex w-full items-center justify-center gap-4"><span className="section-kicker text-[#e6b86c]">Where the dough begins</span><span className="font-mono-brand text-xs text-[#f8efda]/60">NSW / AU</span></div>
                <div className="relative self-center text-center">
                  <div className="absolute -inset-14 rounded-full border border-[#e6b86c]/20" />
                  <div className="ember-pulse mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#e6b86c] bg-[#210605]"><Flame size={36} className="text-[#ec5d25]" /></div>
                  <p className="mt-5 font-display text-5xl text-[#f8efda]">Tamworth</p>
                  <p className="font-mono-brand text-[10px] uppercase tracking-[.16em] text-[#e6b86c]">home base</p>
                </div>
                <div className="relative w-full border-t border-[#f8efda]/20 pt-5 text-center">
                  <p className="font-display text-2xl leading-tight text-[#f8efda]">We bring the fire to you.</p>
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {['New England', 'Hunter', 'Mid North Coast', 'Wider NSW'].map((area) => <span key={area} className="rounded-full border border-[#f8efda]/25 px-3 py-2 text-xs text-[#f8efda]/75">{area}</span>)}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="section-kicker text-[#ec5d25]">Local by nature</p>
              <h2 className="display-md mt-5 text-[#350b09]">From Tamworth,<br /><span className="italic text-[#ec5d25]">out to you.</span></h2>
              <p className="mt-7 text-lg leading-relaxed text-[#350b09]/72">Doughlish is a mobile wood-fired pizza business based in Tamworth, NSW. From wedding pizza catering and party pizza catering to corporate functions, we travel across the New England, Hunter, Mid North Coast and wider NSW for celebrations worth showing up for.</p>
              <div className="mt-10 border-l-2 border-[#ec5d25] pl-5"><p className="font-display text-2xl leading-tight text-[#350b09]">Looking for mobile pizza catering in Tamworth NSW or beyond?</p><button type="button" onClick={scrollToEnquire} className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.12em] text-[#ec5d25]" data-testid="button-area-enquire">Tell us where <ArrowRight size={16} /></button></div>
            </div>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 bg-[#eadfc4] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.75fr_1.25fr] lg:gap-24">
            <div><p className="section-kicker text-[#ec5d25]">Before we fire up</p><h2 className="display-md mt-5 text-[#350b09]">Good to<br /><span className="italic text-[#ec5d25]">know.</span></h2><p className="mt-7 max-w-[320px] text-sm leading-relaxed text-[#350b09]/65">A few things people often ask before bringing Doughlish to their event.</p></div>
            <div className="border-t border-[#350b09]/25">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return <div key={question} className="border-b border-[#350b09]/25" data-testid={`faq-item-${index}`}><button type="button" onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-4 py-6 text-left" aria-expanded={isOpen} data-testid={`button-faq-${index}`}><span className="font-display text-2xl text-[#350b09] sm:text-3xl">{question}</span>{isOpen ? <Minus size={20} className="shrink-0 text-[#ec5d25]" /> : <Plus size={20} className="shrink-0 text-[#ec5d25]" />}</button>{isOpen && <p className="max-w-[700px] pb-7 pr-8 text-sm leading-relaxed text-[#350b09]/68">{answer}</p>}</div>;
              })}
            </div>
          </div>
        </section>

        <section id="enquire" className="scroll-mt-20 bg-[#350b09] px-5 py-24 text-[#f8efda] sm:px-8 lg:px-12 lg:py-32">
          <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="section-kicker text-[#e6b86c]">Your date, your people, your pizza</p>
              <h2 className="display-md mt-5 text-[#f8efda]">Start with<br /><span className="text-[#ec5d25]">a hello.</span></h2>
              <p className="mt-7 max-w-[420px] text-base leading-relaxed text-[#f8efda]/67">Tell us a little about your event and we’ll have the right conversation from there. No pressure, no package maze.</p>
              <div className="mt-12 space-y-5 border-t border-[#f8efda]/20 pt-6 text-sm text-[#f8efda]/65">
                <p><span className="mr-3 text-[#ec5d25]">01</span> Share the shape of your celebration</p>
                <p><span className="mr-3 text-[#ec5d25]">02</span> We’ll talk menu, location and what you need</p>
                <p><span className="mr-3 text-[#ec5d25]">03</span> Make a plan to bring the fire</p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="border border-[#f8efda]/22 bg-[#511713] p-6 sm:p-9" data-testid="form-enquiry">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Your name<input required value={form.name} onChange={(event) => updateField('name', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none placeholder:text-[#f8efda]/35 focus:border-[#e6b86c]" placeholder="What should we call you?" data-testid="input-name" /></label>
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Email<input required type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none placeholder:text-[#f8efda]/35 focus:border-[#e6b86c]" placeholder="you@example.com" data-testid="input-email" /></label>
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Event date<input required type="date" value={form.date} onChange={(event) => updateField('date', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none focus:border-[#e6b86c]" data-testid="input-date" /></label>
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Event location<input required value={form.location} onChange={(event) => updateField('location', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none placeholder:text-[#f8efda]/35 focus:border-[#e6b86c]" placeholder="Town or venue" data-testid="input-location" /></label>
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Guest count<input value={form.guests} onChange={(event) => updateField('guests', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none placeholder:text-[#f8efda]/35 focus:border-[#e6b86c]" placeholder="A rough number is perfect" data-testid="input-guests" /></label>
                <label className="text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Occasion<select value={form.event} onChange={(event) => updateField('event', event.target.value)} className="mt-2 w-full border-b border-[#f8efda]/30 bg-[#511713] px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none focus:border-[#e6b86c]" data-testid="select-event"><option>Wedding</option><option>Private party</option><option>Corporate event</option><option>Festival or function</option><option>Something else</option></select></label>
              </div>
              <label className="mt-6 block text-xs font-bold uppercase tracking-[.1em] text-[#f8efda]/72">Tell us anything useful<textarea value={form.notes} onChange={(event) => updateField('notes', event.target.value)} rows={4} className="mt-2 w-full resize-none border-b border-[#f8efda]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal text-[#f8efda] outline-none placeholder:text-[#f8efda]/35 focus:border-[#e6b86c]" placeholder="The vibe, the venue, dietary needs, your big idea..." data-testid="textarea-notes" /></label>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><button type="submit" className="btn-fire rounded-full px-6 py-4 text-sm font-bold uppercase tracking-[.12em]" data-testid="button-submit-enquiry">Send enquiry <ArrowRight className="ml-2 inline-block" size={17} /></button>{submitted ? <p className="flex items-start gap-2 text-xs leading-relaxed text-[#e6b86c]" role="status" data-testid="status-enquiry"><Check size={16} className="mt-0.5 shrink-0" /> Thanks, {form.name || 'there'} — your enquiry is ready to be followed up. This demo has no connected inbox yet.</p> : <p className="max-w-[230px] text-[11px] leading-relaxed text-[#f8efda]/42">This is a presentation flow. Connect your preferred inbox or form endpoint before launch.</p>}</div>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-[#210605] px-5 py-12 text-[#f8efda] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-10 border-b border-[#f8efda]/18 pb-10 md:flex-row md:items-end md:justify-between">
            <div className="flex items-center gap-4"><img src={mark} alt="Doughlish Wood-Fired Pizza logo" width="1122" height="1122" className="h-24 w-24 rounded-full object-cover" /><div><p className="font-display text-3xl">Doughlish</p><p className="font-mono-brand text-[10px] uppercase tracking-[.15em] text-[#e6b86c]">Wood-fired pizza · Tamworth NSW</p></div></div>
             <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-[#f8efda]/65"><a href="#experience" className="hover:text-[#e6b86c]" data-testid="link-footer-experience">Experience</a><a href="#occasions" className="hover:text-[#e6b86c]" data-testid="link-footer-occasions">Occasions</a><a href="#enquire" className="hover:text-[#e6b86c]" data-testid="link-footer-enquire">Enquire</a><a href="#top" className="flex items-center gap-2 hover:text-[#e6b86c]" data-testid="link-footer-top">Back to top <ArrowDownRight size={15} className="-rotate-90" /></a></div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[11px] text-[#f8efda]/42 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} Doughlish Wood-Fired Pizza. Serving celebrations across NSW.</p><p className="flex items-center gap-2">Made around a real fire <Flame size={13} className="text-[#ec5d25]" /> <Instagram size={14} aria-label="Instagram placeholder" /></p></div>
        </div>
      </footer>
    </div>
  );
}

export default App;