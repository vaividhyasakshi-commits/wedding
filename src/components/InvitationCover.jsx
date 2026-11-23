export default function InvitationCover({open,closing,onOpen}) {
  if(!open) return null;
  return <div className={`invitation-cover${closing ? " hide" : ""}`} id="cover">
    <div className="cover-glow" />
    <div className="cover-content ornamental-frame">
      <div className="cover-om">ॐ श्री गणेशाय नमः</div>
      <div className="flourish">✥ ━━━━━ ❈ ━━━━━ ✥</div>
      <p className="cover-verse">विघ्न हरण मंगल करण, श्री गणपति जी महाराज।<br/>प्रथम निमंत्रण आपको, पूरण कीजै काज॥</p>
      <div className="cover-pretitle">THE SANDILYA PARIVAR INVITES YOU</div>
      <h1 className="cover-names"><span className="cover-name">Sweta</span><span className="cover-amp">&amp;</span><span className="cover-name">Vikas</span></h1>
      <p className="cover-subtitle">A Royal Wedding Celebration</p>
      <p className="cover-date">11 December 2026 · Delhi</p>
      <button type="button" className="gold-button" onClick={onOpen}>✉ &nbsp; Open the Invitation &nbsp; ✉</button>
      <small>With love, blessings &amp; togetherness</small>
    </div>
  </div>;
}
