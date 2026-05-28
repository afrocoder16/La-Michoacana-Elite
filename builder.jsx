// Mangonada Lab — interactive builder with side-view glass that fills layer-by-layer + receipt

const STEPS = [
  {
    key: "base",
    no: "01",
    title: "Choose your base",
    sub: "Start cold. Pick the canvas.",
    items: [
      { id:"mango",     label:"Mango Sorbet",      sub:"sweet · sunny",  price:5.00, color:"#FFB627", default:true },
      { id:"strawberry",label:"Strawberry Sorbet", sub:"berry · pink",   price:5.00, color:"#FF6BB0" },
      { id:"watermelon",label:"Sandía Ice",        sub:"juicy · light",  price:4.50, color:"#FF6B7A" },
      { id:"pineapple", label:"Piña Ice",          sub:"tropical · tart",price:4.50, color:"#FFE08A" },
    ],
  },
  {
    key: "fruit",
    no: "02",
    title: "Pile on the fruit",
    sub: "Real, fresh, hand-cut.",
    multi: true,
    items: [
      { id:"mango-chunks",     label:"Mango",       sub:"diced",  price:1.00, color:"#FFB627", default:true },
      { id:"strawberry-chunks",label:"Strawberry",  sub:"halved", price:1.00, color:"#FF2E93" },
      { id:"kiwi",             label:"Kiwi",        sub:"sliced", price:1.25, color:"#7DD957" },
      { id:"watermelon-chunks",label:"Watermelon",  sub:"cubed",  price:1.00, color:"#FF6B7A" },
      { id:"pineapple-chunks", label:"Pineapple",   sub:"cubed",  price:1.00, color:"#FFE08A" },
    ],
  },
  {
    key: "sauce",
    no: "03",
    title: "The chamoy moment",
    sub: "Sauce, spice, salt. The soul.",
    multi: true,
    items: [
      { id:"chamoy",   label:"Chamoy",         sub:"sweet-tart",  price:0.50, color:"#D7263D", default:true },
      { id:"tajin",    label:"Tajín",          sub:"chili-lime",  price:0.50, color:"#C0392B", default:true },
      { id:"valentina",label:"Valentina",      sub:"hot · vinegar",price:0.50,color:"#A01B30" },
      { id:"lime",     label:"Lime juice",     sub:"fresh",       price:0.25, color:"#7DD957" },
      { id:"condensed",label:"Lechera",        sub:"sweet milk",  price:0.50, color:"#FFF6E5" },
    ],
  },
  {
    key: "topper",
    no: "04",
    title: "Crown it",
    sub: "Make it yours.",
    multi: true,
    items: [
      { id:"tamarind-straw",label:"Tamarindo straw", sub:"chili-coated", price:1.00, color:"#8B4513", default:true },
      { id:"gummy",         label:"Gummy worms",      sub:"chamoy-coated",price:0.75, color:"#FF2E93" },
      { id:"rim",           label:"Chili-salt rim",   sub:"crunchy",      price:0.50, color:"#D7263D" },
      { id:"whip",          label:"Whipped cream",    sub:"cloud",        price:0.50, color:"#FFF6E5" },
      { id:"sprinkle",      label:"Rainbow sprinkle", sub:"festive",      price:0.25, color:"#7DD957" },
    ],
  },
];

function MangonadaBuilder() {
  const [step, setStep] = React.useState(0);
  const [picks, setPicks] = React.useState(() => {
    const init = {};
    STEPS.forEach(s => {
      init[s.key] = s.items.filter(i => i.default).map(i => i.id);
    });
    return init;
  });
  const [printed, setPrinted] = React.useState(false);

  const toggle = (stepDef, id) => {
    setPicks(prev => {
      const cur = prev[stepDef.key] || [];
      if (stepDef.multi) {
        const next = cur.includes(id) ? cur.filter(x => x !== id) : [...cur, id];
        return { ...prev, [stepDef.key]: next };
      }
      return { ...prev, [stepDef.key]: [id] };
    });
  };

  const allItems = STEPS.flatMap(s => (picks[s.key] || []).map(id => {
    const it = s.items.find(i => i.id === id);
    return it ? { ...it, step: s.key, stepNo: s.no } : null;
  }).filter(Boolean));

  const subtotal = allItems.reduce((sum, i) => sum + i.price, 0);
  const tax = subtotal * 0.0775;
  const total = subtotal + tax;

  const baseColor = (() => {
    const id = (picks.base || [])[0];
    return STEPS[0].items.find(i => i.id === id)?.color || "#FFB627";
  })();

  const fruitItems = (picks.fruit || []).map(id => STEPS[1].items.find(i => i.id === id)).filter(Boolean);
  const sauceItems = (picks.sauce || []).map(id => STEPS[2].items.find(i => i.id === id)).filter(Boolean);
  const topperItems = (picks.topper || []).map(id => STEPS[3].items.find(i => i.id === id)).filter(Boolean);

  // Layer fill heights (percent of glass height)
  const baseFill = (picks.base || []).length > 0 ? 70 : 0;

  const orderId = React.useMemo(() => {
    return Math.floor(10000 + Math.random()*89999);
  }, []);

  return (
    <div className="lab">
      <div className="lab-head">
        <div>
          <div className="sec-eyebrow"><span className="bar"/><span className="eyebrow">The Mangonada Lab</span></div>
          <h2 className="display lab-title">
            Build it <em>your way.</em><br/>
            Print the recipe.<br/>
            Bring it to the counter.
          </h2>
        </div>
        <div className="lab-progress" role="tablist">
          {STEPS.map((s, i) => (
            <button
              key={s.key}
              role="tab"
              className={"lab-step-btn" + (i === step ? ' is-active' : '') + (i < step ? ' is-done' : '')}
              onClick={() => setStep(i)}
            >
              <span className="lab-step-no">{s.no}</span>
              <span className="lab-step-name">{s.title.replace(/^\w+\s/, '')}</span>
              <span className="lab-step-count">{(picks[s.key] || []).length}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="lab-stage">
        {/* Left: ingredient picker */}
        <div className="lab-picker">
          <div className="lab-step-head">
            <div className="lab-step-no-big">{STEPS[step].no}</div>
            <div>
              <h3 className="lab-step-title">{STEPS[step].title}</h3>
              <p className="lab-step-sub">{STEPS[step].sub}</p>
            </div>
          </div>

          <div className="lab-grid">
            {STEPS[step].items.map(it => {
              const on = (picks[STEPS[step].key] || []).includes(it.id);
              return (
                <button key={it.id} onClick={() => toggle(STEPS[step], it.id)}
                        className={"lab-card" + (on ? ' is-on' : '')}>
                  <div className="lab-card-swatch" style={{background:it.color}}/>
                  <div className="lab-card-body">
                    <div className="lab-card-title">{it.label}</div>
                    <div className="lab-card-sub">{it.sub}</div>
                  </div>
                  <div className="lab-card-meta">
                    <span className="lab-card-price">+${it.price.toFixed(2)}</span>
                    <span className="lab-card-check">{on ? '✓' : '+'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lab-nav">
            <button className="lab-nav-btn" disabled={step === 0} onClick={() => setStep(s => Math.max(0, s-1))}>← Back</button>
            <div className="lab-nav-dots">
              {STEPS.map((_, i) => (
                <span key={i} className={"lab-dot" + (i === step ? ' is-active' : '')}/>
              ))}
            </div>
            {step < STEPS.length - 1 ? (
              <button className="lab-nav-btn lab-nav-next" onClick={() => setStep(s => Math.min(STEPS.length-1, s+1))}>Next →</button>
            ) : (
              <button className="lab-nav-btn lab-nav-next" onClick={() => setPrinted(true)}>Print recipe ↓</button>
            )}
          </div>
        </div>

        {/* Center: the glass */}
        <div className="lab-glass-wrap">
          <div className="lab-glass-stage">
            {/* Toppers above */}
            {topperItems.find(t => t.id === 'whip') && (
              <div className="lab-whip"/>
            )}
            {topperItems.find(t => t.id === 'sprinkle') && (
              <div className="lab-sprinkles">
                {Array.from({length:14}).map((_,i)=>(
                  <span key={i} className="lab-sprinkle" style={{
                    left:`${10 + i*6}%`,
                    background:`hsl(${i*40}deg 80% 60%)`,
                    transform:`rotate(${i*30}deg)`,
                    top:`${5 + (i%3)*4}px`,
                  }}/>
                ))}
              </div>
            )}
            {topperItems.find(t => t.id === 'gummy') && (
              <>
                <div className="lab-gummy lab-gummy-1"/>
                <div className="lab-gummy lab-gummy-2"/>
                <div className="lab-gummy lab-gummy-3"/>
              </>
            )}
            {topperItems.find(t => t.id === 'tamarind-straw') && (
              <div className="lab-straw"/>
            )}

            <div className="lab-glass">
              <div className="lab-glass-rim">
                {topperItems.find(t => t.id === 'rim') && <div className="lab-rim-spice"/>}
              </div>

              {/* Fill layers */}
              <div className="lab-fill" style={{height:`${baseFill}%`,background:`linear-gradient(180deg, ${baseColor} 0%, color-mix(in oklab, ${baseColor} 60%, #D7263D) 100%)`}}>
                {/* Sauce drizzles inside the fill */}
                {sauceItems.map((s, i) => (
                  <div key={s.id} className="lab-drizzle" style={{
                    left:`${10 + i*18}%`,
                    background:s.color,
                    height:`${60 + i*6}%`,
                    animationDelay:`${i*0.3}s`,
                  }}/>
                ))}
                {/* Fruit chunks */}
                {fruitItems.flatMap((f, fi) =>
                  [0,1,2,3].map(j => (
                    <div key={`${f.id}-${j}`} className="lab-chunk" style={{
                      background:f.color,
                      left:`${8 + ((fi*9 + j*22) % 78)}%`,
                      bottom:`${6 + ((fi*13 + j*17) % 65)}%`,
                      transform:`rotate(${(fi*40+j*55)}deg)`,
                      animationDelay:`${(fi+j)*0.1}s`,
                    }}/>
                  ))
                )}
              </div>

              {/* Glass shine */}
              <div className="lab-shine"/>
            </div>

            {/* Puddle below */}
            <div className="lab-puddle" style={{background:baseColor}}/>
          </div>

          <div className="lab-glass-meta">
            <div><span>BASE</span><b style={{background:baseColor,width:18,height:18,borderRadius:4,display:'inline-block',verticalAlign:'middle',border:'1.5px solid var(--ink)'}}/></div>
            <div><span>FRUIT</span><b>×{fruitItems.length}</b></div>
            <div><span>SAUCE</span><b>×{sauceItems.length}</b></div>
            <div><span>TOPPERS</span><b>×{topperItems.length}</b></div>
          </div>
        </div>

        {/* Right: receipt */}
        <div className={"lab-receipt" + (printed ? ' is-printed' : '')}>
          <div className="lab-receipt-perf-top"/>
          <div className="lab-receipt-head">
            <div className="lab-receipt-logo">
              <span className="nav-mark"/>
              <b>LA MICHOACANA<br/>ELITE</b>
            </div>
            <div className="lab-receipt-addr">
              1113 E COLLEGE DR · MARSHALL MN<br/>
              (507) 401-3162<br/>
              <span>ORDER #{orderId} · BUILD-YOUR-OWN</span>
            </div>
          </div>
          <div className="lab-receipt-divider"/>
          <div className="lab-receipt-items">
            {STEPS.map(s => {
              const items = (picks[s.key] || []).map(id => s.items.find(i => i.id === id)).filter(Boolean);
              if (items.length === 0) return null;
              return (
                <div key={s.key} className="lab-receipt-section">
                  <div className="lab-receipt-section-label">{s.no} · {s.title.toUpperCase()}</div>
                  {items.map(it => (
                    <div key={it.id} className="lab-receipt-line">
                      <span>{it.label}</span>
                      <span className="lab-receipt-dots"/>
                      <span>${it.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
          <div className="lab-receipt-divider"/>
          <div className="lab-receipt-totals">
            <div className="lab-receipt-line"><span>Subtotal</span><span className="lab-receipt-dots"/><span>${subtotal.toFixed(2)}</span></div>
            <div className="lab-receipt-line"><span>Tax (7.75%)</span><span className="lab-receipt-dots"/><span>${tax.toFixed(2)}</span></div>
            <div className="lab-receipt-line lab-receipt-total"><span>TOTAL</span><span className="lab-receipt-dots"/><span>${total.toFixed(2)}</span></div>
          </div>
          <div className="lab-receipt-divider"/>
          <div className="lab-receipt-thanks">
            ¡GRACIAS!<br/>
            <span>Show this to the counter</span>
          </div>
          <div className="lab-receipt-barcode">
            {Array.from({length:32}).map((_,i)=>(
              <span key={i} className="lab-bar" style={{width: (i%3===0?3:1)+'px',height: 32+(i%4)*4+'px'}}/>
            ))}
          </div>
          <div className="lab-receipt-perf-bot"/>
        </div>
      </div>
    </div>
  );
}

window.MangonadaBuilder = MangonadaBuilder;
