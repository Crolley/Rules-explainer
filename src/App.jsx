import Sidebar from "./components/Sidebar";
import ChatContainer from "./components/ChatContainer";
import { useChat } from "./hooks/useChat";
import "./styles/themes.css";
import "./App.css";

function App() {
  const { selectedGame, messages, isLoading, handleGameChange, handleSendMessage } = useChat();

  return (
    <div className="app">
      <Sidebar selectedGame={selectedGame} onGameChange={handleGameChange} />
      <ChatContainer
        selectedGame={selectedGame}
        messages={messages}
        isLoading={isLoading}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
}

export default App;
