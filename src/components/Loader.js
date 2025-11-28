import React from "react";

export default function Loader({ text = "Loading..." }) {
  return (
    <div style={{ padding: 12, display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: "50%",
          border: "3px solid rgba(0,0,0,0.1)",
          borderTopColor: "#333",
          animation: "spin 1s linear infinite",
        }}
      />
      <div>{text}</div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
