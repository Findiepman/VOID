import { Monitor, Folder, Settings, X, Notebook, Trash } from 'lucide-react';

interface DesktopProps {
    onOpenNotepad: () => void;
}

export function Desktop({ onOpenNotepad }: DesktopProps) {
    return (
        <main>
            <div className="h-screen w-screen bg-[url('public/nature.jpg')] bg-cover bg-center overflow-hidden">
                <div onDoubleClick={onOpenNotepad}>
                    <Monitor size={64} className="text-blue-400 transition-colors cursor-pointer" />
                    <Folder size={64} className="text-yellow-500 transition-colors cursor-pointer" />
                    <Settings size={64} className="text-gray-500 transition-colors cursor-pointer" />
                    <X size={64} className="text-black-500 transition-colors cursor-pointer" />
                    <Notebook size="64" className="text-yellow-500 transition-colors cursor-pointer"></Notebook>
                    <Trash size={64} className='text-gray-300 transition-colors cursor-pointer'></Trash>
                </div>
            </div>
        </main>
    )
}