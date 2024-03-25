import './globals.css'

export const metadata = {
  title: 'Olá, eu sou Gleice Mara',
  description: 'Aqui você encontra alguns links para as minhas redes sociais e meus conteúdos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="h-full min-h-screen bg-[#D8D7D6] ">{children}</body>
    </html>
  )
}
