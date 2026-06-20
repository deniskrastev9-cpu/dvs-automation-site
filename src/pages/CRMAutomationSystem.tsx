import LeadForm from "../components/LeadForm";
export default function CRMAutomationSystem() {
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
            Organize & Automate Your Business With CRM Systems
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            We build CRM and automation systems that help you track leads,
            follow up faster, and close more deals.
          </p>
        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "50px 20px"
      }}>

        {/* WHY */}
        <ColorSection
          title="Why You Need a CRM System"
          color="#eef2ff"
          accent="#1e3a8a"
        >
          Most small businesses lose customers because leads are scattered across calls,
          texts, emails, and notes. A CRM keeps everything in one place.
        </ColorSection>

        {/* HOW IT WORKS */}
        <ColorSection
          title="How It Works"
          color="#ecfeff"
          accent="#0f766e"
        >
          <div style={{ lineHeight: "2" }}>
            📥 All leads go into one system<br />
            🧠 Organized automatically<br />
            ⚡ Follow-ups triggered instantly<br />
            📊 Track every customer status<br />
            💰 Close more deals with less effort
          </div>
        </ColorSection>

        {/* BENEFITS */}
        <ColorSection
          title="Benefits"
          color="#f0fdf4"
          accent="#166534"
        >
          <ul style={{ lineHeight: "2" }}>
            <li>Centralized lead management</li>
            <li>Automated follow-up workflows</li>
            <li>Better customer tracking</li>
            <li>Higher conversion rates</li>
            <li>Less manual work</li>
          </ul>
        </ColorSection>

        {/* CTA FORM */}
        <LeadForm
          plan="Growth"
          service="CRM Automation System"
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

