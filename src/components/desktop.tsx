import { Monitor, Folder, Settings, X } from 'lucide-react';
import { Taskbar } from './taskbar';



export function Desktop() {
    return (
        <main>
            <div className="h-screen w-screen bg-[url('public/nature.jpg')] bg-cover bg-center overflow-hidden">
                <Monitor size={64} className="text-blue-400 cursor-pointer hover:text-blue-300 mx-1" />
                <Folder size={64} className="text-yellow-500 cursor-pointer hover:text-yellow-400 mx-1" />
                <Settings size={64} className="text-gray-300 cursor-pointer hover:text-gray-100 mx-1" />
                <Taskbar />
            </div>
        </main>
    )
}