export default function MissedCallTextBack() {
  return (
    <div style={{ background: "#f9fafb", minHeight: "100vh", padding: "40px 20px" }}>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>

        {/* HERO */}
        <section style={{ padding: "40px 0" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
            Never Miss Another Customer Call
          </h1>

          <p style={{ fontSize: "18px", color: "#555" }}>
            Automated missed-call text back systems that help service businesses
            capture more leads and respond instantly.
          </p>
        </section>

        {/* CARD */}
        <section style={{ background: "white", padding: "25px", borderRadius: "12px", marginBottom: "25px" }}>
          <h2>Why This Matters</h2>
          <p>
            Missed calls = lost customers. Most businesses cannot respond to every call,
            especially after hours or during busy times.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{ background: "white", padding: "25px", borderRadius: "12px", marginBottom: "25px" }}>
          <h2>How It Works</h2>

          <div style={{ fontSize: "16px", lineHeight: "2" }}>
            Customer calls your business<br />
            ↓<br />
            Call is missed<br />
            ↓<br />
            Automatic text is sent<br />
            ↓<br />
            Customer responds<br />
            ↓<br />
            You capture the lead
          </div>
        </section>

        {/* BENEFITS */}
        <section style={{ background: "white", padding: "25px", borderRadius: "12px", marginBottom: "25px" }}>
          <h2>Benefits</h2>
          <ul>
            <li>Instant response to missed calls</li>
            <li>More leads captured automatically</li>
            <li>Better customer experience</li>
            <li>Higher conversion rates</li>
          </ul>
        </section>

        {/* CTA */}
        <section style={{
          background: "#111",
          color: "white",
          padding: "30px",
          borderRadius: "12px",
          textAlign: "center"
        }}>
          <h2>Ready to Automate Your Missed Calls?</h2>

          <p style={{ margin: "15px 0" }}>
            service@dvsautomationsolutionsllc.com
          </p>

          <a
            href="mailto:service@dvsautomationsolutionsllc.com"
            style={{
              display: "inline-block",
              padding: "12px 20px",
              background: "white",
              color: "black",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "bold"
            }}
          >
            Contact Us
          </a>
        </section>

      </div>
    </div>
  );
}
