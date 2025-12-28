import { useState, useRef, useEffect } from "react";
import axios from "axios";
import damesPrompt from "./Utils/dames.txt?raw";
import morpionPrompt from "./Utils/morpion.txt?raw";
import "./App.css";

function App() {
  const [selectedGame, setSelectedGame] = useState("dames");

  // Historique séparé pour chaque jeu
  const [gameMessages, setGameMessages] = useState({
    dames: [
      {
        role: "assistant",
        content:
          "Salut ! Je suis Buddy, spécialisé dans le jeu de dames. Pose-moi tes questions !",
      },
    ],
    morpion: [
      {
        role: "assistant",
        content:
          "Salut ! Je suis Buddy, spécialisé dans le morpion. Pose-moi tes questions !",
      },
    ],
  });

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Messages du jeu actuellement sélectionné
  const messages = gameMessages[selectedGame];

  // Objet qui associe chaque jeu à son prompt
  const gamePrompts = {
    dames: damesPrompt,
    morpion: morpionPrompt,
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fonction pour changer de jeu (sans reset)
  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  const sendToOllama = async (nouveauMessage) => {
    try {
      const messagesAvecSystemPrompt = [
        {
          role: "system",
          content: gamePrompts[selectedGame],
        },
        ...messages,
        { role: "user", content: nouveauMessage },
      ];

      const response = await axios.post("http://localhost:11434/api/chat", {
        model: "mistral",
        messages: messagesAvecSystemPrompt,
        stream: false,
      });

      const responseIA = response.data.message.content;

      // Met à jour l'historique du jeu actuel
      setGameMessages((prev) => ({
        ...prev,
        [selectedGame]: [
          ...prev[selectedGame],
          { role: "assistant", content: responseIA },
        ],
      }));
    } catch (error) {
      console.error("Erreur:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim() === "") return;
    const nouveauMessage = input;

    // Met à jour l'historique du jeu actuel
    setGameMessages((prev) => ({
      ...prev,
      [selectedGame]: [
        ...prev[selectedGame],
        { role: "user", content: nouveauMessage },
      ],
    }));

    setInput("");
    setIsLoading(true);
    sendToOllama(nouveauMessage);
  };

  return (
    <div className="app">
      {/* Menu latéral gauche */}
      <div className="sidebar">
        <h2>Jeux disponibles</h2>
        <div className="game-list">
          <button
            className={`game-btn ${selectedGame === "dames" ? "active" : ""}`}
            onClick={() => handleGameChange("dames")}
          >
            🎲 Dames
          </button>
          <button
            className={`game-btn ${selectedGame === "morpion" ? "active" : ""}`}
            onClick={() => handleGameChange("morpion")}
          >
            ❌ Morpion
          </button>
        </div>
      </div>

      {/* Chat principal */}
      <div className="chat-container">
        <h1>
          Buddy - {selectedGame.charAt(0).toUpperCase() + selectedGame.slice(1)}
        </h1>

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
      </div>
    </div>
  );
}

export default App;
