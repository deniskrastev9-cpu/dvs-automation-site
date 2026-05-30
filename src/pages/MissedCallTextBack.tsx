export default function MissedCallTextBack() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
        color: "white",
        padding: "80px 20px",
        textAlign: "center"
      }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          
          <h1 style={{
            fontSize: "48px",
            marginBottom: "15px",
            fontWeight: "bold"
          }}>
            Never Miss Another Customer Call
          </h1>

          <p style={{
            fontSize: "20px",
            opacity: 0.9
          }}>
            Automatic missed-call text back system that helps service businesses
            capture more leads instantly.
          </p>

        </div>
      </section>

      {/* CONTENT WRAPPER */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "40px 20px"
      }}>

        {/* WHY */}
        <section style={{
          background: "#f8fafc",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px"
        }}>
          <h2>Why This Matters</h2>
          <p>
            Every missed call is a potential lost customer. Most businesses
            cannot answer every call during busy hours or after hours.
          </p>
        </section>

        {/* HOW IT WORKS */}
        <section style={{
          background: "white",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px",
          border: "1px solid #e5e7eb"
        }}>
          <h2>How It Works</h2>

          <div style={{ lineHeight: "2", marginTop: "10px" }}>
            <div>📞 Customer calls your business</div>
            <div>⬇️</div>
            <div>❌ Call is missed</div>
            <div>⬇️</div>
            <div>💬 Automatic text is sent</div>
            <div>⬇️</div>
            <div>📲 Customer responds</div>
            <div>⬇️</div>
            <div>💰 You capture the lead</div>
          </div>
        </section>

        {/* BENEFITS */}
        <section style={{
          background: "#f8fafc",
          padding: "25px",
          borderRadius: "12px",
          marginBottom: "20px"
        }}>
          <h2>Benefits</h2>
          <ul>
            <li>Instant response to missed calls</li>
            <li>More leads captured automatically</li>
            <li>Better customer experience</li>
            <li>Higher conversion rates</li>
          </ul>
        </section>

        {/* CTA */}
        <section style={{
          background: "#0f172a",
          color: "white",
          padding: "40px",
          borderRadius: "14px",
          textAlign: "center",
          marginTop: "30px"
        }}>
          <h2 style={{ fontSize: "28px" }}>
            Ready to Automate Your Missed Calls?
          </h2>

          <p style={{ marginTop: "10px", opacity: 0.85 }}>
            Contact us today and never lose another lead again.
          </p>

          <a
            href="mailto:service@dvsautomationsolutionsllc.com"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "12px 24px",
              background: "white",
              color: "#0f172a",
              borderRadius: "8px",
              fontWeight: "bold",
              textDecoration: "none"
            }}
          >
            Contact Us
          </a>
        </section>

      </div>
    </div>
  );
}
