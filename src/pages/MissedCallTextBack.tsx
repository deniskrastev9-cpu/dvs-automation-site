import { useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function MissedCallTextBack() {
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
            Never Miss Another Customer Call
          </h1>

          <p style={{ fontSize: "20px", opacity: 0.9 }}>
            Automated missed-call text back system that helps service businesses
            capture more leads instantly.
          </p>
        </div>
      </section>

      {/* BACKGROUND WRAPPER */}
      <div style={{ position: "relative", overflow: "hidden" }}>

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

        {/* CONTENT */}
        <div style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "50px 20px"
        }}>

          {/* WHY */}
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

          {/* LEAD FORM */}
          <LeadForm />

        </div>
      </div>

      {/* STYLES */}
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

/* ================= SECTION ================= */

function ColorSection({ title, children, color, accent }: any) {
  return (
    <div style={{ position: "relative", marginBottom: "20px" }}>

      <div style={{
        position: "absolute",
        inset: "-6px",
        background: color,
        borderRadius: "18px",
        zIndex: 0,
        opacity: 0.9
      }} />

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

/* ================= LEAD FORM ================= */

import { useState } from "react";

function LeadForm() {
  <style>{`
  input, textarea {
    color: #111827 !important;
    -webkit-text-fill-color: #111827 !important;
    background-color: #ffffff !important;
  }

  input::placeholder, textarea::placeholder {
    color: #6b7280 !important;
  }
`}</style>
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setSuccess(false);
    setError(false);

    const payload = new URLSearchParams();

    payload.append("plan", "Starter");
    payload.append("service", "Missed Call Text Back");
    payload.append("name", data.get("name") || "");
    payload.append("phone", data.get("phone") || "");
    payload.append("message", data.get("message") || "");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxvIcZaKHNPusVo1_UH_gphgJozSDyVsDwVZxUHkOsshGw1-20pCs2TiDkaRR4obkCjlQ/exec",
        {
          method: "POST",
          body: payload
        });
      const text = await res.text();
      console.log("RAW RESPONSE >>>", text);
      const clean = text.trim().toLowerCase();

      if (clean.includes("success")) {
        setSuccess(true);
        setError(false);
        form.reset();
      } else {
        console.log("FAILED RESPONSE:", text);
        setError(true);
        setSuccess(false);
      }

    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 4000);
  };

  return (
    <div style={styles.wrapper}>
      
      <h2 style={styles.title}>Get Missed Call Automation Setup</h2>
      <p style={styles.subtitle}>
        Fill out the form and we will contact you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} style={styles.form}>

        <input name="name" placeholder="Full Name" required style={styles.input} />
        <input name="phone" placeholder="Phone Number" required style={styles.input} />
        <textarea name="message" placeholder="Tell us about your business" style={styles.textarea} />

        <button
          type="submit"
          disabled={loading}
          style={{
            ...styles.button,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Sending..." : "Send Request"}
        </button>

      </form>

      {/* SUCCESS POPUP */}
      {success && (
        <div style={styles.success}>
          ✅ Request sent successfully!
        </div>
      )}

      {/* ERROR POPUP */}
      {error && (
        <div style={styles.error}>
          ❌ Something went wrong. Try again.
        </div>
      )}
    </div>
  );
}

const styles = {
  wrapper: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "40px",
    borderRadius: "16px",
    color: "white",
    maxWidth: "600px",
    margin: "40px auto",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },
  title: {
    textAlign: "center",
    fontSize: "26px",
    marginBottom: "10px"
  },
  subtitle: {
    textAlign: "center",
    opacity: 0.8,
    marginBottom: "20px"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "16px"
  },
  textarea: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    minHeight: "100px",
    fontSize: "16px"
  },
  button: {
    padding: "14px",
    borderRadius: "8px",
    border: "none",
    background: "#22c55e",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px"
  },
  success: {
    marginTop: "15px",
    padding: "12px",
    background: "#16a34a",
    borderRadius: "8px",
    textAlign: "center"
  },
  error: {
    marginTop: "15px",
    padding: "12px",
    background: "#dc2626",
    borderRadius: "8px",
    textAlign: "center"
  }
};


/* ================= STYLES ================= */

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: "16px",

  backgroundColor: "#ffffff",
  color: "#111827", // 🔥 visible text
  WebkitTextFillColor: "#111827", // 🔥 fixes Chrome autofill issue

  caretColor: "#111827" // 🔥 ensures cursor is visible
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  outline: "none",
  width: "100%",
  minHeight: "100px",
  fontSize: "16px",

  backgroundColor: "#ffffff",
  color: "#111827", // 🔥 visible text
  WebkitTextFillColor: "#111827", // 🔥 fixes Chrome autofill issue

  caretColor: "#111827" // 🔥 cursor visibility
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
