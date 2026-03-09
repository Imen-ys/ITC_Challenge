import { useState } from "react";

export default function ChatBot() {

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  const sendMessage = async () => {

    const userMessage = { sender: "user", text };
    setMessages([...messages, userMessage]);

    const res = await fetch("http://localhost:5001/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: text })
    });

    const data = await res.json();

    const botMessage = { sender: "bot", text: data.reply };

    setMessages((prev) => [...prev, botMessage]);

    setText("");
  };

  return (
    <>
      {/* open button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-6 bg-blue-600 text-white px-4 py-3 rounded-full"
      >
        Chat
      </button>

      {open && (
        <div className="fixed bottom-20 left-6 w-80 bg-white shadow-xl rounded-lg flex flex-col">

          {/* Header */}
          <div className="p-3 bg-blue-600 text-white flex justify-between items-center rounded-t-lg">
            <span>Medical Assistant</span>

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg font-bold hover:opacity-70"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-2 rounded text-sm ${
                  m.sender === "user"
                    ? "bg-blue-100 ml-auto"
                    : "bg-gray-100"
                }`}
              >
                {m.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="flex border-t">
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="flex-1 p-2 text-sm outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={sendMessage}
              className="px-4 bg-blue-600 text-white"
            >
              Send
            </button>
          </div>

        </div>
      )}
    </>
  );
}