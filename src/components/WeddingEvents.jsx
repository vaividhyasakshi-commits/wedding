
export default function WeddingEvents() {
  const functions = [
    {
      date: "07 DEC · MONDAY",
      name: "Tika",
      time: "4:00 PM",
      venue: [
        "Inderprasat Colony, Ward-7",
        "Near Shiv Mandir, Khori Road",
        "Shahpura - 303103 (Raj.)",
      ],
    },
    {
      date: "10 DEC · THURSDAY",
      name: "Haldi",
      time: "12:15 PM",
    },
    {
      date: "10 DEC · THURSDAY",
      name: "Chak",
      time: "2:00 PM",
    },
    {
      date: "10 DEC · THURSDAY",
      name: "Bhat",
      time: "5:00 PM",
    },
    {
      date: "11 DEC · FRIDAY",
      name: "Swagat Barat",
      time: "5:00 PM",
    },
    {
      date: "12 DEC · SATURDAY",
      name: "Doli",
      time: "Taroon Ki Chhaya Mein",
    },
  ];

  return (
    <section className="scene events" id="events" data-parallax>
      <div
        className="scene-photo"
        style={{
          "--scene-image":
            "url('https://weddingsandeventsbyamitesh.com/public/assets/img/1%20%284%29.webp')",
        }}
      />

      <div className="scene-shade" />

      <div className="scene-content">
        <p className="eyebrow reveal">शुभ विवाह कार्यक्रम</p>

        <h2 className="display-title reveal">
          Wedding <em>Celebrations</em>
        </h2>

        <div className="fine-line reveal" />

        <p className="invitation-copy event-intro reveal">
          Join us for these cherished moments
        </p>

        <div className="events-grid">
          {functions.map((event) => (
            <article
              className={`event-card reveal ${
                event.name === "Tika" ? "tika-card" : ""
              }`}
              key={event.name}
            >
              <span>{event.date}</span>

              <h3>{event.name}</h3>

              <p>{event.time}</p>

              {event.venue && (
                <div className="event-venue">
                  <strong>VENUE</strong>

                  {event.venue.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>

        <p className="family-label reveal countdown-label">
          COUNTDOWN TO SWAGAT BARAT · 11 DECEMBER, 5 PM
        </p>

        <div
          className="countdown reveal"
          role="timer"
          aria-label="Countdown to Swagat Barat"
        >
          <div className="countdown-box">
            <strong id="days">00</strong>
            <span>DAYS</span>
          </div>

          <div className="countdown-box">
            <strong id="hours">00</strong>
            <span>HOURS</span>
          </div>

          <div className="countdown-box">
            <strong id="minutes">00</strong>
            <span>MINUTES</span>
          </div>

          <div className="countdown-box">
            <strong id="seconds">00</strong>
            <span>SECONDS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
