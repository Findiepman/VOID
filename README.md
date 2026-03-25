npm create vite@latest void-os -- --template react-ts
cd void-os
npm install
2. Tailwind v4 Setup (De moderne manier)
Sinds v4 is de installatie veranderd. Je hebt alleen deze twee nodig:

Bash
npm install tailwindcss @tailwindcss/vite
3. De OS Utilities (Slepen, Icons & State)
Deze drie heb je echt nodig om dat "Windows" gevoel te krijgen:

Bash
# Voor het slepen van de vensters
npm install react-draggable

# Voor de iconen (Folder, Instellingen, Kruisjes)
npm install lucide-react

# Voor de hersenen (State Management)
npm install zustand