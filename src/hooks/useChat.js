import { useState } from "react";
import axios from "axios";
import { GAME_PROMPTS, INITIAL_MESSAGES } from "../utils/gamePrompts";

export const useChat = () => {
  const [selectedGame, setSelectedGame] = useState("dames");
  const [gameMessages, setGameMessages] = useState(INITIAL_MESSAGES);
  const [isLoading, setIsLoading] = useState(false);

  const messages = gameMessages[selectedGame];

  const handleGameChange = (game) => {
    setSelectedGame(game);
  };

  const sendToOllama = async (nouveauMessage) => {
    try {
      const messagesAvecSystemPrompt = [
        {
          role: "system",
          content: GAME_PROMPTS[selectedGame],
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

  const handleSendMessage = (messageContent) => {
    setGameMessages((prev) => ({
      ...prev,
      [selectedGame]: [
        ...prev[selectedGame],
        { role: "user", content: messageContent },
      ],
    }));

    setIsLoading(true);
    sendToOllama(messageContent);
  };

  return {
    selectedGame,
    messages,
    isLoading,
    handleGameChange,
    handleSendMessage,
  };
};
