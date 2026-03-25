import { Monitor, Folder, Settings, X } from 'lucide-react';



export function Desktop() {
    return (
        <main>
            <div className="h-screen w-screen bg-[url('public/nature.jpg')] bg-cover bg-center overflow-hidden">
                <Monitor size={64} className="text-blue-400 transition-colors cursor-pointer" />
                <Folder size={64} className="text-yellow-500 transition-colors cursor-pointer" />
                <Settings size={64} className="text-gray-500 transition-colors cursor-pointer" />
                <X size={64} className="text-black-500 transition-colors cursor-pointer" />

                
            </div>        
        </main>
    )
}