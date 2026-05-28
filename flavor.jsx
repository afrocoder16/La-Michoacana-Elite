function FlavorOfMonth() {
  const promo = window.FEATURED_PROMO;
  if (!promo) return null;

  const meta = [
    { label: promo.meta_1_label, value: promo.meta_1_value },
    { label: promo.meta_2_label, value: promo.meta_2_value },
    { label: promo.meta_3_label, value: promo.meta_3_value },
  ].filter((item) => item.label && item.value);

  const items = [
    {
      name: promo.item_1_name,
      description: promo.item_1_description,
      highlight: promo.item_1_highlight,
    },
    promo.item_2_name
      ? {
          name: promo.item_2_name,
          description: promo.item_2_description,
          highlight: promo.item_2_highlight,
        }
      : null,
  ].filter(Boolean);

  return (
    <section
      className="fom"
      id="flavor"
      data-screen-label="02 Promo Spotlight"
      style={{
        padding: "96px 24px",
        background: "linear-gradient(160deg, #1a0c15 0%, #120916 58%, #0f1c0b 100%)",
        color: "#fff6e5",
      }}
    >
      <div
        className="wrap"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          borderRadius: 28,
          border: "1px solid rgba(255,246,229,0.16)",
          background: "linear-gradient(145deg, rgba(24,14,21,0.98), rgba(11,8,14,0.98))",
          boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
          padding: 40,
        }}
      >
        <div
          className="fom-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) minmax(320px,440px)",
            gap: 32,
            alignItems: "center",
          }}
        >
          <div className="fom-copy" style={{display: "flex", flexDirection: "column", gap: 22}}>
            <div className="sec-eyebrow" style={{marginBottom: 0}}>
              <span className="bar" />
              <span className="eyebrow">{promo.eyebrow}</span>
            </div>

            <div style={{display: "flex", flexWrap: "wrap", gap: 10}}>
              <span
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,246,229,0.18)",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                }}
              >
                {promo.status_label}
              </span>
              <span
                style={{
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "var(--accent-1)",
                  color: "#fff",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                }}
              >
                {promo.urgency_badge}
              </span>
            </div>

            <h2
              className="fom-name"
              style={{
                margin: 0,
                fontFamily: "Fraunces, serif",
                fontWeight: 900,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                textTransform: "uppercase",
              }}
            >
              <span style={{display: "block"}}>{promo.headline_top}</span>
              <span style={{display: "block", color: "var(--accent-1)", fontStyle: "italic"}}>
                {promo.headline_accent}
              </span>
              <span style={{display: "block", color: "var(--accent-3)"}}>{promo.headline_bottom}</span>
            </h2>

            <p style={{margin: 0, maxWidth: 560, fontSize: 18, lineHeight: 1.55, opacity: 0.84}}>
              {promo.summary}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 12,
              }}
            >
              {meta.map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 14px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,246,229,0.12)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      opacity: 0.62,
                      marginBottom: 8,
                    }}
                  >
                    {item.label}
                  </div>
                  <div style={{fontFamily: "Fraunces, serif", fontWeight: 800, fontSize: 22}}>{item.value}</div>
                </div>
              ))}
            </div>

            <div style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 14}}>
              {items.map((item, index) => (
                <article
                  key={item.name}
                  style={{
                    padding: "18px 18px 16px",
                    borderRadius: 18,
                    background: "linear-gradient(160deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,246,229,0.12)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".18em",
                      textTransform: "uppercase",
                      color: index === 0 ? "var(--accent-3)" : "var(--accent-2)",
                      marginBottom: 10,
                    }}
                  >
                    {index === 0 ? "Featured item" : "Bonus pick"}
                  </div>
                  <h3 style={{margin: "0 0 10px 0", fontFamily: "Fraunces, serif", fontWeight: 900, fontSize: 28}}>
                    {item.name}
                  </h3>
                  <p style={{margin: "0 0 12px 0", fontSize: 15, lineHeight: 1.45, opacity: 0.78}}>
                    {item.description}
                  </p>
                  <div
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: ".16em",
                      textTransform: "uppercase",
                      color: "var(--accent-2)",
                    }}
                  >
                    {item.highlight}
                  </div>
                </article>
              ))}
            </div>

            <div className="hero-ctas" style={{marginTop: 2}}>
              <a href={promo.primary_cta_href} className="btn btn-primary">
                {promo.primary_cta_label}
              </a>
              <a href={promo.secondary_cta_href} className="btn btn-secondary">
                {promo.secondary_cta_label}
              </a>
            </div>
          </div>

          <div className="fom-visual" style={{position: "relative"}}>
            <div
              style={{
                position: "absolute",
                top: -14,
                right: 18,
                padding: "12px 16px",
                borderRadius: 999,
                background: "var(--accent-1)",
                color: "#fff",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                transform: "rotate(7deg)",
              }}
            >
              {promo.urgency_badge}
            </div>
            <div
              style={{
                borderRadius: 28,
                padding: 14,
                background: "linear-gradient(135deg, rgba(255,46,147,0.32), rgba(199,255,47,0.18))",
                transform: "rotate(2deg)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={promo.hero_image_src}
                alt={promo.hero_image_alt}
                style={{
                  width: "100%",
                  display: "block",
                  borderRadius: 20,
                  border: "2px solid rgba(255,246,229,0.9)",
                  background: "#120b14",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.FlavorOfMonth = FlavorOfMonth;
