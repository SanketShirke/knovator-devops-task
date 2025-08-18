import React, { useEffect, useState } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("Loading...");

  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("Error: API not reachable"));
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>🚀 Knovator React Frontend</h1>
        <p>React + Node.js API + Nginx (Dockerized)</p>
      </header>

      <main style={styles.main}>
        <section style={styles.card}>
          <h2>Welcome 👋</h2>
          <p>This is a sample React app running inside Docker.</p>
        </section>

        <section style={styles.card}>
          <h2>Backend API Status</h2>
          <p>
            {apiStatus === "ok" ? (
              <span style={{ color: "green", fontWeight: "bold" }}>
                ✅ API is Healthy
              </span>
            ) : (
              <span style={{ color: "red", fontWeight: "bold" }}>
                ❌ {apiStatus}
              </span>
            )}
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Made with ❤️ for Knovator DevOps Task</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    background: "#f5f7fa",
    color: "#333",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    background: "#2563eb",
    color: "white",
    padding: "1rem",
  },
  main: {
    flex: 1,
    display: "grid",
    gap: "1rem",
    padding: "2rem",
    justifyContent: "center",
  },
  card: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  footer: {
    background: "#111827",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  },
};

export default App;
