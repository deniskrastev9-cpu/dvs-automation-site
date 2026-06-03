import LeadForm from "../components/LeadForm";
export default function AiReceptionist() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #111827, #1f2937)",
        color: "white",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            AI Receptionist That Never Misses a Call
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.85 }}>
            Answer every customer call instantly, qualify leads, and book appointments — even after hours.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px"
      }}>

        <ColorSection
          title="Why You Need an AI Receptionist"
          color="#eef2ff"
          accent="#111827"
        >
          Most small businesses lose 30–60% of inbound calls because no one answers after hours or during busy times.
        </ColorSection>

        <ColorSection
          title="How It Works"
          color="#ecfeff"
          accent="#0f766e"
        >
          <div style={{ lineHeight: "2" }}>
            📞 Customer calls your business<br />
            🤖 AI answers instantly<br />
            💬 Collects name, service, urgency<br />
            📅 Books appointment or sends lead<br />
            📊 You get full summary instantly
          </div>
        </ColorSection>

        <ColorSection
          title="What You Get"
          color="#f0fdf4"
          accent="#166534"
        >
          <ul style={{ lineHeight: "2" }}>
            <li>24/7 AI phone answering system</li>
            <li>Lead qualification built in</li>
            <li>Appointment booking automation</li>
            <li>Works with your existing number</li>
            <li>Instant SMS/email notifications</li>
          </ul>
        </ColorSection>

        {/* LEAD FORM */}
        {/* CTA FORM */}
<LeadForm
  plan="Pro"
  service="AI Receptionist Automation"
/>

      </div>
    </div>
  );
}

/* ================= SECTION COMPONENT ================= */

function ColorSection({ title, children, color, accent }: any) {
  return (
    <div style={{ position: "relative", marginBottom: "25px" }}>

      <div style={{
        position: "absolute",
        inset: "-6px",
        background: color,
        borderRadius: "18px",
        opacity: 0.9,
        pointerEvents: "none"
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        padding: "30px",
        borderRadius: "16px",
        background: "white",
        borderLeft: `6px solid ${accent}`,
        boxShadow: "0 6px 15px rgba(0,0,0,0.05)"
      }}>
        <h2 style={{ color: accent }}>
          {title}
        </h2>
        <div style={{ color: "#111" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
