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
            We build simple CRM and automation systems that help you track leads,
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
        <LeadForm />

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

/* ================= LEAD FORM ================= */

function LeadForm() {
  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      padding: "40px",
      borderRadius: "16px",
      marginTop: "40px"
    }}>

      <h2 style={{ textAlign: "center", fontSize: "28px" }}>
        Build Your CRM & Automation System
      </h2>

      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Tell us about your business and we’ll set it up.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.target as HTMLFormElement;
          const data = new FormData(form);

          const payload = {
            name: data.get("name"),
            business: data.get("business"),
            phone: data.get("phone"),
            message: data.get("message")
          };

          await fetch("https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec", {
            method: "POST",
            body: JSON.stringify(payload)
          });

          alert("Request sent successfully!");
          form.reset();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          marginTop: "20px"
        }}
      >

        <input name="name" placeholder="Your Name" required style={inputStyle} />
        <input name="business" placeholder="Business Name" required style={inputStyle} />
        <input name="phone" placeholder="Phone Number" required style={inputStyle} />
        <textarea name="message" placeholder="What systems do you need?" style={textareaStyle} />

        <button type="submit" style={buttonStyle}>
          Get CRM System
        </button>

      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none"
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  height: "100px"
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  background: "white",
  color: "#0f172a",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};
