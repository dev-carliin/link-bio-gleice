import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from "react-icons/fa"




export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <div className=' w-full flex flex-col gap-4 md:max-w-xl mx-4 py-8 bg-[#D8D7D6]  my-8 rounded-xl px-4'>
        <div className="flex items-center">
          <Image
            src="/foto_perfil.jpg"
            width={150}
            height={150}
            alt="Imagem do perfil de Gleice Mara"
            className="rounded-full"
          />

          <div className="ml-4">
          <Image
            src="/logo.svg"
            width={250}
            height={250}
            alt="Imagem do perfil de Gleice Mara"
           
          />

            <h1 className="text-1xl ">Olá, eu sou Gleice Mara!</h1>
            <p className="italic">Esteticista e Docente</p>
          </div>
        </div>
        <div className="flex w-full justify-around py-8 border-b border-zinc-800 mb-4">
          <a
            href="#"
            className="p-4 bg-[#FF00FF] rounded-full text-white "
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="p-4 bg-[#FF00FF] rounded-full text-white"
          >
            <FaInstagram  />
          </a>

          <a
            href="#"
            className="p-4 bg-[#FF00FF] rounded-full text-white"
          >
            <FaTiktok />
          </a>

          <a
            href="#"
            className="p-4 bg-[#FF00FF] rounded-full text-white"
          >
            <FaWhatsapp />
          </a>
        </div>
        <span className=" text-center uppercase">Links Úteis</span>
        <Link
          href="/clinica"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 mt-3 flex items-center justify-between"
        >
          AGENDAMENTO CLÍNICA
         
        </Link>

        <Link
          href="/cursos"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          CURSOS
         
        </Link>

        <a
          href="#"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REALCE ESTÉTICA 
         
        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REALCE ESTÉTICA 
         
        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
         REALCE ESTÉTICA 
         
        </a>

        <span className="text-[#FF00FF] min-full text-center mt-4">Criado por <a href="https://newcoding.com.br" className="text-fuchsia-400">Newcoding</a></span>
      </div>
    </main>
  )
}

