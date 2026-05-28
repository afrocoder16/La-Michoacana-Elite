// Reviews carousel

function ReviewsCarousel() {
  const [idx, setIdx] = React.useState(0);
  const total = REVIEWS.length;
  const visible = 3;

  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  const go = (n) => setIdx((n + total) % total);

  return (
    <div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3, 1fr)',gap:20}} className="rev-grid">
        {[0,1,2].map(off => {
          const r = REVIEWS[(idx + off) % total];
          return (
            <div key={off} style={{
              background:'var(--paper)',
              border:'1.5px solid var(--ink)',
              borderRadius:20,padding:24,
              display:'flex',flexDirection:'column',gap:14,
              transform:`rotate(${off === 1 ? 0 : (off === 0 ? -1 : 1)}deg)`,
              transition:'transform .3s',
            }}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <div style={{color:'var(--accent-2)',fontSize:18,letterSpacing:2}}>
                  {'★'.repeat(r.rating)}{'☆'.repeat(5-r.rating)}
                </div>
                <span className="mono" style={{fontSize:10,letterSpacing:'.15em',textTransform:'uppercase',opacity:.6}}>{r.source}</span>
              </div>
              <p style={{margin:0,fontFamily:'Fraunces, serif',fontSize:19,lineHeight:1.35,fontWeight:500,textWrap:'pretty'}}>
                "{r.text}"
              </p>
              <div style={{marginTop:'auto',display:'flex',alignItems:'center',gap:10,paddingTop:10,borderTop:'1px solid var(--line)'}}>
                <div style={{
                  width:32,height:32,borderRadius:'50%',
                  background:`linear-gradient(135deg, var(--accent-${1 + (off%4)}), var(--accent-${1 + ((off+1)%4)}))`,
                  border:'1.5px solid var(--ink)',
                }}/>
                <span style={{fontWeight:600,fontSize:14}}>{r.name}</span>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`@media (max-width:900px){.rev-grid{grid-template-columns:1fr 1fr !important}} @media (max-width:600px){.rev-grid{grid-template-columns:1fr !important}}`}</style>

      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:32,gap:16,flexWrap:'wrap'}}>
        <div style={{display:'flex',gap:6}}>
          {REVIEWS.map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Review ${i+1}`} style={{
              appearance:'none',cursor:'pointer',border:0,
              width: i === idx ? 28 : 8,height:8,borderRadius:999,
              background: i === idx ? 'var(--ink)' : 'rgba(42,24,16,.25)',
              transition:'all .3s',padding:0,
            }}/>
          ))}
        </div>
        <div style={{display:'flex',gap:8}}>
          <button onClick={() => go(idx-1)} aria-label="Previous" style={{
            appearance:'none',cursor:'pointer',
            width:44,height:44,borderRadius:'50%',
            border:'1.5px solid var(--ink)',background:'transparent',color:'var(--ink)',
            fontFamily:'inherit',fontSize:16,
          }}>←</button>
          <button onClick={() => go(idx+1)} aria-label="Next" style={{
            appearance:'none',cursor:'pointer',
            width:44,height:44,borderRadius:'50%',
            border:'1.5px solid var(--ink)',background:'var(--ink)',color:'var(--paper)',
            fontFamily:'inherit',fontSize:16,
          }}>→</button>
        </div>
      </div>
    </div>
  );
}

window.ReviewsCarousel = ReviewsCarousel;
