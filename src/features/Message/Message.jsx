// MessageModal.jsx
import { useState } from "react";

const Message = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    console.log("Message sent:", message);

    setMessage("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      
      <div className="bg-white w-[90%] md:w-[500px] rounded-xl shadow-lg p-6">

        <h2 className="text-xl font-semibold mb-4">
          Send Message
        </h2>

        <textarea
          placeholder="Write your message..."
          className="w-full h-32 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex justify-end gap-3 mt-4">
          
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Send
          </button>

        </div>
      </div>
    </div>
  );
};

export default Message;