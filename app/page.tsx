'use client'

import { Landmark } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [divisa, setDivisa] = useState(0)
  const [porcentaje, setPorcentaje] = useState(0)
  const [bs, setBs] = useState(0)

  const totalBinance = (divisa - (divisa*(porcentaje/100))) - 0.06
  return (
    <div className="flex flex-col h-screen font-sans bg-blue-950/10">
      <div className="h-16 font-bold text-xl flex items-center px-2  bg-blue-900/10 border-y border-gray-800/50 w-full">
        DolarInteligente
      </div>
      <div className="flex grow flex-col gap-5  p-3">
        <div className="opacity-50 font-normal text-sm">
          Tu guía estratégica para la venta de divisas. Calcula el precio mínimo ideal para vender tu efectivo sin quedar por debajo de la tasa USDT. Una referencia clara y rápida para proteger tu capital y negociar siempre con los mejores márgenes del mercado.
        </div>

        <div className="flex flex-col flex-wrap bg-blue-900/10 p-3 rounded-md  gap-3">
          <span className="flex items-center"><Landmark className="bg-blue-950 text-blue-500 rounded-md p-1 mr-2"/><p className="text-sm font-thin opacity-50">Datos de venta</p></span>

        <div className="flex flex-wrap gap-4">
                    <div className="flex flex-col">
            <p className="text-xs opacity-50">cantidad en divisa</p>
            
            <div className="flex items-center text-3xl font-black"><input type="num" className="field-sizing-content min-w-3" onChange={(e) => setDivisa(Number(e.target.value))} placeholder="ej: 100" /><p className="font-normal opacity-50"> $</p></div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs opacity-50">% de cambio</p>
            
            <div className="flex items-center text-3xl font-black"><input type="num" className="field-sizing-content min-w-3" onChange={(e) => setPorcentaje(Number(e.target.value))} placeholder="por defecto 0" /><p className="font-normal opacity-50">%</p></div>
          </div>

          <div className="flex flex-col">
            <p className="text-xs opacity-50">tasa de cambio USDT x Bs </p>
            
            <div className="flex items-center text-3xl font-black"><input type="num" className="field-sizing-content min-w-3" onChange={(e) => setBs(Number(e.target.value))} placeholder="ej: 510" /><p className="font-normal opacity-50">Bs</p></div>
          </div>
        </div>


        </div>
        { divisa >0 && bs > 0  && <div className="flex flex-col bg-linear-to-r from-blue-300/10 to-blue-300/5 p-3 rounded-md  gap-5">
        <div className="flex justify-between opacity-70 text-sm font-thin"><p>Bs total despues de venta</p><p>Precio por cada $</p></div>

          <div className="flex flex-col">
            <div className="flex justify-center gap-2 text-3xl text-orange-400">
              <div className="flex items-center  font-bold">{(totalBinance*bs).toFixed(2)}<p>Bs</p></div>
            /
            <div className="flex items-center font-bold">{((totalBinance*bs)/divisa).toFixed(2)}<p >Bs</p></div>
            </div>
          <div className="flex justify-center opacity-70 text-sm font-thin"> vendidos: {totalBinance.toFixed(2)} USDT</div>
          </div>
          <hr className="opacity-10"/>
          <p className="opacity-70 text-sm font-thin text-center">Vende en físico solo si el precio es mayor a {((totalBinance*bs)/divisa).toFixed(2)} Bs Si te ofrecen menos, obtendrás mayor beneficio convirtiendo tus divisas a USDT.</p>
        </div>}
      </div>
      <footer className="flex gap-1  justify-center opacity-70 p-4 bg-linear-to-r from-blue-300/10 to-blue-300/5"><p>herramienta hecha por</p> <Link className="text-violet-400" href="https://jodomodev.vercel.app/">jodomodev</Link></footer>
      
      
    </div>
  );
}
