import LeadForm from "./components/LeadForm";
export default function CustomerFollowUpAutomation() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "15px" }}>
            Turn Missed Leads Into Paying Customers
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Automated follow-up system that texts, nurtures, and converts leads
            so you never lose a potential customer again.
          </p>
        </div>
      </section>

      {/* BACKGROUND WRAPPER */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px"
      }}>

        {/* WHY */}
        <ColorSection
          title="Why Follow-Up Matters"
          color="#eef2ff"
          accent="#1e3a8a"
        >
          Most businesses lose 50–80% of leads because they don’t follow up fast enough.
          Speed is the difference between winning or losing a customer.
        </ColorSection>

        {/* HOW IT WORKS */}
        <ColorSection
          title="How It Works"
          color="#ecfeff"
          accent="#0f766e"
        >
          <div style={{ lineHeight: "2" }}>
            📩 Lead comes in instantly<br />
            ⚡ Automated SMS sent immediately<br />
            🔁 Follow-up reminders scheduled<br />
            💬 Two-way conversation starts<br />
            💰 Customer converts automatically
          </div>
        </ColorSection>

        {/* BENEFITS */}
        <ColorSection
          title="Benefits"
          color="#f0fdf4"
          accent="#166534"
        >
          <ul style={{ lineHeight: "2" }}>
            <li>Higher conversion rates</li>
            <li>Faster response time</li>
            <li>Automated lead nurturing</li>
            <li>More booked jobs</li>
            <li>Less manual work</li>
          </ul>
        </ColorSection>

        {/* LEAD FORM */}
        <LeadForm
  plan="Growth"
  service="Customer Follow Up Automation"
  />

      </div>
    </div>
  );
}

/* ================= SECTION COMPONENT ================= */

function ColorSection({ title, children, color, accent }: any) {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>

      <div style={{
        position: "absolute",
        inset: "-6px",
        background: color,
        borderRadius: "18px",
        opacity: 0.9
      }} />

      <div style={{
        position: "relative",
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

