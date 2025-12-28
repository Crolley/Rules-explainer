# Buddy - Assistant pour le jeu de dames 🎲

Un petit chat pour apprendre les règles du jeu de dames, fait avec React et une IA locale.

## C'est quoi ce projet ?

J'ai créé un chatbot qui explique les règles du jeu de dames. Il tourne en local avec Ollama et répond aux questions de manière simple et claire.

## Ce qu'il fait

- Interface de chat stylée
- Répond aux questions sur les dames
- Refuse gentiment les sujets hors-sujet
- Animation de chargement quand l'IA réfléchit
- Scroll automatique des messages
- Envoi avec Entrée

## Comment l'installer

**Ce qu'il te faut :**

- Node.js
- pnpm (ou npm)
- Ollama

**Installation :**

```bash
# Cloner le projet
git clone <ton-repo>
cd mon-assistant-jeu

# Installer les dépendances
pnpm install

# Installer Ollama et le modèle
# Va sur https://ollama.com pour télécharger Ollama
ollama pull mistral
ollama run mistral

# Lancer le projet
pnpm run dev
```

Ouvre http://localhost:5173 et c'est parti !

## Structure

```
src/
├── Utils/
│   └── systemPrompt.txt    # Les règles du jeu
├── App.jsx                 # Le code principal
├── App.css                 # Le style du chat
└── index.css               # Style global
```

## Technologies

- React + Vite
- CSS pur
- Axios pour les requêtes
- Ollama avec Mistral en local

## Personnaliser

**Changer le modèle d'IA :**  
Dans `App.jsx`, change `model: "mistral"` par un autre modèle (llama3.2, phi, etc.)

**Modifier les règles :**  
Édite `src/Utils/systemPrompt.txt`

## Problèmes courants

**L'IA ne répond pas :**  
**C'est lent :**

## Idées pour plus tard

- Sauvegarder l'historique
- Bouton reset
- Support d'autres jeux
- Affichage mot par mot (streaming)

## Questions pour tester

Questions normales

"Comment on joue aux dames ?"
"C'est quoi une dame ?"
"Je dois obligatoirement manger un pion ?"
"Comment on gagne ?"
"Un pion peut reculer ?"
"Combien de cases il y a sur le damier ?"
"C'est qui qui commence ?"

Questions avec langage familier/humain

"Yo mec, explique-moi les dames vite fait"
"J'ai capté que dalle, c'est quoi le délire avec les prises ?"
"Genre si j'ai le choix entre bouffer 2 pions, je fais quoi ?"
"Mdrr mon pote dit qu'on peut pas reculer c'est vrai ça ?"
"C'est relou les règles, tu peux faire simple stp ?"

Questions de situations précises

"J'ai 2 prises possibles, laquelle je choisis ?"
"Mon pion arrive au bout, il devient quoi ?"
"Une dame elle peut bouger de combien de cases ?"
"Si je peux pas bouger je perds ?"

Questions hors-sujet (pour tester le refus)

"C'est quoi la capitale de la France ?"
"Tu peux m'aider avec mes devoirs de maths ?"
"Raconte-moi une blague"
"Comment on joue aux échecs ?"

Insultes/provocations

"T'es nul comme assistant"
"Va te faire voir"
"Les dames c'est un jeu de merde"

Questions bizarres

"Si je mets 3 pions l'un sur l'autre ça fait quoi ?"
"On peut jouer aux dames avec des Lego ?"
"C'est quoi la différence entre les dames françaises et chinoises ?"
"Mon chat a mangé un pion, je fais comment ?"
