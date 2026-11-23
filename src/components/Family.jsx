
export default function Family() {
  const members = [
    "Shri Om Sharma",
    "Hariom Sharma",
    "Pawan Sharma",
    "Vikas Sharma",
    "Abhishek Sharma",
    "Hardik Sharma",
  ];

  return (
    <section className="scene family" id="family" data-parallax>
      <div
        className="scene-photo"
        style={{
          "--scene-image":
            "url('https://www.shaadipath.com/blog/assets/images/best-destination-wedding-places-india-03-planning.webp')",
        }}
      />

      <div className="scene-shade" />

      <div className="scene-content">
        <p className="eyebrow reveal">
          With the Blessings of Our Elders
        </p>

        <h2 className="display-title reveal">
          The <em>Family</em>
        </h2>

        <div className="fine-line reveal" />

        <p className="family-label reveal">
          WITH LOVE &amp; WARM REGARDS FROM
        </p>

        <div className="family-list">
          {members.map((name) => (
            <div className="family-person reveal" key={name}>
              {name}
            </div>
          ))}
        </div>

        <p className="family-footer reveal">
          Together, we request the honour of your presence.
        </p>
      </div>
    </section>
  );
}
