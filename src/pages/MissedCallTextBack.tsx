export default function MissedCallTextBack() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO (UNCHANGED STYLE) */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            Never Miss Another Customer Call
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Automated missed-call text back system that helps service businesses
            capture more leads instantly.
          </p>
        </div>
      </section>

      {/* BACKGROUND WRAPPER */}
      <div style={{
        position: "relative",
        overflow: "hidden"
      }}>

        {/* ANIMATED BACKGROUND */}
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f5f7fb, #eef2ff, #f0fdf4)",
          backgroundSize: "400% 400%",
          animation: "gradientMove 12s ease infinite",
          zIndex: -1
        }} />

        {/* CONTENT WRAPPER */}
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "50px 20px"
        }}>

          {/* WHY SECTION */}
          <ColorSection
            title="Why This Matters"
            color="#eef2ff"
            accent="#1e3a8a"
          >
            Every missed call is a potential lost customer. Most businesses
            cannot answer every call during busy hours or after hours.
          </ColorSection>

          {/* HOW IT WORKS */}
          <ColorSection
            title="How It Works"
            color="#ecfeff"
            accent="#0f766e"
          >
            <div style={{ fontSize: "18px", lineHeight: "2.2" }}>
              <Step icon="📞" text="Customer calls your business" />
              <Step icon="❌" text="Call is missed or not answered" />
              <Step icon="💬" text="Automatic text message is sent instantly" />
              <Step icon="📲" text="Customer responds to your message" />
              <Step icon="💰" text="You capture the lead and follow up" />
            </div>
          </ColorSection>

          {/* BENEFITS */}
          <ColorSection
            title="Benefits"
            color="#f0fdf4"
            accent="#166534"
          >
            <ul style={{ lineHeight: "2", fontSize: "16px" }}>
              <li>⚡ Instant response to missed calls</li>
              <li>📈 More leads captured automatically</li>
              <li>🤝 Better customer experience</li>
              <li>💼 More professional communication system</li>
              <li>💰 Higher conversion rates</li>
            </ul>
          </ColorSection>

          {/* CTA */}
          <div style={{
            background: "#0f172a",
            color: "white",
            padding: "50px",
            borderRadius: "16px",
            textAlign: "center",
            marginTop: "40px"
          }}>
            <h2 style={{ fontSize: "30px" }}>
              Ready to Automate Your Missed Calls?
            </h2>

            <p style={{ opacity: 0.85, marginTop: "10px" }}>
              Start capturing more leads instantly.
            </p>

            <a
              href="mailto:service@dvsautomationsolutionsllc.com?subject=Missed Call Automation Inquiry"
              style={{
                display: "inline-block",
                marginTop: "25px",
                padding: "14px 28px",
                background: "white",
                color: "#0f172a",
                borderRadius: "10px",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              Contact Us
            </a>
          </div>

        </div>
      </div>

      {/* COMPONENTS */}
      <ColorSectionImpl />
    </div>
  );
}

/* ================= SECTION COMPONENT ================= */

function ColorSection({ title, children, color, accent }: any) {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>

      {/* glow background */}
      <div style={{
        position: "absolute",
        inset: "-6px",
        background: color,
        borderRadius: "18px",
        zIndex: 0,
        opacity: 0.9
      }} />

      {/* card */}
      <div style={{
        position: "relative",
        padding: "30px",
        borderRadius: "16px",
        borderLeft: `6px solid ${accent}`,
        background: "white",
        boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
        zIndex: 1
      }}>
        <h2 style={{ color: accent, marginBottom: "15px" }}>
          {title}
        </h2>
        <div style={{ color: "#111" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

/* ================= STEPS ================= */

function Step({ icon, text }: any) {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "10px 0"
    }}>
      <span style={{ fontSize: "20px" }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

/* ================= ANIMATION ================= */

function ColorSectionImpl() {
  return (
    <style>
      {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}
    </style>
  );
}

