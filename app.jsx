// La Michoacana Elite — main app

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "festive"
}/*EDITMODE-END*/;

function Nav() {
  return (
    <nav className="nav" data-screen-label="Nav">
      <a href="#top" className="nav-brand">
        <img className="nav-logo" src="assets/logo/logo-removebg.png" alt="La Michoacana Elite logo" />
        <span>La Michoacana <em style={{fontStyle:'italic',color:'var(--accent-1)'}}>Elite</em></span>
      </a>
      <div className="nav-links">
        <a href="#menu">Menu</a>
        <a href="#flavor">This Month</a>
        <a href="#story">Our Story</a>
        <a href="#visit">Visit</a>
      </div>
      <a href="#order" className="nav-cta">Order on DoorDash →</a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" data-screen-label="01 Hero">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">★ Marshall, Minnesota · Est. 2023</span>
          <h1 className="display" style={{marginTop:16}}>
            <span className="word wiggle pink">Sweet,</span><br/>
            <span className="word wiggle mango">spicy,</span><br/>
            <span className="word wiggle lime">cold.</span>
          </h1>
          <p className="hero-sub">Real-fruit paletas, hand-scooped ice cream, and the mangonadas everybody's been talking about. Made in-house, made with love.</p>
          <div className="hero-ctas">
            <a href="#menu" className="btn btn-primary">See the menu</a>
            <a href="#order" className="btn btn-secondary">Order online</a>
          </div>
          <div className="hero-meta">
            <span>★★★★★ 4.8 on DoorDash</span>
            <span className="dot"/>
            <span>Open today · 12—9pm</span>
            <span className="dot"/>
            <span>Gluten-free & dairy-free options</span>
          </div>
        </div>
        <div className="paleta-cluster" aria-hidden="true">
          <div className="paleta paleta-1"/>
          <div className="paleta paleta-2"/>
          <div className="paleta paleta-3"/>
          <div className="drip drip-1"/>
          <div className="drip drip-2"/>
          <div className="drip drip-3"/>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Paletas", "Mangonadas", "Walking Tacos", "Quesabirrias", "Elote", "Raspados", "Horchata", "Mini Pancakes"];
  const stars = "★";
  const row = (
    <span>
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {it} <span className="star">{stars}</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {row}{row}{row}{row}
      </div>
    </div>
  );
}

function Builder() {
  return (
    <section className="builder" data-screen-label="04 Mangonada Builder">
      <div className="wrap">
        <MangonadaBuilder/>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="story" id="story" data-screen-label="05 Our Story">
      <div className="wrap story-grid">
        <div>
          <div className="sec-eyebrow"><span className="bar"/><span className="eyebrow">Our story</span></div>
          <h2 className="display">A little taste<br/>of Mexico,<br/>in Marshall.</h2>
          <p style={{fontSize:18,opacity:.8,maxWidth:480,margin:'24px 0',textWrap:'pretty'}}>
            Vanessa Leon opened La Michoacana Elite to share the experience of a Mexican neighborhood ice cream shop with her community — a place where families gather, kids pick paletas off the wall, and afternoons stretch a little longer.
          </p>
          <blockquote className="story-quote">
            It's more like an experience. We try to bring a little taste of what Mexico's treats look like — a place where families can gather.
            <span className="story-quote-attr">— Vanessa Leon, Owner</span>
          </blockquote>
          <a href="#visit" className="btn btn-secondary">Come say hi</a>
        </div>
        <div className="story-photos">
          <div className="story-photo story-photo-1">
            <span className="story-photo-label">[ shop interior ]</span>
          </div>
          <div className="story-photo story-photo-2">
            <span className="story-photo-label">[ vanessa portrait ]</span>
          </div>
          <div className="story-photo story-photo-3">
            <span className="story-photo-label">[ paleta wall ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="reviews" data-screen-label="06 Reviews">
      <div className="wrap">
        <div className="reviews-head">
          <div>
            <div className="sec-eyebrow"><span className="bar"/><span className="eyebrow">What people say</span></div>
            <h2 className="display">The reviews are<br/><em>in.</em></h2>
          </div>
          <div className="reviews-rating">
            <div className="big">4.8 <span className="stars">★★★★★</span></div>
            <span style={{opacity:.7,marginTop:6}}>across 200+ reviews</span>
          </div>
        </div>
        <ReviewsCarousel/>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section className="visit" id="visit" data-screen-label="07 Visit & Order">
      <div className="wrap visit-grid">
        <div>
          <div className="sec-eyebrow"><span className="bar" style={{background:'var(--accent-2)'}}/><span className="eyebrow" style={{color:'var(--paper)',opacity:.7}}>Visit · Order · Hours</span></div>
          <h2 className="display">Come on <em>in.</em></h2>

          <div className="visit-info">
            <div>
              <span className="label">Address</span>
              <div style={{fontFamily:'Fraunces, serif',fontSize:24,fontWeight:600,lineHeight:1.2}}>
                1113 East College Drive<br/>Suite 3, Marshall MN 56258
              </div>
            </div>
            <div>
              <span className="label">Phone</span>
              <a href="tel:5074013162" style={{fontFamily:'Fraunces, serif',fontSize:24,fontWeight:600}}>(507) 401-3162</a>
            </div>
            <div id="order">
              <span className="label">Order online</span>
              <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
                <a href="#" className="btn btn-primary" style={{background:'var(--accent-2)',color:'var(--ink)'}}>DoorDash →</a>
                <a href="#" className="btn btn-secondary" style={{borderColor:'var(--paper)',color:'var(--paper)'}}>Call to order</a>
              </div>
            </div>
            <div>
              <span className="label">Hours</span>
              <div style={{marginTop:8}}>
                <div className="hours-row"><span className="day">Mon — Thu</span><span>12pm — 9pm</span></div>
                <div className="hours-row"><span className="day">Fri — Sat</span><span>12pm — 10pm</span></div>
                <div className="hours-row"><span className="day">Sunday</span><span>1pm — 8pm</span></div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="map">
            <div className="map-pin"/>
          </div>
          <div style={{marginTop:14,fontFamily:'JetBrains Mono, monospace',fontSize:11,letterSpacing:'.15em',textTransform:'uppercase',opacity:.6,textAlign:'center'}}>
            [ google maps embed · 1113 e college dr ]
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-brand">
          <span className="nav-mark"/>
          <span>La Michoacana Elite</span>
        </div>
        <div className="footer-meta">
          © 2026 La Michoacana Elite · Marshall, MN · Made with ❤
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook">f</a>
          <a href="#" aria-label="Instagram">ig</a>
          <a href="#" aria-label="DoorDash">DD</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-palette', t.palette);
    document.body.setAttribute('data-palette', t.palette);
  }, [t.palette]);

  return (
    <div data-palette={t.palette}>
      <Nav/>
      <Hero/>
      <Marquee/>
      <FlavorOfMonth/>
      <Menu/>
      <Builder/>
      <Story/>
      <Reviews/>
      <Visit/>
      <Footer/>

      <TweaksPanel title="Tweaks">
        <TweakSection label="Palette"/>
        <TweakRadio
          label="Vibe"
          value={t.palette}
          options={[
            {value:'festive', label:'Festive'},
            {value:'premium', label:'Elite'},
            {value:'warm',    label:'Warm'},
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <div style={{fontSize:11,opacity:.6,lineHeight:1.4,marginTop:4}}>
          <b>Festive</b> — bold pinks, mango, lime · the default street-food vibe.<br/>
          <b>Elite</b> — dark + gold, lush and premium.<br/>
          <b>Warm</b> — terracotta, ochre, sage · refined Mexican modern.
        </div>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
