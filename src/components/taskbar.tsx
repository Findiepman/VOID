interface TaskBarProps {
    onStartClick: () => void
}
import { Monitor, Folder, Settings, X } from 'lucide-react';

const iconen = [Monitor, Folder, Settings]

const amount_icons = iconen.length

export function Taskbar({ onStartClick }: TaskBarProps) {
    return (
        <main>
            <div className="bg-gray-600 w-full absolute bottom-0 flex items-center px-2 h-12">
                {iconen.map((Icoon, index) => (
                    <button onClick={onStartClick}>
                        <Icoon key={index} size={48}></Icoon>
                    </button>
                ))}
            </div>
        </main>
    )
}