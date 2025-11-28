import { useState, useCallback } from "react";
import axios from "axios";

export default function useChat() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const ask = useCallback(async ({ url, question }) => {
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "/api/extract";
      const proxyUrl = process.env;
      console.log(proxyUrl, "----------"  ); // http://localhost:4000
      console.log(process.env, backendUrl, "backendUrl--------");
      const resp = await axios.post(
        backendUrl,
        { url, question },
        { timeout: 60000 }
      );
      const answer = resp.data?.answer ?? "No answer returned.";
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (err) {
      const message =
        err?.response?.data?.error || err.message || "Unknown error";
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Error: ${message}` },
      ]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { messages, loading, ask };
}
