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
        Get Automated Follow-Up for Your Business
      </h2>

      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Fill out the form and we’ll contact you.
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

          await fetch("https://script.google.com/macros/s/AKfycbwBOuvZvDCYoJ20D7ZxjC9tUMc3W8JIVVO0Y8TGcMicjmK1un00hd1yiluWSXFQXzAtDw/exec", {
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
        <textarea name="message" placeholder="Tell us about your business" style={textareaStyle} />

        <button type="submit" style={buttonStyle}>
          Send Request
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
