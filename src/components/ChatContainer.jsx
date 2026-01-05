import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "../styles/ChatContainer.css";

function ChatContainer({ selectedGame, messages, isLoading, onSendMessage }) {
  return (
    <div className="chat-container">
      <h1>
        Buddy - {selectedGame.charAt(0).toUpperCase() + selectedGame.slice(1)}
      </h1>

      <MessageList messages={messages} isLoading={isLoading} />
      <MessageInput onSend={onSendMessage} isLoading={isLoading} />
    </div>
  );
}

export default ChatContainer;
