export default function MissedCallTextBack() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", background: "#f5f7fb" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            Never Miss Another Customer Call
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Automatic missed-call text back system that helps service businesses
            capture more leads instantly.
          </p>
        </div>
      </section>

      {/* WRAPPER */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px"
      }}>

        {/* SECTION CARD STYLE */}
        <Section title="Why This Matters">
          Every missed call is a potential lost customer. Most businesses
          cannot answer every call during busy hours or after hours.
        </Section>

        <Section title="How It Works">
          <Steps />
        </Section>

        <Section title="Benefits">
          <ul style={{ paddingLeft: "20px", lineHeight: "2" }}>
            <li>Instant response to missed calls</li>
            <li>More leads captured automatically</li>
            <li>Better customer experience</li>
            <li>Higher conversion rates</li>
          </ul>
        </Section>

        {/* CTA */}
        <div style={{
          background: "#0f172a",
          color: "white",
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          marginTop: "40px"
        }}>
          <h2 style={{ fontSize: "28px" }}>
            Ready to Automate Your Missed Calls?
          </h2>

          <p style={{ opacity: 0.85 }}>
            Contact us today and start capturing lost leads instantly.
          </p>

          <a
            href="mailto:service@dvsautomationsolutionsllc.com"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              background: "white",
              color: "#0f172a",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }: any) {
  return (
    <div
      style={{
        background: "white",
        padding: "30px",
        borderRadius: "14px",
        marginBottom: "20px",
        border: "1px solid #e5e7eb",
        boxShadow: "0 4px 12px rgba(0,0,0,0.04)",
        transform: "translateY(0)",
        transition: "0.3s"
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 10px 20px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 4px 12px rgba(0,0,0,0.04)";
      }}
    >
      <h2 style={{
        color: "#1e3a8a",
        marginBottom: "10px"
      }}>
        {title}
      </h2>
      <div style={{ color: "#333", lineHeight: "1.7" }}>
        {children}
      </div>
    </div>
  );
}

function Steps() {
  const steps = [
    "Customer calls your business",
    "Call is missed",
    "Automatic text is sent",
    "Customer responds",
    "You capture the lead"
  ];

  return (
    <div style={{ lineHeight: "2" }}>
      {steps.map((step, i) => (
        <div
          key={i}
          style={{
            padding: "10px 0",
            borderBottom: i !== steps.length - 1 ? "1px solid #eee" : "none"
          }}
        >
          <span style={{ marginRight: "10px" }}>➡️</span>
          {step}
        </div>
      ))}
    </div>
  );
}
