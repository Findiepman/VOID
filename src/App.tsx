import { useState } from "react"
import { Desktop } from "./components/desktop"
import { Taskbar } from "./components/taskbar"
import { Window } from "./components/window" // Zorg dat de bestandsnaam klopt (hoofdletter/kleine letter)

// Dummy Notepad voor nu, totdat je vriend hem af heeft
const Notepad = () => (
  <div className="h-full w-full">
    <textarea
      className="w-full h-full bg-transparent text-white outline-none resize-none"
      placeholder="Typ hier iets tuff..."
    />
  </div>
);

function App() {
  const [isNotepadOpen, setIsNotepadOpen] = useState(false)

  return (
    // 'relative' is nodig zodat de absolute lagen binnen dit kader blijven
    // 'h-screen w-screen' vult je hele monitor
    <main className="relative h-screen w-screen overflow-hidden bg-slate-950">

      {/* LAAG 1: De Desktop */}
      <div className="absolute inset-0 z-0">
        <Desktop onOpenNotepad={() => setIsNotepadOpen(true)} />
      </div>

      {/* LAAG 2: De Vensters */}
      {isNotepadOpen && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="pointer-events-auto inline-block">
            <Window title="Notepad" onClose={() => setIsNotepadOpen(false)}>
              <Notepad />
            </Window>
          </div>
        </div>
      )}

      {/* LAAG 3: De Taskbar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <Taskbar onStartClick={() => setIsNotepadOpen(true)} />
      </div>

    </main>
  )
}

export default App