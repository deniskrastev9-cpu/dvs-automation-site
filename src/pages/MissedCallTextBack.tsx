import LeadForm from "../components/LeadForm";

export default function MissedCallTextBack() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
          color: "white",
          padding: "90px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            Never Miss Another Customer Call
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Automated missed-call text back system that helps service businesses
            respond faster to customer inquiries.
          </p>
        </div>
      </section>

      {/* BACKGROUND WRAPPER */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* ANIMATED BACKGROUND */}
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(135deg, #f5f7fb, #eef2ff, #f0fdf4)",
            backgroundSize: "400% 400%",
            animation: "gradientMove 12s ease infinite",
            zIndex: -1,
          }}
        />

        {/* CONTENT */}
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            padding: "50px 20px",
          }}
        >
          <ColorSection title="Why This Matters" color="#eef2ff" accent="#1e3a8a">
            Every missed call is a potential missed customer request. Most
            businesses cannot answer every call during busy hours or after hours.
          </ColorSection>

          <ColorSection title="How It Works" color="#ecfeff" accent="#0f766e">
            <div style={{ fontSize: "18px", lineHeight: "2.2" }}>
              <Step icon="📞" text="Customer calls your business" />
              <Step icon="❌" text="Call is missed or not answered" />
              <Step icon="💬" text="Automatic text message is sent instantly" />
              <Step icon="📲" text="Customer responds to your message" />
              <Step icon="✅" text="You receive the customer inquiry and follow up" />
            </div>
          </ColorSection>

          <ColorSection title="Benefits" color="#f0fdf4" accent="#166534">
            <ul style={{ lineHeight: "2", fontSize: "16px" }}>
              <li>⚡ Instant response to missed calls</li>
              <li>📩 Customer inquiries received automatically</li>
              <li>🤝 Better customer experience</li>
              <li>💼 More professional communication system</li>
              <li>📅 Faster follow-up and appointment scheduling</li>
            </ul>
          </ColorSection>

          <LeadForm
            plan="Starter"
            service="Missed Call Text Back"
          />
        </div>
      </div>

      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}

function ColorSection({ title, children, color, accent }: any) {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>
      <div
        style={{
          position: "absolute",
          inset: "-6px",
          background: color,
          borderRadius: "18px",
          zIndex: 0,
          opacity: 0.9,
        }}
      />

      <div
        style={{
          position: "relative",
          padding: "30px",
          borderRadius: "16px",
          borderLeft: `6px solid ${accent}`,
          background: "white",
          boxShadow: "0 6px 15px rgba(0,0,0,0.05)",
          zIndex: 1,
        }}
      >
        <h2 style={{ color: accent, marginBottom: "15px" }}>{title}</h2>
        <div style={{ color: "#111" }}>{children}</div>
      </div>
    </div>
  );
}

function Step({ icon, text }: any) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px 0",
      }}
    >
      <span style={{ fontSize: "20px" }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}
