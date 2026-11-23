
export default function Couple() {
  return (
    <section
      className="scene couple-details"
      id="couple-details"
      data-parallax
    >
      <div
        className="scene-photo"
        style={{
          "--scene-image":
            "url('https://www.weddingsutra.com/images/wedding-images/real_wed/featured/kajal-ajul/kajal-ajul-img29.jpg')",
        }}
      />

      <div className="scene-shade" />

      <div className="scene-content">
        <p className="eyebrow reveal">दो दिलों का शुभ मिलन</p>

        <h2 className="display-title reveal">
          The <em>Happy Couple</em>
        </h2>

        <div className="fine-line reveal" />

        <div className="couple-info reveal">
          {/* BRIDE */}
          <div className="person-card">
            <p className="family-label">THE BRIDE</p>

            <h3>Sweta</h3>

            <p className="family-relation">
              G/D Smt. Shanti Devi Sharma
              <br />
              Wife of Late Sh. Mangelal Ji Sharma
            </p>

            <p className="family-relation">
              D/O Smt. Rekha &amp;
              <br />
              Mr. Hariom Sharma
            </p>

            <p className="family-location">
              (Bagawas Ahiran, District Kotputli (Raj.) Wale)
            </p>
          </div>

          <div className="pair-amp" aria-hidden="true">
            &amp;
          </div>

          {/* GROOM */}
          <div className="person-card">
            <p className="family-label">THE GROOM</p>

            <h3>
              Vikas <span>(Hemchand)</span>
            </h3>

            <p className="family-relation">
              G/S Late Smt. Sarbati Devi &amp;
              <br />
              Late Sh. Ghasilal Ji Iyas
            </p>

            <p className="family-relation">
              S/O Smt. Meena Devi &amp;
              <br />
              Mr. Arvind Ji Sharma
            </p>

            <p className="family-location">
              (Bidara, Shahpura (Raj.) Wale)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
