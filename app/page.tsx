'use client'

import { CircleDollarSign, Landmark, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { InputComponent } from "@/components/InputComponent";
import { InstructionsModal } from "@/components/InstructionsModal";

export default function Home() {
  const [showModal, setShowModal] = useState(true)
  const [divisa, setDivisa] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)
  const [bs, setBs] = useState(0)

  const totalBinance = (divisa - (divisa * (porcentaje / 100))) - 0.06

  const inputData = [
    {
      label: "cantidad en divisa",
      unit: "$",
      placeholder: "ej: 100",
      setter: setDivisa,
      explanation: "Es la cantidad total de dólares (o euros) que tienes en físico o digital y quieres vender."
    },
    {
      label: "% de cambio",
      unit: "%",
      placeholder: "0",
      setter: setPorcentaje,
      explanation: "Es la comisión que te cobra la cueva o casa de cambio por recibir tus billetes o transferencia."
    },
    {
      label: "tasa de cambio USDT x Bs",
      unit: "Bs",
      placeholder: "ej: 510",
      setter: setBs,
      explanation: "Es el precio al que puedes vender 1 USDT en bolívares en Binance P2P hoy."
    },
  ]

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#020617] overflow-x-hidden relative text-white">
      {/* Dynamic Background Blobs - Fixed and behind */}
      <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] md:w-[40%] h-[40%] bg-blue-500/15 blur-[100px] rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[-5%] w-[60%] md:w-[35%] h-[35%] bg-indigo-500/15 blur-[80px] rounded-full animate-float-reverse" />
        <div className="absolute top-[40%] left-[20%] w-[50%] md:w-[25%] h-[25%] bg-blue-400/10 blur-[60px] rounded-full animate-float" />
      </div>

      <div className="relative z-10 flex flex-col flex-grow">
        <div className="h-16 flex items-center justify-between px-4 md:px-6 bg-blue-950/40 backdrop-blur-xl border-b border-white/10 w-full sticky top-0 z-50 shadow-lg shadow-black/20">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-linear-to-br from-blue-500 to-indigo-600 shadow-inner">
              <CircleDollarSign className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg md:text-xl tracking-tight bg-clip-text text-transparent bg-linear-to-r from-blue-200 to-white">
              DolarInteligente
            </span>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors bg-white/5 md:bg-transparent"
            title="Ver instrucciones"
          >
            <HelpCircle className="w-5 h-5 text-blue-300" />
          </button>
        </div>

        <div className="flex grow flex-col gap-5  p-3">
          <div className="opacity-50 font-normal text-sm">
            Tu guía estratégica para la venta de divisas. Calcula el precio mínimo ideal para vender tu efectivo sin quedar por debajo de la tasa USDT. Una referencia clara y rápida para proteger tu capital y negociar siempre con los mejores márgenes del mercado.
          </div>

          <div className="flex flex-col gap-3">
            <span className="flex items-center bg-blue-900/10 p-3 rounded-md border border-white/5"><Landmark className="bg-blue-950 text-blue-500 rounded-md p-1 mr-2" /><p className="text-sm font-thin opacity-50">Datos de venta</p></span>

            <div className="flex flex-col gap-4">
              {inputData.map(({ label, unit, placeholder, setter, explanation }) => (
                <div key={label} className="bg-blue-900/10 p-4 rounded-xl border border-white/5 shadow-inner">
                  <InputComponent
                    label={label}
                    unit={unit}
                    placeholder={placeholder}
                    onChange={setter}
                    explanation={explanation}
                  />
                </div>
              ))}
            </div>


          </div>
          {divisa > 0 && bs > 0 && <div className="flex flex-col bg-linear-to-r from-blue-300/10 to-blue-300/5 p-4 rounded-xl border border-blue-500/20 gap-5 animate-fade-in-up shadow-2xl shadow-blue-900/20">
            <div className="flex justify-between opacity-70 text-sm font-thin"><p>Bs total despues de venta</p><p>Precio por cada $</p></div>

            <div className="flex flex-col">
              <div className="flex justify-center gap-2 text-3xl text-orange-400">
                <div className="flex items-center  font-bold">{(totalBinance * bs).toFixed(2)}<p>Bs</p></div>
                /
                <div className="flex items-center font-bold">{((totalBinance * bs) / divisa).toFixed(2)}<p >Bs</p></div>
              </div>
              <div className="flex justify-center opacity-70 text-sm font-thin"> vendidos: {totalBinance.toFixed(2)} USDT</div>
            </div>
            <hr className="opacity-10" />
            <p className="opacity-70 text-sm font-thin text-center">Vende en físico solo si el precio es mayor a {((totalBinance * bs) / divisa).toFixed(2)} Bs Si te ofrecen menos, obtendrás mayor beneficio convirtiendo tus divisas a USDT.</p>
          </div>}
        </div>
        <footer className="flex gap-1 justify-center opacity-70 p-4 bg-[#020617] bg-linear-to-r from-blue-300/10 to-blue-300/5 border-t border-white/5 mt-auto">
          <p>herramienta hecha por</p> <Link className="text-violet-400" href="https://jodomodev.vercel.app/">jodomodev</Link></footer>

      </div> {/* End of relative z-10 wrapper */}

      <InstructionsModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
