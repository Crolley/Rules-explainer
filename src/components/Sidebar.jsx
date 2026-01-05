import { ThemeSelector } from "./ThemeSelector";
import "../styles/Sidebar.css";

function Sidebar({ selectedGame, onGameChange }) {
  const games = [
    { id: "dames", label: "🎲 Dames" },
    { id: "morpion", label: "❌ Morpion" },
  ];

  return (
    <div className="sidebar">
      <h2>Jeux disponibles</h2>
      <div className="game-list">
        {games.map((game) => (
          <button
            key={game.id}
            className={`game-btn ${selectedGame === game.id ? "active" : ""}`}
            onClick={() => onGameChange(game.id)}
          >
            {game.label}
          </button>
        ))}
      </div>
      <ThemeSelector />
    </div>
  );
}

export default Sidebar;
