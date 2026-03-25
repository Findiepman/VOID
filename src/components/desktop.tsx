import { Monitor, Folder, Settings, X } from 'lucide-react';



export function Desktop() {
    return (
        <main>
            <Monitor size={64} className="text-blue-400 transition-colors cursor-pointer" />
            <Folder size={64} className="text-yellow-500 transition-colors cursor-pointer"/>
            <Settings size={64} className="text-gray-500 transition-colors cursor-pointer"/>
            <X size={64} className="text-black-500 transition-colors cursor-pointer"/>
        </main>
    )
}