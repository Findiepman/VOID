import Draggable from "react-draggable";
import { X, Minus, Square } from "lucide-react";
import type { ReactNode } from "react";


interface windowProps {
    title: string,
    childeren: ReactNode;
    onClose: () => void
}



export const Window = ({ title, childeren, onClose }: windowProps) => {
    return (
        <Draggable handle=".window.header" bounds="parent">
            <div className="absolute w-[500px] h-[350px] bg-slate-900 border border-slate-700 rounded-t-lg shadow-2xl flex flex-col overflow-hidden">
                <div className="window-header bg-slate-800 p-2 flex justify-between items-center cursor-move select-none">
                    <span className="text-xs font-bold text-slate-300 ml-2">{title}</span>
                    <div className="flex gap-2">
                        <button className="hover:bg-slate-700 p-1 rounded"><Minus size={14} /></button>
                        <button className="hover:bg-slate-700 p-1 rounded"><Square size={14} /></button>
                        <button onClick={onClose} className="hover:bg-red-600 p-1 rounded"><X size={14} /></button>
                    </div>
                </div>
                <div className="flex-grow overflow-auto bg-slate-950 p-4">
                    {childeren}
                </div>
            </div>
        </Draggable>
    )
}