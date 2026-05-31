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
        <AiLeadForm />

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

/* ================= LEAD FORM ================= */

function AiLeadForm() {
  return (
    <div style={{
      background: "#111827",
      color: "white",
      padding: "40px",
      borderRadius: "16px",
      marginTop: "40px"
    }}>

      <h2 style={{ textAlign: "center", fontSize: "28px" }}>
        Get Your AI Receptionist Setup
      </h2>

      <p style={{ textAlign: "center", opacity: 0.8 }}>
        We’ll show you how many calls you’re losing and automate them.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const form = e.target as HTMLFormElement;
          const data = new FormData(form);

          const payload = {
        plan: "Pro",
        service: "AI Receptionist",
        name: data.get("name"),
        business: data.get("business"),
        phone: data.get("phone"),
        message: data.get("message"),
      };
      console.log("SENDING PAYLOAD:",payload);

      await fetch(
        "https://script.google.com/macros/s/AKfycbwXMqSGZoQhOJ_I5gglGPXC3UgxXEAuQZ5Nk855S4OxpiXPXyKKGYlfDrRrPtQnaX1sEg/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

          alert("Request sent successfully!");
          form.reset();
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px"
        }}
      >

        <input name="name" placeholder="Your Name" required style={inputStyle} />
        <input name="business" placeholder="Business Name" required style={inputStyle} />
        <input name="phone" placeholder="Phone Number" required style={inputStyle} />
        <textarea name="message" placeholder="What do you need help with?" style={textareaStyle} />

        <button type="submit" style={buttonStyle}>
          Get AI Receptionist
        </button>

      </form>
    </div>
  );
}

/* ================= STYLES ================= */

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  backgroundColor: "#ffffff",
  color: "#111827",
  width: "100%",
  fontSize: "16px"
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  backgroundColor: "#ffffff",
  color: "#111827",
  width: "100%",
  minHeight: "120px",
  fontSize: "16px"
};

const buttonStyle = {
  padding: "14px",
  borderRadius: "8px",
  border: "none",
  background: "white",
  color: "#111827",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};
