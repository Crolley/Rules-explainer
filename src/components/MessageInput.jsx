import { useState } from "react";
import "../styles/MessageInput.css";

function MessageInput({ onSend, isLoading }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "" || isLoading) return;
    onSend(input);
    setInput("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !isLoading) {
            handleSend();
          }
        }}
        placeholder="Tape ton message..."
        disabled={isLoading}
      />
      <button onClick={handleSend} disabled={isLoading}>
        {isLoading ? "..." : "Envoyer"}
      </button>
    </div>
  );
}

export default MessageInput;
