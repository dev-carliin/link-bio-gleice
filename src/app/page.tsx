import Image from "next/image";
import { FaExternalLinkAlt, FaFacebook, FaInstagram, FaTiktok, FaWhatsapp} from "react-icons/fa"




export default function Home() {
  return (
    <main className="w-full flex justify-center">
      <div className=' w-full flex flex-col gap-4 md:max-w-xl mx-4 py-8 bg-[#D8D7D6]  my-8 rounded-xl px-4'>
        <div className="flex items-center">
          <Image
            src="/foto_perfil.jpeg"
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

            <h1 className="text-2xl text-[#FF00FF]">Olá, eu sou Geice Mara!</h1>
            <p className="italic text-[#FF00FF]">Esteticista e professora.</p>
          </div>
        </div>
        <div className="flex w-full justify-around py-8 border-b border-zinc-800 mb-4">
          <a
            href="#"
            className="p-4 bg-[#FF00FF] rounded-full text-white"
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
        <a
          href="#"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
         REALCE ESTÉTICA 
          <FaExternalLinkAlt />
        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REALCE ESTÉTICA 
          <FaExternalLinkAlt />
        </a>

        <a
          href="#"
          className="w-full border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REALCE ESTÉTICA 
          <FaExternalLinkAlt />
        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
          REALCE ESTÉTICA 
          <FaExternalLinkAlt />
        </a>

        <a
          href="#"
          className="w-full  border-2 border-[#FF00FF] text-neutral-900 p-4 flex items-center justify-between"
        >
         REALCE ESTÉTICA 
          <FaExternalLinkAlt />
        </a>

        <span className="text-[#FF00FF] min-full text-center mt-4">Criado por <a href="https://newcoding.com.br" className="text-fuchsia-400">Newcoding</a></span>
      </div>
    </main>
  )
}

