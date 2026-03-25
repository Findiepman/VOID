interface TaskbarProps {
    onStartClick: () => void
}
import { Monitor, Folder, Settings, X, Trash } from 'lucide-react';

const iconen = [Monitor, Folder, Settings];

export function Taskbar({ onStartClick }: TaskbarProps) {
    return (
        <div className="bg-gray-800/90 backdrop-blur-md w-full absolute bottom-0 flex items-center px-4 h-12 justify-center border-t border-white/10 z-50">
                <button
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <Monitor size={32} className="text-blue-400 transition-colors cursor-pointer" />                
                </button>
                <button
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <Folder size={32} className="text-yellow-500 transition-colors cursor-pointer" />                
                </button>
                <button
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <Settings size={32} className="text-gray-500 transition-colors cursor-pointer" />                
                </button>
                <button
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <X size={32} className="text-black-500 transition-colors cursor-pointer" />                
                </button>
                <button
                    onClick={onStartClick}
                    className="hover:bg-white/10 p-1 rounded transition-colors mx-1"
                >
                    <Trash size={32} className='text-gray-300 transition-colors cursor-pointer'/>               
                </button>
        </div>
    );
}