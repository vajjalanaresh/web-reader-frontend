# Webpage Reader + Q/A; Application

This project allows the user to enter a webpage URL, ask a question, and get an AI-generated answer based on the content of that page.  
The frontend is built with React, and it communicates with a Node.js backend API.

---

## 1. Setup & Running (Local Development)

### Steps to run the frontend locally

1. Clone the frontend repository  
   `git clone <frontend-repo-url>`

2. Install required packages  

3. Create a `.env` file in the root directory.  
Example:

4. Start the development server  

5. Open the app in the browser at  
`http://localhost:3000`

---

## 2. Deployment (Vercel)

I deployed the frontend on **Vercel**.

- Added the backend endpoint inside  
**Project Settings → Environment Variables**
- Example: REACT_APP_BACKEND_URL=<https://your-backend.onrender.com/api/extract>

- After saving the variable, I redeployed the frontend.

The deployed frontend reads this **environment** variable and uses it to call the backend.

---

## 3. Custom Hook (`useChat`)

The frontend contains a custom hook named **`useChat`**.  
This hook keeps all chat-related logic in one place so that the components stay clean and simple.

The hook is responsible for:

- Storing the list of chat messages  
- Managing the loading state when the API request is happening  
- Sending the URL + question to the backend  
- Adding both the user's question and the AI's response to the chat  
- Handling errors gracefully  

By keeping this logic inside a custom hook, the UI components stay small and easy to understand.

---

## 4. Components Used

- **InputForm** – collects the URL and question from the user  
- **MessageList** – displays all messages and auto-scrolls to the latest one  
- **ChatBubble** – the UI for each message  
- **Loader** – shows while waiting for the backend response  

---

## 5. What the Frontend Does

- Accepts a webpage URL and a user question  
- Sends these to the backend API  
- Shows a loader while the backend processes the page  
- Displays the final AI answer in a chat-style layout  

---

## 6. Text Extraction Explanation (Backend Logic Overview)

The backend performs the key task of extracting text from the webpage.  
Here is how the backend processes the webpage:

1. The backend receives the URL from the frontend  
2. It uses **axios** to fetch the raw HTML of that page  
3. The HTML is then loaded into **Cheerio**, which works like a lightweight server-side jQuery  
4. Unnecessary elements are removed, such as:
5. Only the readable text inside the `<body>` is extracted  
6. Extra spaces and line breaks are cleaned  
7. The extracted text is limited (for safety) before sending to the AI model  
8. This cleaned text + the user’s question is sent to the Gemini API  
9. Gemini returns the answer, which is shown in the chat interface on the frontend  

This method helps remove noise from the webpage and ensures the AI receives clean, readable information.

---

## 7. Environment Variables

Example `.env` (frontend):
No sensitive keys are stored on the frontend.
