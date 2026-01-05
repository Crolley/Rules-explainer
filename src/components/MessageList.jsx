import { useRef, useEffect } from "react";
import "../styles/MessageList.css";

function MessageList({ messages, isLoading }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="messages-list">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.role}`}>
          {msg.content}
        </div>
      ))}

      {isLoading && (
        <div className="message assistant loading">
          <div className="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}

export default MessageList;
