function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ color: "#2c3e50" }}>
        My React Website 🚀
      </h1>

      <p style={{ fontSize: "20px", color: "#555" }}>
        Welcome to my simple React application.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          Login
        </button>

        <button
          style={{
            padding: "12px 25px",
            fontSize: "18px",
            backgroundColor: "green",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default App;