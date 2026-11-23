
export default function RSVP() {
  return (
    <section className="scene rsvp-scene" id="rsvp" data-parallax>
      <div
        className="scene-photo"
        style={{
          "--scene-image":
            "url('https://www.elegantjourneys.com/repositery/blog/wedding-venue-jaipur.jpeg')",
        }}
      />

      <div className="scene-shade" />

      <div className="scene-content">
        <p className="eyebrow reveal">
          Your Presence Is Our Present
        </p>

        <h2 className="display-title reveal">
          Kindly <em>RSVP</em>
        </h2>

        <div className="fine-line reveal" />

        <p className="invitation-copy reveal">
          We would be delighted to celebrate with you.
          <br />
          Please share your wishes and confirm your presence.
        </p>

        <button
          className="gold-button reveal"
          id="mainRsvp"
          type="button"
        >
          Confirm Your Attendance ↗
        </button>

        <p className="family-label reveal contact-head">
          FOR RSVP &amp; ENQUIRIES
        </p>

        <p className="rsvp-people reveal">
          Shriom Sharma · Hariom Sharma
          <br />
          Ramakant · Vikash · Abhishek · Hardik
        </p>

        <div className="phone-list reveal">
          <a href="tel:+917014921070">7014921070</a>
          <a href="tel:+919891448939">9891448939</a>
          <a href="tel:+919818450505">9818450505</a>
          <a href="tel:+918952025295">8952025295</a>
          <a href="tel:+918882147702">8882147702</a>
        </div>
      </div>
    </section>
  );
}
