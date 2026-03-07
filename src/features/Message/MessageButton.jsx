// MessageButton.jsx
import { useState } from "react";
import MessageModal from "./Message";

const MessageButton = () => {

  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Message
      </button>

      <MessageModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default MessageButton;