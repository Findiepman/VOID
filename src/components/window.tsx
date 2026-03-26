import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react";
import type { ReactNode } from "react";
import { useRef } from "react";


interface windowProps {
    title: string,
    onClose: () => void
    children: ReactNode;
}



export const Window = ({ title, onClose, children }: windowProps) => {
    const nodeRef = useRef(null);

    return (
        <Draggable 
            nodeRef={nodeRef} 
            handle=".window-header" 
        >
            <div 
                ref={nodeRef} 
                // We voegen 'pointer-events-auto' en een hoge z-index toe
                className="absolute z-50 pointer-events-auto w-[500px] h-[350px] bg-slate-900 border border-slate-700 rounded-t-lg shadow-2xl flex flex-col overflow-hidden"
            >
                {/* De HANDLE: window-header */}
                <div className="window-header bg-slate-800 p-2 flex justify-between items-center cursor-move select-none">
                    <span className="text-xs font-bold text-slate-300 ml-2">{title}</span>
                    <div className="flex gap-2">
                        <button className="hover:bg-slate-700 p-1 rounded text-slate-400"><Minus size={14} /></button>
                        <button className="hover:bg-slate-700 p-1 rounded text-slate-400"><Square size={14} /></button>
                        <button onClick={onClose} className="hover:bg-red-600 p-1 rounded text-slate-400 hover:text-white">
                            <X size={14} />
                        </button>
                    </div>
                </div>

                <div className="flex-grow bg-slate-950">
                    {children}
                </div>
            </div>
        </Draggable>
    );
}