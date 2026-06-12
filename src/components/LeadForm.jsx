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

    <h2 style={styles.title}>
  {service?.includes("Homepage")
  ? plan === "First Month Free"
    ? "Claim Your First Month Free"
    : "Request Your Free Automation Consultation"
  : `Get ${service || "Automation"} Setup`}
</h2>

    <p style={styles.subtitle}>
    Fill out the form and we will contact you within 24 hours.
  </p>

  <form onSubmit={handleSubmit} style={styles.form}>
    <input
      name="name"
      placeholder="Full Name"
      required
      style={styles.input}
    />

    <input
      name="phone"
      placeholder="Phone Number"
      required
      style={styles.input}
    />

    <textarea
      name="message"
      placeholder="Tell us about your business"
      style={styles.textarea}
    />
<div className="flex items-start gap-3 mt-4 mb-4">
  <input
    type="checkbox"
    required
    id="smsConsent"
    className="mt-1 w-4 h-4"
  />

  <label
    htmlFor="smsConsent"
    className="text-sm text-gray-300 leading-relaxed"
  >
    I agree to receive SMS messages from DVS Automation Solutions LLC
    regarding my inquiry, requested services, appointment scheduling,
    and customer support. Message frequency varies. Message and data
    rates may apply. Reply STOP to opt out and HELP for assistance.
  </label>
</div>
    
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

  {success && (
    <div style={styles.success}>
      ✅ Request sent successfully!
    </div>
  )}

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

