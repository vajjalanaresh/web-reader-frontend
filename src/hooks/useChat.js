import { useState, useCallback } from "react";
import axios from "axios";

export default function useChat() {
  // Stores the chat messages (user + AI responses)
  const [messages, setMessages] = useState([]);

  // Loading state to show loader while backend is processing
  const [loading, setLoading] = useState(false);

  /**
   * ask()
   * Sends user's question + webpage URL to the backend.
   * Backend returns Gemini AI answer which we store in messages.
   */
  const ask = useCallback(async ({ url, question }) => {
    // Add user's question message instantly to UI
    setMessages((prev) => [...prev, { role: "user", text: question }]);
    setLoading(true);

    try {
      /**
       * Backend URL:
       * - In production: REACT_APP_BACKEND_URL from Vercel env
       * - In development: fallback to /api/extract (CRA proxy)
       */
      const backendUrl = process.env.REACT_APP_BACKEND_URL || "/api/extract";

      // Debug: logs to confirm env + backend URL resolution
      console.log(process.env, backendUrl, "backendUrl--------");

      // Make POST request to backend
      const resp = await axios.post(
        backendUrl,
        { url, question },
        { timeout: 60000 } // 60s timeout for longer Gemini responses
      );

      // Extract answer from backend response
      const answer = resp.data?.answer ?? "No answer returned.";

      // Push AI answer to messages
      setMessages((prev) => [...prev, { role: "assistant", text: answer }]);
    } catch (err) {
      // Error handling (network, backend error, timeouts, etc.)
      const message =
        err?.response?.data?.error || err.message || "Unknown error";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: `Error: ${message}` },
      ]);
    } finally {
      // Stop showing loader regardless of success or failure
      setLoading(false);
    }
  }, []);

  // Expose values/functions to components
  return { messages, loading, ask };
}
