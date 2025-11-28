import React, { useState, useCallback } from "react";

export default function InputForm({ onSubmit }) {
  const [url, setUrl] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!url.trim() || !question.trim()) return;
      onSubmit({ url: url.trim(), question: question.trim() });
      setQuestion("");
    },
    [url, question, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} style={{ padding: 12 }}>
      <div style={{ marginBottom: 8 }}>
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://example.com/article"
          style={{ width: "100%", padding: 8 }}
          required
        />
      </div>
      <div style={{ marginBottom: 8 }}>
        <input
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question about the page"
          style={{ width: "100%", padding: 8 }}
          required
        />
      </div>
      <div>
        <button type="submit" style={{ padding: "8px 16px" }}>
          Get Answer
        </button>
      </div>
    </form>
  );
}
