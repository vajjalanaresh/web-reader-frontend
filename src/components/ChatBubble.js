import React from "react";

export default function ChatBubble({ role, text }) {
  const isUser = role === "user";
  const containerStyle = {
    display: "flex",
    justifyContent: isUser ? "flex-end" : "flex-start",
    padding: "6px 8px",
  };
  const bubbleStyle = {
    maxWidth: "80%",
    padding: "10px 12px",
    borderRadius: 12,
    background: isUser ? "#DCF8C6" : "#F1F0F0",
    boxShadow: "0 1px 1px rgba(0,0,0,0.06)",
    whiteSpace: "pre-wrap",
    lineHeight: 1.4,
  };

  return (
    <div style={containerStyle}>
      <div style={bubbleStyle}>
        <div style={{ fontSize: 14 }}>{text}</div>
      </div>
    </div>
  );
}
