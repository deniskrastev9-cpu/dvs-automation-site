import { useState } from "react";

export default function LeadForm({ plan, service }) {
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

    payload.append("plan", plan || "");
    payload.append("service", service || "");
    payload.append("name", data.get("name") || "");
    payload.append("phone", data.get("phone") || "");
    payload.append("message", data.get("message") || "");

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxvIcZaKHNPusVo1_UH_gphgJozSDyVsDwVZxUHkOsshGw1-20pCs2TiDkaRR4obkCjlQ/exec",
        {
          method: "POST",
          body: payload
        }
      );

      const text = await res.text();

      if (text.trim().toLowerCase().includes("success")) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }

    } catch (err) {
      setError(true);
    }

    setLoading(false);

    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 4000);
  };

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
    input: {
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      fontSize: "16px",
      backgroundColor: "#ffffff",
      color: "#111827",
      WebkitTextFillColor: "#111827",
      caretColor: "#111827"
    },
    textarea: {
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      outline: "none",
      minHeight: "100px",
      fontSize: "16px",
      backgroundColor: "#ffffff",
      color: "#111827",
      WebkitTextFillColor: "#111827",
      caretColor: "#111827"
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

  return (
    <div style={styles.wrapper}>
      <h2>Get Started</h2>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input name="name" placeholder="Full Name" required style={styles.input} />
        <input name="phone" placeholder="Phone Number" required style={styles.input} />
        <textarea name="message" placeholder="Message" style={styles.textarea} />

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Sending..." : "Send Request"}
        </button>
      </form>

      {success && <div style={styles.success}>✅ Sent successfully</div>}
      {error && <div style={styles.error}>❌ Something went wrong</div>}
    </div>
  );
}
