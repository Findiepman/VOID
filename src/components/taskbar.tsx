interface TaskbarProps {
    onStartClick: () => void
}
import { Monitor, Folder, Settings, X } from 'lucide-react';

const iconen = [Monitor, Folder, Settings];

export function Taskbar({ onStartClick }: TaskbarProps) {
    return (
        <div className="bg-gray-800/90 backdrop-blur-md w-full absolute bottom-0 flex items-center px-4 h-12 border-t border-white/10 z-50">
            {iconen.map((Icoon, index) => (
                <button
                    key={index}
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <Icoon size={32} className="text-slate-200" />
                </button>
            ))}
        </div>
    );
}