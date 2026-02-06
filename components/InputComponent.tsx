import React, { useState } from 'react';
import { HelpCircle, X } from 'lucide-react';

interface InputComponentProps {
    label: string;
    unit: string;
    placeholder: string;
    onChange: (value: number) => void;
    explanation?: string;
}

export const InputComponent = ({ label, unit, placeholder, onChange, explanation }: InputComponentProps) => {
    const [showExplanation, setShowExplanation] = useState(false);

    return (
        <div className="flex flex-col relative">
            <div className="flex justify-between items-center mb-1">
                <p className="text-xs opacity-50">{label}</p>
                {explanation && (
                    <button
                        onClick={() => setShowExplanation(true)}
                        className="opacity-50 hover:opacity-100 transition-opacity"
                    >
                        <HelpCircle className="w-3.5 h-3.5" />
                    </button>
                )}
            </div>

            <div className="flex items-center text-3xl font-black">
                <input
                    type="number"
                    className="field-sizing-content min-w-3 bg-transparent outline-none"
                    onChange={(e) => onChange(Number(e.target.value))}
                    placeholder={placeholder}
                />
                <p className="font-normal opacity-50">{unit}</p>
            </div>

            {/* Micro Modal for Explanation */}
            {showExplanation && (
                <div className="absolute top-0 right-0 z-50 w-[80vw] max-w-[280px] bg-white dark:bg-gray-950 rounded-lg shadow-2xl border border-blue-500/30 p-4 origin-top-right transform translate-x-0 md:right-6">
                    <button
                        onClick={() => setShowExplanation(false)}
                        className="absolute top-2 right-2 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                        <X className="w-4 h-4 opacity-70" />
                    </button>
                    <h4 className="text-xs font-bold text-blue-500 mb-2 uppercase tracking-wider">{label}</h4>
                    <p className="text-sm opacity-90 leading-relaxed font-medium">{explanation}</p>
                </div>
            )}

            {/* Backdrop for clicking outside */}
            {showExplanation && (
                <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => setShowExplanation(false)}
                />
            )}
        </div>
    );
};
