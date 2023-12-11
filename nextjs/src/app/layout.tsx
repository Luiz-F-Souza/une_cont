import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/Sidebar"
import { Header } from "@/components/Header"
import { twMerge } from "tailwind-merge"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "UneCont - Painel gerencial",
  description: `A UneCont automatiza todo o processo de escrituração e análise de retenção de impostos 
  sobre notas fiscais de serviços tomados, garantindo agilidade no ciclo financeiro, 
  segurança fiscal e redução de horas gastas para empresas e escritórios contábeis através de nossa inteligência fiscal.`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={twMerge("min-h-screen", inter.className)}>
        <div className="flex">
          <Sidebar />
          <section className="flex-grow">
            <main>
              <Header />
              {children}
            </main>
          </section>
        </div>
      </body>
    </html>
  )
}
