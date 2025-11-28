import React from "react";
import InputForm from "./components/InputForm";
import MessageList from "./components/MessageList";
import Loader from "./components/Loader";
import useChat from "./hooks/useChat";

export default function App() {
  const { messages, loading, ask } = useChat();

  return (
    <div
      style={{
        maxWidth: 800,
        margin: "24px auto",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: 12 }}>Webpage Reader + Q&A</h1>
      <p style={{ marginTop: 0, color: "#555" }}>
        Paste a public article URL and ask a question.
      </p>

      <div style={{ marginBottom: 12 }}>
        <InputForm onSubmit={ask} />
      </div>

      {loading && <Loader text="Fetching & answering — please wait..." />}

      <MessageList messages={messages} />
    </div>
  );
}
