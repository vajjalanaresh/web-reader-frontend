import React, { useEffect, useRef, useMemo } from "react";
import ChatBubble from "./ChatBubble";

export default function MessageList({ messages }) {
  const containerRef = useRef(null);

  const rendered = useMemo(
    () =>
      messages.map((m, idx) => (
        <ChatBubble key={idx} role={m.role} text={m.text} />
      )),
    [messages]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      style={{
        height: 420,
        overflowY: "auto",
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 8,
        background: "#fff",
      }}
    >
      {rendered.length ? (
        rendered
      ) : (
        <div style={{ padding: 12, color: "#666" }}>
          Ask a question and the AI answer will appear here.
        </div>
      )}
    </div>
  );
}
