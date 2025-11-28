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
        backgroundImage: "url('../background.jpg')",
      }}
    >
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          padding: "12px 12px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        {/* <img src="/abstract-textured-backgound.jpg" /> */}
        <h1 style={{ marginBottom: 12, color: "white" }}>
          Webpage Reader + Q&A
        </h1>
        <p style={{ marginTop: 0, color: "#555" }}>
          Paste a public article URL and ask a question.
        </p>

        <div style={{ marginBottom: 12 }}>
          <InputForm onSubmit={ask} />
        </div>

        <span style={{ color: "white" }}>
          {loading && <Loader text="Fetching & answering — please wait..." />}
        </span>

        <MessageList messages={messages} />
      </div>
    </div>
  );
}
