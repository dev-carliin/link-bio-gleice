import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, } from "react-icons/fa"




export default function clinica() {
  return (
    <main className="w-full flex justify-center">
      <div className=' w-full flex flex-col gap-4 md:max-w-xl mx-4 py-8 bg-[#D8D7D6]  my-8 rounded-xl px-4'>
        <div className="flex items-center">
          <Image
            src="/foto_clinica.jpeg"
            width={150}
            height={150}
            alt="Imagem do perfil de Gleice Mara"
            className="rounded-full"
          />

          <div className="ml-8 text-center">
            <span>sua</span>
            <h1 className="text-2xl uppercase ">beleza</h1>
            <p className="italic">ainda mais em</p>
            <h2 className="text-2xl uppercase"> evidência</h2>
          </div>
        </div>
        <div className="flex w-full justify-around py-8 border-b border-zinc-800 mb-4">

        </div>
        <span className=" text-center uppercase">agendamento clínica</span>
        <Link className="text-lg" href={"/"} >
          <FaArrowLeft />
        </Link>
        <a
          href="#"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 mt-3 flex items-center justify-between"
        >
         BOTOX

        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
         PREENCHIMENTO

        </a>

        <a
          href="#"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          FIOS DE PDO

        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          ULTRAFORMER

        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          PEELING

        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REMOÇÃO

        </a>
        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          CONSULTAS

        </a>
        <span className="text-[#FF00FF] min-full text-center mt-4">Criado por <a href="https://newcoding.com.br" className="text-fuchsia-400">Newcoding</a></span>
      </div>
    </main>
  )
}

