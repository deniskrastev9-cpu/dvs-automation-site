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

function LeadForm() {
  const [searchParams] = useSearchParams();

  const plan = searchParams.get("plan") || "Starter";

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div style={{
      background: "#0f172a",
      color: "white",
      padding: "40px",
      borderRadius: "16px",
      marginTop: "40px"
    }}>

      <h2 style={{ textAlign: "center", fontSize: "28px" }}>
        Get Missed Call Automation Setup
      </h2>

      <p style={{ textAlign: "center", opacity: 0.8 }}>
        Fill out the form and we will contact you.
      </p>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          setLoading(true);
          setSuccess(false);
          setError(false);

          const form = e.currentTarget;
          const data = new FormData(form);

          const payload = {
            plan: plan,
            service: "Missed Call Text Back",
            name: data.get("name"),
            business: data.get("business"),
            phone: data.get("phone"),
            message: data.get("message"),
          };

          try {
            const response = await fetch(
              "https://script.google.com/macros/s/AKfycbyhiLlD_h5HF9zCYK54UnjVCPU8YKnvGlE7Sff6enSW338tOfwLAqbRQp3bf3wDWXVwIQ/exec",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
              }
            );

            const result = await response.text();
            console.log("RESPONSE:", result);
            alert(result);

            if (result.trim() === "success") {
              setSuccess(true);
              form.reset();
            } else {
              setError(true);
            }

          } catch (err) {
            setError(true);
          }

          setLoading(false);
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

        <button
          type="submit"
          disabled={loading}
          style={{
            ...buttonStyle,
            opacity: loading ? 0.6 : 1,
            cursor: loading ? "not-allowed" : "pointer"
          }}
        >
          {loading ? "Sending..." : "Send Request"}
        </button>

        {success && (
          <p style={{ color: "lightgreen", marginTop: "10px" }}>
            ✅ Request sent successfully!
          </p>
        )}

        {error && (
          <p style={{ color: "red", marginTop: "10px" }}>
            ⚠️ Something went wrong. Try again.
          </p>
        )}

      </form>
    </div>
  );
}


/* ================= STYLES ================= */

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
  backgroundColor: "#ffffff",
  color: "#111827",
  width: "100%",
  fontSize: "16px"
};

const textareaStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
  outline: "none",
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
  color: "#0f172a",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px"
};
