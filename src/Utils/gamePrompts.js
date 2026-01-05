import damesPrompt from "./dames.txt?raw";
import morpionPrompt from "./morpion.txt?raw";
import batailleNavalePrompt from "./batailleNavale.txt?raw";

export const GAME_PROMPTS = {
  dames: damesPrompt,
  morpion: morpionPrompt,
  "bataille navale": batailleNavalePrompt,
};

export const INITIAL_MESSAGES = {
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
  "bataille navale": [
    {
      role: "assistant",
      content:
        "Salut ! Je suis Buddy, spécialisé dans la bataille navale. Pose-moi tes questions !",
    },
  ],
};
