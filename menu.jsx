// Menu — magazine editorial layout

function Menu() {
  const [tab, setTab] = React.useState("all");
  const [hovered, setHovered] = React.useState(null);
  const filtered = tab === "all" ? MENU : MENU.filter(m => m.cat === tab);

  // Marquee items rotate
  const marqueeItems = MENU.slice(0, 12).map(m => m.name);

  return (
    <section className="menu" id="menu" data-screen-label="03 Menu">
      {/* Magazine header: scrolling type marquee */}
      <div className="mg-marquee">
        <div className="mg-marquee-track">
          {[...marqueeItems, ...marqueeItems].map((n, i) => (
            <span key={i} className="mg-marquee-item">
              {n} <span className="mg-marquee-dot">●</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        <div className="mg-head">
          <div className="mg-head-l">
            <div className="sec-eyebrow"><span className="bar"/><span className="eyebrow">Issue №04 · The full menu</span></div>
            <h2 className="display mg-title">
              <span className="mg-title-1">EAT</span>
              <span className="mg-title-2">·DRINK·</span>
              <span className="mg-title-3">REPEAT</span>
            </h2>
            <p className="mg-deck">
              Eighteen reasons to walk through our door. Made in-house, made fresh, made with the kind of care you can taste.
            </p>
          </div>
          <div className="mg-head-r">
            <div className="mg-stat-block">
              <div className="mg-stat"><b>18</b><span>items on rotation</span></div>
              <div className="mg-stat"><b>04</b><span>bestsellers</span></div>
              <div className="mg-stat"><b>100%</b><span>made in-house</span></div>
            </div>
            <div className="menu-tabs">
              {MENU_CATEGORIES.map(c => (
                <button key={c.id} className={"tab" + (tab === c.id ? " active" : "")} onClick={() => setTab(c.id)}>
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editorial spread */}
        <div className="mg-spread">
          {filtered.map((m, i) => {
            const num = String(i + 1).padStart(2, '0');
            const isHovered = hovered === i;
            const isBest = m.tags.includes('bestseller');
            const isFan = m.tags.includes('fan fave');
            return (
              <article
                key={m.name}
                className={"mg-item" + (isHovered ? ' is-hover' : '') + (isBest || isFan ? ' is-feat' : '')}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  '--c1': m.c1,
                  '--c2': m.c2,
                }}
              >
                <div className="mg-item-no">№{num}</div>

                <div className="mg-item-art">
                  <div className="mg-item-color"/>
                  <span className="mg-float-deco mg-deco-1">✦</span>
                  <span className="mg-float-deco mg-deco-2">●</span>
                  <span className="mg-float-deco mg-deco-3">✦</span>
                  <div className="mg-art-illus">
                    {m.cat === 'paletas' && (
                      <div className="mg-paleta">
                        <div className="mg-paleta-body"/>
                        <div className="mg-paleta-stick"/>
                      </div>
                    )}
                    {(m.cat === 'icecream' || m.cat === 'raspados' || m.cat === 'drinks') && (
                      <div className="mg-cup">
                        <div className="mg-cup-rim"/>
                        <div className="mg-cup-body"/>
                        {m.cat === 'icecream' && <><div className="mg-cup-scoop"/><div className="mg-cup-cherry"/></>}
                        {m.cat === 'raspados' && <div className="mg-cup-scoop"/>}
                      </div>
                    )}
                    {m.cat === 'snacks' && (
                      <div className="mg-plate">
                        <div className="mg-plate-base"/>
                        <div className="mg-plate-food"/>
                        <span className="mg-plate-sprinkle mg-plate-sprinkle-1"/>
                        <span className="mg-plate-sprinkle mg-plate-sprinkle-2"/>
                        <span className="mg-plate-sprinkle mg-plate-sprinkle-3"/>
                      </div>
                    )}
                  </div>
                  <div className="mg-item-stamp">
                    {isBest && <span className="mg-stamp mg-stamp-best">★ BESTSELLER</span>}
                    {isFan && <span className="mg-stamp mg-stamp-fan">FAN FAVE ♥</span>}
                  </div>
                  <div className="mg-item-cat">{m.cat}</div>
                </div>

                <div className="mg-item-info">
                  <h3 className="mg-item-name">{m.name}</h3>
                  <p className="mg-item-desc">{m.desc}</p>
                  <div className="mg-item-foot">
                    <div className="mg-item-tags">
                      {m.tags.filter(t => t !== 'bestseller' && t !== 'fan fave').map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                    <span className="mg-item-price">{m.price}</span>
                  </div>
                </div>

                <div className="mg-item-byline">
                  THE MICHOACANA · ELITE · MARSHALL · MN
                </div>
              </article>
            );
          })}
        </div>

        <div className="mg-foot">
          <span>↓</span>
          <span>Walk in. Order at the counter. Eat where it's coldest.</span>
          <span>↓</span>
        </div>
      </div>
    </section>
  );
}

window.Menu = Menu;
