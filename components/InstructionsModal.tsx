
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

interface InstructionsModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const InstructionsModal = ({ isOpen, onClose }: InstructionsModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setShouldRender(false);
            onClose();
        }, 300); // Match animation duration
    };

    if (!shouldRender) return null;

    return (
        <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
            <div className={`relative w-full max-w-md bg-white dark:bg-gray-900 rounded-xl shadow-2xl p-6 border border-white/10 flex flex-col gap-4 ${isClosing ? 'animate-scale-down' : 'animate-scale-up'}`}>
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    <X className="w-5 h-5 opacity-70" />
                </button>

                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-indigo-600">
                    Bienvenido a DolarInteligente
                </h2>

                <div className="text-sm opacity-80 leading-relaxed space-y-4 max-h-[60vh] overflow-y-auto pr-2">
                    <div>
                        <h3 className="font-bold text-base text-blue-600 dark:text-blue-400">Guía de Uso: ¿Cómo obtener el mejor precio?</h3>
                        <p className="mt-1">Sigue estos pasos para saber si te conviene vender tus dólares directamente o usar el puente de USDT:</p>
                    </div>

                    <ol className="list-decimal pl-4 space-y-4 marker:text-blue-500 font-medium">
                        <li>
                            <span className="font-bold block text-gray-900 dark:text-white">Ingresa el Precio del USDT</span>
                            <p className="font-normal text-xs mt-1">Busca en el P2P de Binance (o tu plataforma de confianza) el precio actual de venta de 1 USDT en tu moneda local.</p>
                            <p className="font-normal text-xs mt-1 text-blue-500 italic">Ejemplo: 500 Bs.</p>
                        </li>

                        <li>
                            <span className="font-bold block text-gray-900 dark:text-white">Define la Comisión de la Casa de Cambio</span>
                            <p className="font-normal text-xs mt-1">Escribe el porcentaje que te cobra tu proveedor por convertir tus USD físicos o digitales a USDT.</p>
                            <p className="font-normal text-xs mt-1 text-orange-500">Nota: Suele rondar entre el 1% y el 5% dependiendo del método.</p>
                        </li>

                        <li>
                            <span className="font-bold block text-gray-900 dark:text-white">Ajuste de Comisión P2P</span>
                            <p className="font-normal text-xs mt-1">La app ya incluye automáticamente la comisión estándar de 0.06 USDT por el anuncio de venta en Binance. No necesitas restarla manualmente.</p>
                        </li>

                        <li>
                            <span className="font-bold block text-gray-900 dark:text-white">Analiza el Resultado ("Precio de Equilibrio")</span>
                            <p className="font-normal text-xs mt-1">La app te mostrará un valor final en moneda local. Este es tu punto de comparación:</p>
                            <ul className="list-disc pl-4 mt-2 space-y-1 font-normal text-xs">
                                <li>Si la venta directa de tus dólares te ofrece <span className="font-bold text-green-500">MÁS</span> que este resultado: Vende tus dólares directamente.</li>
                                <li>Si la venta directa de tus dólares te ofrece <span className="font-bold text-red-500">MENOS</span>: Te conviene hacer el proceso de cambio a USDT y vender por P2P.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <button
                    onClick={handleClose}
                    className="mt-2 w-full py-2.5 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 active:scale-95 transition-all"
                >
                    Entendido
                </button>
            </div>
        </div>
    );
};
